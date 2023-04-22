const express = require('express')

const usersController = require('../controllers/users-controllers')
// const fileUpload = require('../middleware/file-upload');
const router = express.Router()

router.get('/allTraders', usersController.getTraders)

module.exports = router
