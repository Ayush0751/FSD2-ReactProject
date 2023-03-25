const fs = require('fs');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const usersRoutes = require('./routes/users-routes');
// const postDocRoutes = require('./routes/postDoc-routes');
const HttpError = require('./models/http-error');

const app = express();

app.use(bodyParser.json());

app.use('/uploads/documents', express.static(path.join('uploads', 'documents')));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  next();
});

app.use('/api/users', usersRoutes);
// app.use('/api/places', placesRoutes);
// app.use('/api/postDoc', postDocRoutes);

app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});

app.use((error, req, res, next) => {
//   if (req.image) {
//     fs.unlink(req.image.path, err => {
//       console.log(err);
//     });
//   }
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || 'An unknown error occurred!' });
});





app.get('/', (req, res) => {
    res.send('Hello World!')
  })

mongoose.connect(
    `mongodb+srv://Ayush0751:clusture0751@cluster0.nhdkbx9.mongodb.net/zrading2?retryWrites=true&w=majority`
    )
    .then(() => {
        console.log("connected");
    app.listen(8081);
    })
    .catch(err => {
    console.log(err);
});