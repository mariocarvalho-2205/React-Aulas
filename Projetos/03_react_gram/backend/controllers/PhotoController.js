import Photo from "../models/Photo.js"
import mongoose from "mongoose";

export const insertPhoto = async (req, res) => {

    const {title} = req.body
    const image = req.file.filename

    console.log(req.body)
    res.status(200).json({message: ["photo inserida"]})
}