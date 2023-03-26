const express = require('express');
const { check } = require('express-validator');

const usersController = require('../controllers/users-controllers');
// const fileUpload = require('../middleware/file-upload');

const router = express.Router();

// router.get('/', usersController.getUsers);



router.get('/getOrders', usersController.getOrders);
router.post('/copy-order', usersController.sendCopy);
router.delete('/delete-order/:id', usersController.deleteOrder);
router.get('/showHistory', usersController.getHistory)
// usersController.getOrders()

module.exports = router;
