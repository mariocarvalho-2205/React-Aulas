const router = require("express").Router();
const UserController = require("../controllers/UserController");

// controller
const PhotoController = require('../controllers/PhotoController')

// middlewares
const { photoInsertValidation } = require('../middlewares/photovalidation')
const validate = require('../middlewares/handleValidation')
const authGuard = require("../middlewares/authGuard");
const imageUpload = require('../middlewares/imageUpload');

router.post("/", authGuard, imageUpload.single("image"), photoInsertValidation(), validate, PhotoController.insertPhoto)



module.exports = router