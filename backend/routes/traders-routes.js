const express = require('express');
const { check } = require('express-validator');

const usersController = require('../controllers/users-controllers');
// const fileUpload = require('../middleware/file-upload');
const upload = require('../middleware/upload');
const router = express.Router();

router.get('/allTraders', usersController.getTraders);

module.exports = router;
