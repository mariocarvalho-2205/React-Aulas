import express from "express"
const router = express.Router();

// middlewares
import {UserCreateSchema, UserLoginSchema, UserUpdateSchema} from "../middlewares/userValidation.js"

import { validateRequest } from "../middlewares/handleValidation.js"


import { register, login, getCurrentUser, update } from "../controllers/UserController.js"
import { authGuard } from "../middlewares/authGuard.js";
import { imageUpload } from "../middlewares/imageUpload.js";

router.post("/register", validateRequest(UserCreateSchema), register)
router.post("/login", validateRequest(UserLoginSchema), login)
router.get("/profile", authGuard, getCurrentUser)

// a ordem do midlleware precisa ser a imagem e depois a validação
router.put('/', authGuard, imageUpload.single("profileImage"), validateRequest(UserUpdateSchema), update)

export default router