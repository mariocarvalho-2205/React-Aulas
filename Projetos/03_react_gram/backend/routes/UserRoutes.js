const router = require('express').Router()
const UserController = require('../controllers/UserController')

router.get('/', UserController.all)

module.exports = router