const mongoose = require('mongoose')
const dbConectUrl = process.env.URL

async function conn () {
    try {
        const connect = await mongoose.connect(dbConectUrl)
        console.info("Conected in MongoDB!")
        return connect
    } catch (error) {
        console.error("erro no DB", error)
    }
}
conn()

module.exports = mongoose