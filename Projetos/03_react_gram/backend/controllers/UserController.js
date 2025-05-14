import User from "../models/User.js"
import bcrypt from "bcryptjs"
import { json } from "express"
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
    const { name, email, password} = await req.body

    const user = {name, email, password}
    console.log(name, email, password)
    return res.status(200).json({message: "Registro", user})
}
