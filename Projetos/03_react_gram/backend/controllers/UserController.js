const User = require('../models/User')


const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const jwtSecret = process.env.JWT_SECRET

const generateToken = require('../helpers/created-user-token')
// const generateToken = (id) => {
//     return jwt.sign({id}, jwtSecret, {
//         expiresIn: '1d',
//     })
// }

module.exports = class UserController {
    static async all(req, res) {
        await res.status(200).json({message: "All Ok!!!"})
    }

    static async register(req, res) {
        const { name, email, password, confirmPassword} = req.body 

        console.log(name)

        try {

            res.status(200).json({message: "Usuario criado com sucesso!"})
            
        } catch (error) {
            res.status(500).json({message: "houve algum erro no servidor!", error})
            
        }
    }
}