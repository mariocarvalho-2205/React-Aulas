import { FileSchema, PhotoSchema } from "./photoSchema.js";

export const validatePhotoUpload = (req, res, next) => {
  try {
    // Validar os campo do formulario
    const validateData = PhotoSchema.parse(req.body);

    // garantir que o req.body tenha os dados validados
    req.body = validateData;

    // verifica se o arquivo existe
    if (!req.file) {
      return res
        .status(422)
        .json({ errors: ["A imagem é obrigatória photovalidation"] });
    }

    try {
      FileSchema.parse(req.file); // aqui valida o arquivo
    } catch (fileError) {
      return res
        .status(422)
        .json({ errors: fileError.errors.map((err) => err.message) });
    }

    next();
  } catch (error) {
    // Tratar erros de validação dos campos do formulário
    const extractedErrors = error.errors.map((err) => err.message);

    return res.status(422).json({
      error: ["Error no validate photo upload"],
      errors: extractedErrors,
    });
  }
};
