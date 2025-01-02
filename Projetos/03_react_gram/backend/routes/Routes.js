const router = require('express').Router()
const UserRoutes = require('./UserRoutes')
const PhotoRoutes = require('./PhotoRoutes')

router.use('/api/users', UserRoutes)
router.use('/api/photos', PhotoRoutes)

// Rota teste
router.get('/test', (req, res) => {
    res.status(200).json({ message: "Deu tudo certo na rota teste!"})
})

module.exports = router