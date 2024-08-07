const  multer = require("multer")  // responsavel pelo upload de imagens
const path = require("path")

// destination to store image
const imageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        let folder = ""

        if (req.baseUrl.includes("users")) {
            folder = "users"

        } else if (req.baseUrl.includes("photos")) {
            folder = "photos"
        }

        // utilizar a callback para informa a pasta com o destino das imagens

        cb(null, `uploads/${folder}/`)
    },

    // substituição do nome do arquivo
    filename: function (req, file, cb) {
        // modelo do nome
        // modelo pega data atual mais extensal do arquivo
        cb(null, Date.now() + path.extname(file.originalname))  // 
    }
})

const imageUpload = multer({
    // validação da imagem para verificar o formato
    storage: imageStorage,
    fileFilter (req, file, cb) {
        // verifica se o formato e jpg ou png
        if (!file.originalname.match(/\.(jpg|png)$/)) {

            // retorna erro referente ao formato do arquivo
            return cb(new Error("Por favor, envie apenas jpg ou png!"))
        }

        cb(undefined, true)
    }
})

module.exports = { imageUpload }
