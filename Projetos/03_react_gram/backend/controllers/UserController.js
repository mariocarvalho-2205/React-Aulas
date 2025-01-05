const User = require("../models/User");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET;

const generateToken = require("../helpers/created-user-token");
const ObjectId = require("mongoose").Types.ObjectId;
// const generateToken = (id) => {
//     return jwt.sign({id}, jwtSecret, {
//         expiresIn: '1d',
//     })
// }

module.exports = class UserController {
  static async all(req, res) {
    await res.status(200).json({ message: ["All Ok!!!"] });
  }

  static async register(req, res) {
    const { name, email, password, confirmPassword } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      res.status(422).json({ errors: ["Por favor, utilize um outro email!"] });
      return;
    }

    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    try {
      const newUser = await User.create({
        name,
        email,
        password: passwordHash,
      });

      if (!newUser) {
        res.status(422).json({
          errors: ["Houve um erro, não foi possivél criar o usuario!"],
        });
        return;
      }

      res.status(201).json({
        message: ["Usuario criado com sucesso!"],
        id: newUser._id,
        token: generateToken(newUser._id),
      });
    } catch (error) {
      res.status(500).json({ errors: ["houve algum erro no servidor!"] });
    }
  }

  static async login(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      res.status(404).json({ errors: ["Usuário não encontrado!"] });
      return;
    }

    if (!(await bcrypt.compare(password, user.password))) {
      res.status(422).json({ errors: ["Senha invalida!!"] });
      return;
    }

    try {
      res.status(200).json({
        message: ["Login efetuado com sucesso!"],
        user: user.name,
        profileImage: user.profileImage,
        token: generateToken(user._id),
      });
    } catch (error) {
      res.status(500).json({ message: ["Houve algum erro no servidor!"] });
    }
  }

  static async getCurrentUser(req, res) {
    const user = req.user;
    res.status(200).json(user);
  }

  static async update(req, res) {
    const { name, password, bio } = req.body;

    let profileImage = null;

    if (req.file) {
      profileImage = req.file.filename;
    }
    try {
      const reqUser = req.user;

      if (!ObjectId.isValid(reqUser._id)) {
        res.status(422).json({ errors: ["Id Invalido!!"] });
        return;
      }
      const user = await User.findById(reqUser._id);

      if (name) {
        user.name = name;
      }

      if (password) {
        const salt = await bcrypt.genSalt(12);
        const passwordHash = await bcrypt.hash(password, salt);
        user.password = passwordHash;
      }


      if (profileImage) {
        user.profileImage = profileImage
      }

      console.log(profileImage)
      if (bio) {
        user.bio = bio;
      }

      await user.save();

      res
        .status(200)
        .json({ message: ["Usuario atualizado com sucesso!", user] });
    } catch (error) {
      res
        .status(500)
        .json({ erros: ["Não foi possivél atualizar o usuario!", error] });
    }
  }

  static async getUserById (req, res) {
    const { id } = req.params
    
    if (!ObjectId.isValid(id)) {
      res.status(422).json({errors: ["Id Invalido!!"]})
      return
    }

    try {
      
      const user = await User.findById(id).select("-password");
  
      if (!user) {
        res.status(400).json({errors: ["Usuário não encontrado!"]})
        return
      }
  
      res.status(200).json(user)
    } catch (error) {
      res.status(500).json({errors: ["Erro no servidor!"]})
    }
  }
};
