const Photo = require('../models/Photo')

const mongoose = require('mongoose')
const User = require('../models/User')

// Insert a photo, with an user related to it
module.exports = class PhotoController {
    static async insertPhoto (req, res) {
        const { title } = req.body
        const image = req.file.filename

        const reqUser = req.user
        console.log(reqUser, 'reqUser')

        try {
            
            const user = await User.findById(reqUser._id)

            //creating a photo
            const newPhoto = await Photo.create({
                image,
                title,
                userId: user._id,
                userName: user.name
            })
    
    
            // if photo was created successfully, return data
            if (!newPhoto) {
                res.status(422).json({errors: ["Houve um problema, por favor tente novamente mais tarde!"]})
            }

            res.status(200).json({message: ['Foto inserida com sucesso!']})
        } catch (error) {
            res.status(500).json({errors: ["Error no servidor! Photos Controller", error]})
        }
    }
}