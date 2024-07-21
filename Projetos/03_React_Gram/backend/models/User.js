const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema(
    // configuração do Schema com os tipos e chaves
    {
        name: String,
        email: String,
        password: String,
        profileImage: String,
        bio: String,
    },
    // configurações do banco
    {
        timestamps: true,
    }

)
const User = mongoose.model("User", userSchema);

module.exports = User;