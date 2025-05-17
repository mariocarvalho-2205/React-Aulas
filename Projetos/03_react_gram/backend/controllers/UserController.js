import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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
  const user = req.user
  // console.log("controller", user)  // debug ok

  try {
    
    return res.status(200).json({message: ["User Logado"], user})
  } catch (error) {
    return res.status(500).json({error: ["Erro no servidor"], error: error.errors})
  }
}

export const update = async (req, res) => {
  res.send("Update")
}
