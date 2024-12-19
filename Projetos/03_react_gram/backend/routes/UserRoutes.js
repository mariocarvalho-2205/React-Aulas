const router = require("express").Router();
const UserController = require("../controllers/UserController");

const validate = require("../middlewares/handleValidation");
const {userCreateValidation, userLoginValidation} = require("../middlewares/userValidations");

router.post(
  "/register",
  userCreateValidation(),
  validate,
  UserController.register
);

router.post('/login', userLoginValidation(), validate, UserController.login)

router.get("/", UserController.all);

module.exports = router;
