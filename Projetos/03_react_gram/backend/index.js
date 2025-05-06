import dotenv from "dotenv"
dotenv.config();
import express from "express";
import cors from "cors";
import path from "path";
// const express = require("express");
// const cors = require("cors");
// const path = require("path");
const app = express();
const port = process.env.PORT || 5000;

import router from "./Routes/Routes.js"

// config json and formData
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(router)



app.listen(port, () => {
    console.log(`Rodando no servidor na porta ${port}`)
})