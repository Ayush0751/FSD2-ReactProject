const mongoose = require("mongoose");
// const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  image: { type: String },
  password: { type: String, required: true, minlength: 6 }
  // password: { type: String, required: true, minlength: 6 },
  //   image: { type: String, required: true }
});

const copySchema = new Schema({
  amount: { type: Number, required: true },
  stoploss: { type: Number, required: true },
  stopgain: {
    type: Number,
    required: true,
  },
  ordertime: {
    type: Date,
    required: true,
    default: Date.now
  },
});
const historySchema = new Schema({
  amount: { type: Number, required: true },
  
  orderend: {
    type: Date,
    required: true,
    default: Date.now
  },
  orderstart:{
    type:Date,
    required:true
  }
});

// userSchema.plugin(uniqueValidator);
const User=mongoose.model("User", userSchema);
const Copy=mongoose.model("Copy", copySchema);
const History=mongoose.model("History", historySchema);
module.exports = {User,Copy,History}
