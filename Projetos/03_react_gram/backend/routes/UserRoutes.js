const router = require("express").Router();
const UserController = require("../controllers/UserController");

const validate = require("../middlewares/handleValidation");
const {userCreateValidation} = require("../middlewares/userValidations");

router.post(
  "/register",
  userCreateValidation(),
  validate,
  UserController.register
);

router.get("/", UserController.all);

module.exports = router;
