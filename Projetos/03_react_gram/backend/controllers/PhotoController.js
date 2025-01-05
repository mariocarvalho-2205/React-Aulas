const Photo = require("../models/Photo");

const ObjectId = require("mongoose").Types.ObjectId;

const User = require("../models/User");

// Insert a photo, with an user related to it
module.exports = class PhotoController {
  static async insertPhoto(req, res) {
    const { title } = req.body;
    const image = req.file.filename;

    const reqUser = req.user;

    try {
      const user = await User.findById(reqUser._id);

      //creating a photo
      const newPhoto = await Photo.create({
        image,
        title,
        userId: user._id,
        userName: user.name,
      });

      // if photo was created successfully, return data
      if (!newPhoto) {
        res.status(422).json({
          errors: ["Houve um problema, por favor tente novamente mais tarde!"],
        });
        return;
      }

      res
        .status(200)
        .json({ message: ["Foto inserida com sucesso!"], newPhoto });
    } catch (error) {
      res
        .status(500)
        .json({ errors: ["Error no servidor! Photos Controller", error] });
    }
  }

  static async deletePhoto(req, res) {
    const { id } = req.params;
    const reqUser = req.user;

    try {
      if (!ObjectId.isValid(id)) {
        res.status(422).json({ errors: ["Id Invalido!!"] });
        return;
      }

      const photo = await Photo.findById(new ObjectId(id));
      console.log(id);

      if (!photo) {
        res.status(404).json({ errors: ["Foto não encotrada!"] });
        return;
      }
      if (!photo.userId.equals(reqUser._id)) {
        res.status(422).json({
          errors: ["Ocorreu um erro, por favor tente mais tarde! delete photo"],
        });
        return;
      }

      await Photo.findByIdAndDelete(photo._id);
      res
        .status(200)
        .json({ id: photo._id, message: "foto excluida com sucesso!" });
    } catch (error) {
      res.status(500).json({ errors: ["Houve um error no servidor!"], error });
    }
  }

  static async getAllPhotos(req, res) {
    try {
      const photos = await Photo.find({})
        .sort([["createdAt", -1]])
        .exec();

      res.status(200).json(photos);
    } catch (error) {
      res.status(500).json({ errors: ["Houve um erro, tente mais tarde!"] });
    }
  }

  static async getUserPhotos(req, res) {
    const { id } = req.params;

    try {
      if (!ObjectId.isValid(id)) {
        res.status(422).json({ errors: ["Id Invalido!!"] });
        return;
      }

      const photos = await Photo.find({ userId: new ObjectId(id) })
        .sort([["createdAt", -1]])
        .exec();

      console.log(photos);
      if (!photos) {
        res.status(404).json({ errors: ["Fotos não encotrada!"] });
        return;
      }
      res.status(200).json(photos);
    } catch (error) {
      res.status(500).json({ errors: ["Houve um erro, tente mais tarde!"] });
    }
  }

  static async getPhotoById(req, res) {
    const { id } = req.params;

    try {
      if (!ObjectId.isValid(id)) {
        res.status(422).json({ errors: ["Id Invalido!!"] });
        return;
      }

      const photo = await Photo.findById(new ObjectId(id));

      if (!photo) {
        res.status(404).json({ errors: ["Fotos não encotrada!"] });
        return;
      }

      res.status(200).json(photo);
    } catch (error) {
      res.status(500).json({ errors: ["Houve um erro, tente mais tarde!"] });
    }
  }

  static async updatePhoto(req, res) {
    const { id } = req.params;
    const { title } = req.body;

    const reqUser = req.user;
    try {
      if (!ObjectId.isValid(id)) {
        res.status(422).json({ errors: ["Id Invalido!!"] });
        return;
      }
      const photo = await Photo.findById(new ObjectId(id));

      if (!photo) {
        res.status(404).json({ errors: ["Fotos não encotrada!"] });
        return;
      }

      if (!photo.userId.equals(reqUser._id)) {
        res.status(422).json({
          errors: [
            "Ocorreu um erro, por favor tente mais tarde! update photo user diferente",
          ],
        });
        return;
      }

      if (title) {
        photo.title = title;
      }

      await photo.save();
      res
        .status(200)
        .json({ photo, message: ["Foto atualizada com sucesso!"] });
    } catch (error) {
      res.status(500).json({ errors: ["Houve um erro, tente mais tarde!"] });
    }
  }

  static async likePhoto(req, res) {
    const { id } = req.params;
    const reqUser = req.user;

    try {
      if (!ObjectId.isValid(id)) {
        res.status(422).json({ errors: ["Id Invalido!!"] });
        return;
      }
      const photo = await Photo.findById(new ObjectId(id));

      if (!photo) {
        res.status(404).json({ errors: ["Fotos não encotrada!"] });
        return;
      }

      if (photo.likes.includes(reqUser._id)) {
        res.status(422).json({
          errors: ["Você já curtiu a foto!"],
        });
        return;
      }

      // put user id in likes array

      photo.likes.push(reqUser._id);

      await photo.save();
      res
        .status(200)
        .json({
          photoId: id,
          userId: reqUser._id,
          message: ["A foto foi curtida!"],
        });
    } catch (error) {
      res.status(500).json({ errors: ["Houve um erro, tente mais tarde!"] });
    }
  }

  static async commentPhoto(req, res) {
    const { id } = req.params;

    const { comment } = req.body;
    const reqUser = req.user;

    try {
      if (!ObjectId.isValid(id)) {
        res.status(422).json({ errors: ["Id Invalido!!"] });
        return;
      }

      const user = await User.findById(new ObjectId(reqUser._id));
      const photo = await Photo.findById(new ObjectId(id));

      if (!photo) {
        res.status(404).json({ errors: ["Fotos não encotrada!"] });
        return;
      }

      // put comment in the array comments
      const userComment = {
        comment,
        userName: user.name,
        userImage: user.profileImage,
        userId: user._id,
      };
      photo.comments.push(userComment);

      await photo.save();
      res
        .status(200)
        .json({
          comment: userComment,
          message: ["O comentario foi adicionado com sucesso!"],
        });
    } catch (error) {
      res.status(500).json({ errors: ["Houve um erro, tente mais tarde!"] });
    }
  }

  static async searchPhotos(req, res) {
    const {q} = req.query

    try {
      const photos = await Photo.find({title: new RegExp(q, "i")}).exec()

      res.status(200).json(photos)
    } catch (error) {
      res.status(500).json({ errors: ["Houve um erro, tente mais tarde!"] });
      
    }
  }
};
