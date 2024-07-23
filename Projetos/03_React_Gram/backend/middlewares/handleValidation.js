const { validationResult } = require('express-validator');

const validate = (req, res, next) => {

    const errors = validationResult(req);

    console.log(errors, "error em handleValidation")

    // verifica se tem error, se nao tiver, vai para o proximo middleware
    if (errors.isEmpty()) {
        return next()
    }

    // variavel criada para pegar novos errors extraidos da requisição
    const extractedErrors = []
    console.log(extractedErrors, "extractedErrors em handleValidation");


    // percorre o array de erros e pega o primeiro erro
    errors.array().map((err) => extractedErrors.push(err.msg));

    // retorna um erro 422 com a mensagem de erro
    return res.status(422).json({
        errors: extractedErrors,
    })

}

module.exports = validate;