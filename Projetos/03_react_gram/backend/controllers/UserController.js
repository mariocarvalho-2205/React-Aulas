import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const jwtSecret = process.env.JWT_SECRET;
console.log(
  jwtSecret
    ? "JWT_SECRET: Definido register (não mostrando por segurança)"
    : "Não definido"
);

// Generate use token
const generateToken = (id) => {
  return jwt.sign({ id }, jwtSecret, {
    expiresIn: "7d",
  });
};

// register user
export const register = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    return res
      .status(422)
      .json({ errors: ["Por favor, utilize outro email!"] });
  }

  // Generate password hash
  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password, salt);

  const newUser = {
    name,
    email,
    password: passwordHash,
  };

  try {
    const userCreate = await User.create(newUser);

    // if user was created successfully, return the token
    if (!userCreate) {
      return res
        .ststus(422)
        .json({ errors: ["Houve um erro, por favor tente mais tarde."] });
    }

    return res.status(201).json({
      message: ["Usuario criado com sucesso!"],
      _id: userCreate._id,
      token: generateToken(userCreate._id), // aqui e gerado o token com a função criada no topo do codigo
    });
  } catch (error) {
    res.status(500).json({ errors: ["Erro no servidor"] });
  }

  return res.status(200).json({ message: "Registro", passwordHash });
};

// login user
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    // check if user exists
    if (!user) {
      return res.status(404).json({ errors: ["Usuario não encontrado."] });
    }

    // check if password matches
    if (!(await bcrypt.compare(password, user.password))) {
      // aqui o bcrypt compara as senhas com a encriptada
      return res.status(422).json({ errors: ["Senha invalida"] });
    }

    return res.status(201).json({
      message: ["Usuario Logado com sucesso!"],
      _id: user._id,
      profileImage: user.profileImage,
      token: generateToken(user._id), // aqui e gerado o token com a função criada no topo do codigo
    });
  } catch (error) {
    return res.status(500).json({
      error: ["Houve um erro, por favor tente mais tarde"],
      error: error.errors,
    });
  }
};

// get current user
export const getCurrentUser = async (req, res) => {
  const user = req.user;
  // console.log("controller", user)  // debug ok

  try {
    return res.status(200).json({ message: ["User Logado"], user });
  } catch (error) {
    return res
      .status(500)
      .json({ error: ["Erro no servidor"], error: error.errors });
  }
};

// update current user
export const update = async (req, res) => {
  const { name, password, bio } = req.body;

  let profileImage = null;

  if (req.file) {
    profileImage = req.file.filename;
  }

  try {
    const reqUser = req.user;
    //console.log("reqUser _id",reqUser._id)  // chegou ok
    const user = await User.findById(reqUser._id).select("-password");
    //console.log("update user", user) // chegou ok

    if (name) {
      user.name = name;
    }

    if (password) {
      // Generate password hash
      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash(password, salt);
      user.password = passwordHash;
    }

    if (profileImage) {
      user.profileImage = profileImage;
    }

    if (bio) {
      user.bio = bio;
    }

    // console.log("user atualizado", user, bio)  // chegou ok
    await user.save();

    res.status(200).json({ message: ["Usuario atualizado com sucesso"], user });
  } catch (error) {
    res.status(500).json(error);
  }
};

// get user by id
export const getUserById = async (req, res) => {
  const { id } = req.params;

  // console.log("User id - ", id)  // chegou

  try {
    const user = await User.findById(id).select("-password");

    if (!user) {
      return res.status(404).json({ errors: ["Usuário não encontrado!"] });
    }

    return res.status(200).json({ message: ["User by id"], user });
  
  } catch (error) {
    // Este bloco captura erros de formato inválido de ID
    return res
      .status(404)
      .json({ errors: ["ID inválido"] });
  }
};
