import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

// Temporário - apenas para debug
console.log("DB_USER:", dbUser);
console.log("DB_PASS:", dbPassword ? "Definido (não mostrando por segurança)" : "Não definido");


const conn = async () => {
    try {
        const dbConn = mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.b8zbyqt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
        console.log("Conectado ao mongoose!")
        return dbConn
    } catch (error) {
        console.log("Erro no conect mongoose", error)        
    }
}


export default conn