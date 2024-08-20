const Photo = require('../models/Photo')
const mongoose = require('mongoose')
const User = require("../models/User");

// Insert a photo, with an user related to it
const insertPhoto = async(req, res) => {

    // dados do arquivo
    const {title} = req.body
    const image = req.file.filename

    const reqUser = req.user

    const user = await User.findById(reqUser._id)

    // console.log('User em photo Controller',user, "requser", reqUser)
    // create a photo
    const newPhoto = await Photo.create({
        image,
        title,
        userId: user._id,
        userName: user.name
    })

    // if photo was created sucessfully, return data
    if(!newPhoto) {
        res.status(422).json({errors: ["Houve um problema, por favor tente novamente mais tarde."]})
    }
    res.send(newPhoto)
}

module.exports = {
    insertPhoto
}