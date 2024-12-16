const router = require('express').Router()
const UserRoutes = require('./UserRoutes')
router.use(UserRoutes)

// Rota teste
router.get('/test', (req, res) => {
    res.status(200).json({ message: "Deu tudo certo na rota teste!"})
})

module.exports = router