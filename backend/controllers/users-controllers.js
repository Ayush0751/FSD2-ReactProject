const { validationResult } = require('express-validator')

const HttpError = require('../models/http-error')
const { User, Copy, History, Traders } = require('../models/user')
// const async = require("hbs/lib/async");
const Post = require('../models/post')

const getUsers = async (req, res, next) => {
  let users
  try {
    users = await User.find({}, '-password')
  } catch (err) {
    const error = new HttpError(
      'Fetching users failed, please try again later.',
      500
    )
    return next(error)
  }
  res.json({ users: users.map((user) => user.toObject({ getters: true })) })
}

const signup = async (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    )
  }

  const { name, email, password, imgName } = req.body
  // console.log(req.file);
  console.log(req.body)

  let existingUser
  try {
    existingUser = await User.findOne({ email })
  } catch (err) {
    const error = new HttpError(
      'Signing up failed, please try again later.',
      500
    )
    return next(error)
  }

  if (existingUser) {
    const error = new HttpError(
      'User exists already, please login instead.',
      422
    )
    return next(error)
  }
  console.log('hiiii')
  // console.log(image);
  const createdUser = new User({
    name,
    email,
    image: imgName,
    password
  })
  console.log(createdUser)

  try {
    createdUser.save()
  } catch (err) {
    const error = new HttpError(
      'Signing up failed, please try again later.',
      500
    )
    return next(error)
  }

  res.status(201).json({ user: createdUser.toObject({ getters: true }) })
}

const login = async (req, res, next) => {
  const { email, password } = req.body

  let existingUser

  try {
    existingUser = await User.findOne({ email })
  } catch (err) {
    const error = new HttpError(
      'Loggin in failed, please try again later.',
      500
    )
    return next(error)
  }

  if (!existingUser || existingUser.password !== password) {
    const error = new HttpError(
      'Invalid credentials, could not log you in.',
      401
    )
    return next(error)
  }

  res.json({
    message: 'Logged in!',
    user: existingUser.toObject({ getters: true })
  })
}

const sendCopy = async (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    )
  }
  const { amount, stoploss, stopgain, name } = req.body
  console.log({
    stoploss,
    stopgain,
    amount,
    name
  })
  const createCopy = new Copy({
    amount,
    stoploss,
    stopgain,
    name
  })
  try {
    createCopy.save()
  } catch (err) {
    const error = new HttpError(
      'Order Failed, Please create your order again',
      500
    )
    return next(error)
  }
  res.status(201).json({ copy: createCopy.toObject({ getters: true }) })
}

const getOrders = async (req, res, next) => {
  // const errors = validationResult(req);
  // // let copyarr;
  // if (!errors.isEmpty()) {
  //   return next(
  //     new HttpError("Bad request", 422)
  //   );
  // }
  let result
  console.log('h')
  try {
    result = await Copy.find()
    console.log('dadaaf')
  } catch (err) {
    HttpError(
      "Can't fetch orders now, please try again after sometime",
      500
    )
    // return next(error);
  }

  res.json({ result })
  // res.send()
  // console.log(res);
  // return res;
}
const historyAdd = (res, req, next, amount, orderstart, name) => {
  const createHistory = new History({
    amount,
    orderstart,
    name
  })
  try {
    createHistory.save()
  } catch (error) {
    res.status(500).json({ error: error.message })
    return next(error)
  }
  res.status(201).json({ history: createHistory.toObject({ getters: true }) })
}
const deleteOrder = async (req, res, next) => {
  const id = req.params.id
  console.log(id, 'id')
  try {
    const histdata = await Copy.findById(id)
    const { amount, ordertime, name } = histdata
    console.log(histdata, 'histdata')
    historyAdd(amount, ordertime, name)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }

  try {
    const result = await Copy.findByIdAndDelete(id)

    console.log(result, 'result')
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
const getHistory = async (req, res, next) => {
  let result
  console.log('h')
  try {
    result = await History.find()
    console.log('history passed')
  } catch (error) {
    res.status(500).json({ error: error.message })
    // return next(error);
  }
  console.log(result, 'result')
  res.json({ result })
}
const getTraders = async (req, res, next) => {
  let result
  console.log('hola')
  try {
    // const collection = await mongoose.db("zrading2").collection("traders");
    result = await Traders.find()
    console.log('Trader passed')
  } catch (error) {
    res.status(500).json({ error: error.message })
    return next(error)
  }
  console.log(result, 'result5555')
  res.json({ result })
}

const getUser = async (req, res, next) => {
  const email = req.params.email
  let result
  console.log(email, 'email')
  try {
    result = await User.findOne({ email })
    console.log(result, 'userData')
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
  res.json({ result })
}

const getPost = async (req, res, next) => {
  console.log('h')
  const result = await Post.find({}).sort({ createdAt: -1 })
  console.log(result, 'holaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
  try {
    console.log('post details fetched')
  } catch (error) {
    res.status(500).json({ error: error.message })
    // return next(error);
  }
  console.log(result, 'result')
  res.json({ result })
}

const postCreate = (req, res) => {
  // console.log(req.body);
  const { postText, postImageName } = req.body
  console.log('hi20212')
  console.log(postText)
  console.log(postImageName)
  const post = new Post({
    postText,
    postImage: postImageName
  })
  post
    .save()
    .then((result) => {
      res.redirect('/discover')
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.getUsers = getUsers
exports.signup = signup
exports.login = login
exports.sendCopy = sendCopy
exports.getOrders = getOrders
exports.deleteOrder = deleteOrder
exports.getHistory = getHistory
exports.getTraders = getTraders
exports.getUser = getUser

exports.getPost = getPost
exports.postCreate = postCreate
