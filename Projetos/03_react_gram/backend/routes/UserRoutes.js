const router = require("express").Router();
const UserController = require("../controllers/UserController");

const validate = require("../middlewares/handleValidation");
const {userCreateValidation, userLoginValidation, userUpdateValidation} = require("../middlewares/userValidations");
const authGuard = require("../middlewares/authGuard")
const imageUpload = require("../middlewares/imageUpload")

router.post(
  "/register",
  userCreateValidation(),
  validate,
  UserController.register
);

router.post("/login", userLoginValidation(), validate, UserController.login)
router.get("/profile", authGuard, UserController.getCurrentUser)
router.put("/", authGuard, userUpdateValidation(), validate, imageUpload.single("profileImage"), UserController.update)

router.get("/", UserController.all);

module.exports = router;
