import User from "../models/User.js"
import jwt from "jsonwebtoken"
const jwtSecret = process.env.JWT_SECRET;

export const authGuard = async (req, res, next) => {
    const authHeader = req.headers["authorization"]
    const token = authHeader && authHeader.split(" ")[1]  // verifica se vem, e se vem separa a string

    if(!token) return res.status(401).json({errors: ["Acesso Negado!"]})  // verifica se token veio

    try {

        const verified = jwt.verify(token, jwtSecret)
        req.user = await User.findById(verified.id).select("-password")
        
        // console.log("auth", user)   // debugger ok
        // res.status(200).json({message: ["Acesso permitido"], token}) // debugger ok
        next()
    } catch (error) {
        res.status(401).json({errors: ["Token invalido!"]})
    }

}