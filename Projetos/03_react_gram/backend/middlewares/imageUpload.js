import multer from "multer"
import path from "path"

// Destination to store image and file name
const imageStorage = multer.diskStorage({
    // destino da imagem
    destination: function(req, file, cb) {
        let folder = ""

        // configuração do destino da imagem
        // verificar se a baseUrl da imagem inclue o user
        if (req.baseUrl.includes("users")) {
            folder = "users"  // se for de user a pasta folder recebe "users"
        } else if (req.baseUrl.includes("photos")) {
            folder = "photos"  // se for de photo a pasta folder recebe "photos"
        }

        // passa o endereço da pasta com o nome da pasta dinamico
        cb(null, `uploads/${folder}/`)

    },

    // nome do arquivo
    filename: function (req, file, cb) {

        // renomeia o arquivo
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

// define onde a imagem vai ser salva
export const imageUpload = multer({
    storage: imageStorage,  // passa a função do local da imagem
    fileFilter(req, file, cb) {
        // valida o formato do arquivo 
        if (!file.originalname.match(/\.png|jpg$/)) {

            // upload only png and jpg
            return cb(new Error("Por favor envie apenas arquivos .png ou .jpg!"))
        }

        cb(undefined, true)
    }
})