require('dotenv').config()
const express = require('express')
const path = require('path')
const cors = require('cors')

const port = process.env.PORT;

const app = express()

// config JSON and form data response
app.use(express.json())  // habilitar json
app.use(express.urlencoded({ extended: false}))  // habilitar form data para aceitar dados

// routes
const router = require("./routes/Router.js")

app.use(router)




// server
app.listen(port, (err) => {
    if(err) console.log(`Erro no arquivo app ${err}`)
    console.log(`App rodando na porta ${port}`)
})








/* // Caso não funcione por conta do erro testar a opção abaixo
const consign = require('consign');

module.exports = () => {    
    const app = express();
    app.use(express.json())
    app.use(express.urlencoded({ extended: true}))
    consign()
        .include('controllers')
        .into(app)
    return app;
}

*/