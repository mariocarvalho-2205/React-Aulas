const Photo = require('../models/Photo')
const mongoose = require('mongoose')
const User = require("../models/User");

// Insert a photo, with an user related to it
const insertPhoto = async (req, res) => {

    // dados do arquivo
    const { title } = req.body
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
    if (!newPhoto) {
        res.status(422).json({ errors: ["Houve um problema, por favor tente novamente mais tarde."] })
        return
    }
    res.send(newPhoto)
}

// remove a photo from db
const deletePhoto = async (req, res) => {
    const { id } = req.params;
    const reqUser = req.user;

    try {
        // Verificar se o ID da foto é válido
        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.status(400).json({ errors: ["ID inválido!"] });
            return;
        }

        const photo = await Photo.findById(id);

        // Verificar se a foto existe
        if (!photo) {
            res.status(404).json({ errors: ["Foto não encontrada!"] });
            return;
        }

        // Verificar se a foto pertence ao usuário
        if (!photo.userId.equals(reqUser._id)) {
            res.status(403).json({ errors: ["Você não tem permissão para deletar esta foto."] });
            return;
        }

        await Photo.findByIdAndDelete(photo._id);

        res.status(200).json({ id: photo._id, message: "Foto excluída com sucesso!" });
    } catch (error) {
        res.status(500).json({ errors: ["Erro ao deletar a foto. Por favor, tente novamente mais tarde."] });
    }
};

// get all photos
const getAllPhotos = async (req, res) => {
    const photos = await Photo.find({})
        .sort([['createdAt', -1]])
        .exec()

    return res.status(200).json(photos)
}

// get user photos
const getUserPhotos = async (req, res) => {

    // pegar o id da url
    const { id } = req.params

    const photos = await Photo.find({ userId: id })
        .sort([['createdAt', -1]])
        .exec()
    return res.status(200).json(photos)
}

const getPhotoById = async (req, res) => {

    // pegar id da photo
    const { id } = req.params

    try {
        // check id is valid
        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.status(404).json({ error: ["ID da Foto Invalido."] })
            return
        }

        const photo = await Photo.findById(id)

        if (!photo) {
            res.status(404).json({ error: ["Foto não encontrada."] })
        }
        res.status(200).json(photo)
    } catch (error) {
        res.status(500).json({ errors: ["Erro ao localizar a foto. Por favor, tente novamente mais tarde."] });
    }
}

const updatePhoto = async (req, res) => {
    const { id } = req.params
    const { title } = req.body

    const reqUser = req.user

    try {
        // check id is valid
        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.status(404).json({ error: ["ID da Foto Invalido."] })
            return
        }
        // check if photo exists
        const photo = await Photo.findById(id)

        if (!photo) {
            res.status(404).json({ error: ["Foto não encontrada."] })
        }

        // if photo belongs to user
        if (!photo.userId.equals(reqUser._id)) {
            res.status(422).json({ errors: ["Você não tem permissão para atualizar esta foto."] });
            return;
        }

        if (title) {
            photo.title = title
        }

        await photo.save()

        res.status(200).json({ photo, message: "Foto atualizada com sucesso!" })

    } catch (error) {
        res.status(500).json({ errors: ["Erro ao deletar a foto. Por favor, tente novamente mais tarde."] });
    }
}

// like a photo
const likePhoto = async (req, res) => {
    const { id } = req.params
    const reqUser = req.user

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.status(404).json({ error: ["Id da foto invalida"] })
            return
        }

        const photo = await Photo.findById(id)

        if (!photo) {
            res.status(422).json({ error: ["Foto nao encontrada."] })
            return
        }

        // check if user already liked the photo
        if (photo.likes.includes(reqUser._id)) {
            res.status(422).json({ error: ["Você já curtiu a foto."] })
            return
        }

        // Put user id in likes array
        photo.likes.push(id)

        photo.save()

        res.status(200).json({ photoId: id, userId: reqUser._id, message: "A foto foi curtida!" })

    } catch (error) {
        res.status(500).json({ errors: ["Erro ao deletar a foto. Por favor, tente novamente mais tarde."] });

    }
}

// Comment functionality
const commentPhoto = async (req, res) => {
    const { id } = req.params
    const { comment } = req.body
    const reqUser = req.user

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.status(404).json({ error: ["Id da foto invalida"] })
            return
        }

        const user = await User.findById(reqUser._id)
        const photo = await Photo.findById(id)

        if (!photo) {
            res.status(422).json({ error: ["Foto nao encontrada."] })
            return
        }
        // Put comment in the array comments
        const UserComment = {
            comment,
            userName: user.name,
            userImage: user.profileImage,
            userId: user._id,
        }


        photo.comments.push(UserComment)

        await photo.save()

        res.status(200).json({
            comment: UserComment,
            message: "O comentário adicionado com sucesso!"
        })

    } catch (error) {
        res.status(500).json({ errors: ["Erro ao deletar a foto. Por favor, tente novamente mais tarde."] });

    }
}

// Search photos by title

const searchPhotos = async (req, res) => {
    const {q} = req.query

    const photos = await Photo.find({ title: new RegExp(q, 'i')}).exec()

    res.status(200).json(photos)
}

module.exports = {
    insertPhoto,
    deletePhoto,
    getAllPhotos,
    getUserPhotos,
    getPhotoById,
    updatePhoto,
    likePhoto,
    commentPhoto,
    searchPhotos
}