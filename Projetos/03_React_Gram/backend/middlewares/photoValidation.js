const { body } = require('express-validator')

const photoInsertValidation = () => {
    // verificação do arquivo
    return [
        body("title")
        .not()
        .equals("undefined")
        .withMessage("O titulo é obrigatório.")
        .isString()
        .withMessage("O titulo é obrigatório.")
        .isLength({ min: 3 })
        .withMessage("O titulo precisa ter no minimo 3 caracteres."),
        //// para validar a imagem utilizamos um custom validation
        body("image").custom((value, {req}) => {
            //// varificação da requisição
            if(!req.file) {
                throw new Error("A imagem é obrigatória!")
            } 
            return true
        })
    ]
}

const photoUpdateValidation = () => {
    return [
        body('title')
        .optional()
        .isString()
        .withMessage("O titulo é obrigatorio!")
        .isLength({ min: 3 })
        .withMessage("O titulo precisa ter no minimo 3 caracteres."),
    ]
}

const commentValidation = () => {
    return [
        body('comment')
        .isString()
        .withMessage("O comentário é obrigatorio!")
    ]
}

module.exports = {photoInsertValidation, photoUpdateValidation, commentValidation}