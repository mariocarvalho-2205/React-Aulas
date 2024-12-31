const User = require("../models/User");
const jwt = require("jsonwebtoken");
const jwtSercret = process.env.JWT_SECRET;

const authGuard = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
//   console.log(req.headers, "authHeader");

  const token = authHeader && authHeader.split(" ")[1];
//   console.log(token, "token");

  if (!token) return res.status(401).json({ erros: ["Acesso negado! AuthGuard token!!!"] });

  try {
    const verified = jwt.verify(token, jwtSercret)

    req.user = await User.findById(verified.id).select("-password")

    next()

  } catch (error) {
    res.status(401).json({erros: ["Token Invalido! AuthGuard!!"]})
  }
};

module.exports = authGuard
