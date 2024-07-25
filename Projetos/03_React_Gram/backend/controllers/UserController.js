const User = require("../models/User");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET;

// Generate user token
const generateToken = (id) => {
  return jwt.sign({ id }, jwtSecret, {
    expiresIn: "7d",
  });
};

// Register User and sign in
const register = async (req, res) => {
  const { name, email, password } = req.body;
  // checa se o usurario existe
  const user = await User.findOne({ email }); // metodo do mongoose para pesquisar no banco de dados

  if (user) {
    // resposta da consulta
    res.status(422).json({ errors: ["Por favor, utilize outro email!"] });
    return;
  }

  // gerando hash da senha
  const salt = await bcrypt.genSalt(); // aqui gera a senha encriptada uma string aleatoria
  const passwordHash = await bcrypt.hash(password, salt); // bcrypt.hash(gera a senha aleatoria + a senha que o usuario digitou)

  // criando o usuario
  const newUser = await User.create({
    name,
    email,
    password: passwordHash,  // aqui ele atribui a password a nova hash criada pelo sistema
  });

  // se o usuario foi criado com sucesso
  if (!newUser) {
    res.status(422).json({ errors: ["Houve um erro, por favor tente mais tarde."]})
    return;
  }

  res.status(201).json({
    _id: newUser._id,
    token: generateToken(newUser._id),
  })

  res.send("Registro");
};

module.exports = {
  register,
};
