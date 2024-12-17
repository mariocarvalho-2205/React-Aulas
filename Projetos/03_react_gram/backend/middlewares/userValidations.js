const { body } = require("express-validator");

const userCreateValidation = () => {
  return [
    body("name").isString().withMessage("O nome é obrigatório!"),
    body("email").isString().withMessage("O email é obrigatório!"),
    body("password").isString().withMessage("A senha é obrigatória!").isLength(6).withMessage("A senha precisa ter 6 caracteres!"),
    body("confirmPassword").isString().withMessage("A confirmação de senha é obrigatória!")

];
};

module.exports = {
  userCreateValidation,
};
