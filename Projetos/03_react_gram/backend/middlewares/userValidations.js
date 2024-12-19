const { body } = require("express-validator");

const userCreateValidation = () => {
  return [
    body("name")
      .isString()
      .withMessage("O nome é obrigatório!")
      .isLength({ min: 3 })
      .withMessage("O nome precisa ter no minimo 3 caracteres!"),
    body("email")
      .isString()
      .withMessage("O email é obrigatório!")
      .isEmail()
      .withMessage("Insira um email valido!"),
    body("password")
      .isString()
      .withMessage("A senha é obrigatória!")
      .isLength({ min: 6 })
      .withMessage("A senha precisa ter no minimo 6 caracteres!"),
    body("confirmPassword")
      .isString()
      .withMessage("A confirmação de senha é obrigatória!")
      .custom((value, { req }) => {
        if (value !== req.body.password) {
          console.log(value);
          throw new Error("As senhas não são iguais!");
        }
        return true;
      })
      .withMessage("Confirmação se senha invalida"),
  ];
};

const userLoginValidation = () => {
  return [
    body("email")
      .isString()
      .withMessage("O email é obrigatório!")
      .isEmail()
      .withMessage("Insira um email valido!"),
    body("password")
      .isString()
      .withMessage("A senha é obrigatória!")
      .isLength({ min: 6 })
      .withMessage("A senha precisa ter no minimo 6 caracteres!")
  ];
};

module.exports = {
  userCreateValidation,
  userLoginValidation
};
