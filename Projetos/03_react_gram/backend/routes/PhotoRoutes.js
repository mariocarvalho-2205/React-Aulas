const router = require("express").Router();
const UserController = require("../controllers/UserController");

// controller
const PhotoController = require('../controllers/PhotoController')

// middlewares
const { photoInsertValidation, photoUpdateValidation, photoCommentValidation } = require('../middlewares/photovalidation')
const validate = require('../middlewares/handleValidation')
const authGuard = require("../middlewares/authGuard");
const imageUpload = require('../middlewares/imageUpload');

router.post("/", authGuard, imageUpload.single("image"), photoInsertValidation(), validate, PhotoController.insertPhoto)
router.delete("/:id", authGuard, PhotoController.deletePhoto)
router.get("/", authGuard, PhotoController.getAllPhotos)
router.get("/user/:id", authGuard, PhotoController.getUserPhotos)
router.get("/search", authGuard, PhotoController.searchPhotos)
router.get("/:id", authGuard, PhotoController.getPhotoById)
router.put("/:id", authGuard, photoUpdateValidation(), validate, PhotoController.updatePhoto)
router.put("/like/:id", authGuard, PhotoController.likePhoto)
router.put("/comment/:id", authGuard, photoCommentValidation(), validate, PhotoController.commentPhoto)

module.exports = router