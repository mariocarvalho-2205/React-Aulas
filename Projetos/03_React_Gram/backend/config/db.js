const mongoose = require('mongoose')
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

const conn = async () => {
    try {
        const dbConn = await mongoose.connect(
            `mongodb+srv://${dbUser}:${dbPassword}@cluster0.b8zbyqt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
        )

        console.log('Conectou ao banco com Sucesso!!!')

        return dbConn
    } catch ( error ) {
        console.log(error)
    }
}

conn()

console.log('DB O')
module.exports = conn;
