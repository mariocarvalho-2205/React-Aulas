import { z } from "zod";


export const PhotoSchema = z.object({
    title: z
    .string({required_error: "O título é obrigatório"})
    .min(3, {message: "O título precisa ter no minimo 3 caracteres"})
    .trim(),
})

// Se quiser validar também o arquivo
export const FileSchema = z.object({
    fieldname: z.string(),
    originalname: z.string(),
    encoding: z.string(),
    mimetype: z.string().refine(
      (mime) => ["image/jpeg", "image/png", "image/gif"].includes(mime),
      { message: "Formato de arquivo não suportado. Use JPEG, PNG ou GIF." }
    ),
    size: z.number().refine(
      (size) => size <= 5 * 1024 * 1024, // 5MB
      { message: "O arquivo deve ter no máximo 5MB" }
    ),
    // outros campos do multer...
  });