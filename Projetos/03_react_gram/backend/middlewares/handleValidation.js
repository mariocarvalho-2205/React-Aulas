const { validationResult } = require('express-validator')

const validate = (req, res, next) => {

    const errors = validationResult(req)

    if (errors.isEmpty()){
        return next()
    }

    // console.log(errors)
    const extractedErros = []
    
    errors.array().map((err) => extractedErros.push(err.msg))
    
    // console.log(extractedErros)
    
    return res.status(422).json({
        errors: extractedErros
    })
}

module.exports = validate
