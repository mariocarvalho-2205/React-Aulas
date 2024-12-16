require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
const conn = require('./db/db')

const cors = require('cors')
const path = require('path')

// config JSON and form data response
app.use(express.json())
app.use(express.urlencoded({  // aceitar a trabalhar com form data
    extended: false
}))

// Solve CORS
app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}))

// Config directory to upload images
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

// Routes
const router = require('./routes/Routes')
app.use(router)


try {
    app.listen(port, () => {
        console.log(`Conect React Gram to port ${port}`)
    })
    
} catch (error) {
    console.error(error)
}