const express = require('express');
const { check } = require('express-validator');

const usersController = require('../controllers/users-controllers');
// const fileUpload = require('../middleware/file-upload');
const upload = require('../middleware/upload');

/**
 * @swagger
 * components:
 *   schemas:
 *     Register:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *       properties:
 *         name:
 *           type: string
 *           description: Name of the user
 *         email:
 *           type: string
 *           description: Email of the user
 *         password:
 *           type: string
 *           description: Password given by user
 *       example:
 *         name: Ayush Singla
 *         email: ayush.s20@iiits.in
 *         password: password_0.0
 */

/**
 * @swagger
 * /api/users/signup:
 *   post:
 *     summary: Register a new User
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Register'
 *     responses:
 *       200:
 *         description: The book was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Register'
 *       500:
 *         description: Some server error
 */

const router = express.Router();

router.get('/', usersController.getUsers);

router.post(
  '/signup',
  upload.single('image'),
  [
    check('name')
      .not()
      .isEmpty(),
    check('email')
      .normalizeEmail()
      .isEmail(),
    check('password').isLength({ min: 6 })
  ],
  usersController.signup
);

router.post('/login', usersController.login);
router.get('/userDetails/:email', usersController.getUser);
router.post('/copy-order', usersController.sendCopy);

router.post('/uploadpost', upload.single('postImage'),usersController.postCreate);
router.get('/getPost', usersController.getPost);


module.exports = router;
