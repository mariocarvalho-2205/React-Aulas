import express from "express"
const router = express.Router();

// middlewares
import {UserCreateSchema} from "../middlewares/userValidation.js"

import { validateRequest } from "../middlewares/handleValidation.js"


import { register } from "../controllers/UserController.js"

router.post("/register", validateRequest(UserCreateSchema), register)

export default router