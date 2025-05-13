import User from "../models/User.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


const jwtSecret = process.env.JWT_SECRET
console.log(jwtSecret ? "JWT_SECRET: Definido register (não mostrando por segurança)" : "Não definido")

// Generate use token
const generateToken = (id) => {
    return jwt.sign({ id }, jwtSecret, {
        expiresIn: "7d",
    });
    
};

export const register = async (req, res) => {
    res.send("Registro")
}
