import express from "express"
const router = express.Router();

// middlewares
import {UserCreateSchema, UserLoginSchema} from "../middlewares/userValidation.js"

import { validateRequest } from "../middlewares/handleValidation.js"


import { register, login } from "../controllers/UserController.js"

router.post("/register", validateRequest(UserCreateSchema), register)
router.post("/login", validateRequest(UserLoginSchema), login)

export default router