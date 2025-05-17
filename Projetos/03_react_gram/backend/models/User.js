import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    profileImage: String,
    bio: String,
}, {
    timestamps: true,
    toJSON: {
        transform: (doc, ret) => {
            if(ret.createdAt) {
                ret.createdAt = new Date(ret.createdAt).toLocaleString("pt-BR", {
                    timeZone: "America/Sao_Paulo"
                })
            }
            if(ret.updatedAt) {
                ret.updatedAt = new Date(ret.updatedAt).toLocaleString("pt-BR", {
                    timeZone: "America/Sao_Paulo"
                })
            }
            return ret
        }
    }
})

const User = mongoose.model("User", userSchema)

export default User