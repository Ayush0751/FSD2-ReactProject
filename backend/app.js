const fs = require('fs');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require("morgan");
const swaggerUI = require("swagger-ui-express")
const swaggerJsDoc = require("swagger-jsdoc")


const usersRoutes = require('./routes/users-routes');
// const postDocRoutes = require('./routes/postDoc-routes');
const HttpError = require('./models/http-error');

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Trading API",
			version: "1.0.0",
			description: "A Express Library API for all traders",
		},
		servers: [
			{
				url: "http://localhost:8081",
			},
		],
	},
	apis: ["./routes/*.js"],
};

const specs = swaggerJsDoc(options);

const app = express();

app.use('/apiDocs', swaggerUI.serve, swaggerUI.setup(specs));

app.use(morgan("combined"));

app.use(bodyParser.json());

app.use('/uploads/images', express.static(path.join('uploads', 'images')));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  next();
});

app.use(express.static("public"))
app.use('/api/users', usersRoutes);
// app.use('/api/places', placesRoutes);
// app.use('/api/postDoc', postDocRoutes);



app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (req.image) {
    fs.unlink(req.image.path, err => {
      console.log(err);
    });
  }
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