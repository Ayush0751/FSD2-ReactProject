// const uuid = require('uuid/v4');
const { v4: uuid } = require('uuid');
uuid(); 
const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

const HttpError = require('../models/http-error');
// const getCoordsForAddress = require('../util/location');
// const Place = require('../models/place');
const Doc = require('../models/postDoc');
const User = require('../models/user');

const getDocById = async (req, res, next) => {
//   const placeId = req.params.pid;
  const postId = req.params.pid;

  let doc;
//   let place;
  try {
    // place = await Place.findById(placeId);
    doc = await Doc.findById(postId);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not find a Document.',
      500
    );
    return next(error);
  }

  if (!doc) {
    const error = new HttpError(
      'Could not find doc for the provided id.',
      404
    );
    return next(error);
  }

  res.json({ doc: doc.toObject({ getters: true }) });
};

// const getPlacesByUserId = async (req, res, next) => {
const getDocByUserId = async (req, res, next) => {
  const userId = req.params.uid;

  let userWithDoc;
//   let docs;
  try {
    userWithDoc = await User.findById(userId).populate('docs');
    // userWithPlaces = await User.findById(userId).populate('places');
  } catch (err) {
    const error = new HttpError(
      'Fetching places failed, please try again later.',
      500
    );
    return next(error);
  }

//   if (!userWithPlaces || userWithPlaces.places.length === 0) {
  if (!userWithDoc || userWithDoc.docs.length === 0) {
    return next(
      new HttpError('Could not find docs for the provided user id.', 404)
    );
  }

  res.json({
    docs: userWithDoc.docs.map(doc =>
      doc.toObject({ getters: true })
    )
  });
};

// const createPostDoc = async (req, res, next) => {
const createPostDoc = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }

  const { title, description, creator } = req.body;

//   let coordinates;
//   try {
//     coordinates = await getCoordsForAddress(address);
//   } catch (error) {
//     return next(error);
//   }

//   const createdPlace = new Place({
  const createdPost = new Doc({
    title,
    description,
    image: req.image.path,
    creator
  });

  let user;
  try {
    user = await User.findById(creator);
  } catch (err) {
    const error = new HttpError(
      'Creating place failed, please try again.',
      500
    );
    return next(error);
  }

  if (!user) {
    const error = new HttpError('Could not find user for provided id.', 404);
    return next(error);
  }

  console.log(user);

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdPost.save({ session: sess });
    user.docs.push(createdPost);
    await user.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      'Creating place failed, please try again.',
      500
    );
    return next(error);
  }

  res.status(201).json({ doc: createdPost });
};

const updatePostDoc = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }

  const { title, description } = req.body;
  const docId = req.params.pid;

  let doc;
  try {
    doc = await Place.findById(docId);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not update place.',
      500
    );
    return next(error);
  }

  doc.title = title;
  doc.description = description;

  try {
    await place.save();
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not update place.',
      500
    );
    return next(error);
  }

  res.status(200).json({ doc: doc.toObject({ getters: true }) });
};

// const deletePlace = async (req, res, next) => {
//   const placeId = req.params.pid;

//   let place;
//   try {
//     place = await Place.findById(placeId).populate('creator');
//   } catch (err) {
//     const error = new HttpError(
//       'Something went wrong, could not delete place.',
//       500
//     );
//     return next(error);
//   }

//   if (!place) {
//     const error = new HttpError('Could not find place for this id.', 404);
//     return next(error);
//   }

//   try {
//     const sess = await mongoose.startSession();
//     sess.startTransaction();
//     await place.remove({ session: sess });
//     place.creator.places.pull(place);
//     await place.creator.save({ session: sess });
//     await sess.commitTransaction();
//   } catch (err) {
//     const error = new HttpError(
//       'Something went wrong, could not delete place.',
//       500
//     );
//     return next(error);
//   }

//   res.status(200).json({ message: 'Deleted place.' });
// };

exports.getDocById = getDocById;
exports.getDocByUserId = getDocByUserId;
exports.createPostDoc = createPostDoc;
exports.updatePostDoc = updatePostDoc;
// exports.deletePlace = deletePlace;
