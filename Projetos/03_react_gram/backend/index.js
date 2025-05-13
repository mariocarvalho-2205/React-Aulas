import dotenv from "dotenv"
dotenv.config();
import express from "express";
import cors from "cors";
import path from "path"
// importação necessaria para termos acesso ao __dirname
// Criar o equivalente ao __dirname para ES modules
import { fileURLToPath } from "url";
import {dirname} from "path";

import router from "./Routes/Routes.js"

const app = express();
const port = process.env.PORT || 5000;

// config json and form Data response
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Sove CORS
app.use(cors({ credentials: true, origin: "http://localhost:3000"}))

// upload directory
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
app.use("/uploads", express.static(path.join(__dirname, "/uploads")))

// DB conections
import conn from "./config/db.js"
conn()


app.use(router)



app.listen(port, () => {
    console.log(`Rodando no servidor na porta ${port}`)
})