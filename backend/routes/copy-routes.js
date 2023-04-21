const express = require('express');
const { check } = require('express-validator');

const usersController = require('../controllers/users-controllers');
// const fileUpload = require('../middleware/file-upload');

const router = express.Router();

// router.get('/', usersController.getUsers);


/**
 * @swagger
 * components:
 *   schemas:
 *     copySchema:
 *       type: object
 *       required:
 *         - amount
 *         - stoploss
 *         - stopgain
 *         - name
 *         - ordertime
 *       properties:
 *         amount:
 *           type: Number
 *           description: Amount that user want to buy the stock for. 
 *         stoploss:
 *           type: Number
 *           description: Stop loss as specified by user
 *         stopgain:
 *           type: Number
 *           description: Stop gain as specified by user
 *         name:
 *           type: string
 *           description: name of user
 *         ordertime:
 *           type: Date
 *           description: time at which the order was placed
 *       example:
 *         amount: 800
 *         stoploss: 36
 *         stopgain: 24
 *         name: Danu Das
 *         ordertime: 2023-03-26t16:19:56.535+00:00
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     histSchema:
 *       type: object
 *       required:
 *         - amount
 *         - name
 *         - orderend
 *         - orderstart
 *       properties:
 *         amount:
 *           type: Number
 *           description: Amount that user want to buy the stock for. 
 *         name:
 *           type: string
 *           description: name of user
 *         orderend:
 *           type: date
 *           description: date of end of order
 *         orderstart:
 *           type: date
 *           description: date of end of order
 *       example:
 *         amount: 800
 *         name: Ayush Singla
 *         orderend: 2023-02-26t16:19:56.535+00:00
 *         orderstart: 2023-03-26t16:19:56.535+00:00
 */

/**
  * @swagger
  * tags:
  *   name: Copy
  *   description: API manages Copy trading functionality.
  */

/**
 * @swagger
 * /api/copy/getOrders:
 *   get:
 *     summary: Returns the list of all traders that the user have copied
 *     tags: [Copy]
 *     responses:
 *       200:
 *         description: The list of the data
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/copySchema'
 */


/**
 * @swagger
 * /api/copy/copy-order:
 *   post:
 *     summary: Send a post request to add a new copied trade
 *     tags: [Copy]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/copySchema'
 *     responses:
 *       200:
 *         description: The data was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/copySchema'
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * /api/copy/delete-order/{id}:
 *   delete:
 *     summary: Remove the Copied trade by id
 *     tags: [Copy]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: copied trade id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/parameters/copySchema'
 *     responses:
 *       200:
 *         description: The data was deleted
 *       404:
 *         description: The data was not found
 *   post:
 *     summary: Send a post to History data
 *     tags: [Copy]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/histSchema'
 *     responses:
 *       200:
 *         description: The data was successfully added
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/histSchema'
 *       500:
 *         description: Some server error
 */

router.get('/getOrders', usersController.getOrders);
router.post('/copy-order', usersController.sendCopy);
router.delete('/delete-order/:id', usersController.deleteOrder);
router.get('/showHistory', usersController.getHistory);
// router.get('/showHistory', usersController.getHistory)
// usersController.getOrders()

module.exports = router;
