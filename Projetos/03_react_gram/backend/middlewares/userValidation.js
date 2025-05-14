import { z } from "zod";

// Create user Validation
export const UserCreateSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: "O nome precisa ter no minimo 3 caracteres" })
      .toLowerCase(),
    email: z
      .string({ message: "O email é obrigatório!" })
      .email({ message: "Insira um email valido!" }),
    password: z
      .string({ message: "A senha é obrigatória!" })
      .min(6, { message: "A senha precisa ter no minimo 6 numeros!" }),
    confirmPassword: z
      .string({ message: "A confirmação de senha é obrigatória!" })
      .min(6, {
        message: "A confirmação de senha precisa ter no minimo 6 caracteres!",
      }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "As senhas não são iguais",
        path: ["confirmPassword"],
    });

// Login User Validation
export const UserLoginSchema = z.object({
  email: z
    .string({ message: "O email é obrigatório!" })
    .email({ message: "Insira um email valido!" }),
  password: z
    .string({ message: "A senha é obrigatória!" })
    .min(6, { message: "A senha precisa ter no minimo 6 numeros!" }),
});
