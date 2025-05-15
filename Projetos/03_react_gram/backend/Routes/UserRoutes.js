import express from "express"
const router = express.Router();

// middlewares
import {UserCreateSchema, UserLoginSchema} from "../middlewares/userValidation.js"

import { validateRequest } from "../middlewares/handleValidation.js"


import { register, login, getCurrentUser } from "../controllers/UserController.js"
import { authGuard } from "../middlewares/authGuard.js";

router.post("/register", validateRequest(UserCreateSchema), register)
router.post("/login", validateRequest(UserLoginSchema), login)
router.get("/profile", authGuard, getCurrentUser)

export default router