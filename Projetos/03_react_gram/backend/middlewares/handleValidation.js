import { z } from "zod";

export const validateRequest = (schema) => {
    return (req, res, next) => {
        try {
            // validando comrpo da requisição com o Schema
            const validateData = schema.parse(req.body)   

            req.body = validateData

            next()
        } catch (error) {
            const extractedAllErrors = []
            const extractedErrors = []
            error.errors.map((err) => extractedAllErrors.push(err.message))    // manda todos os erros
            extractedErrors.push(error.errors[0].message)                 // manda so um erro 
            console.log("Todos os erros", extractedAllErrors)
            console.log("Erro individual", extractedErrors)
            if(error.errors) {
                return res.status(422).json({
                    status: "error",
                    message: "Erro de validação",
                    errors: {Tratar: extractedErrors ,Todos: extractedAllErrors}
                })
            }

            return res.status(500).json({
                status: "error",
                message: "Erro interno do servidor",
                error: error.errors                
            })
        }

    }
}