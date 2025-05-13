import express from "express"
const router = express.Router();

import { register } from "../controllers/UserController.js"

router.get("/register", register)

export default router