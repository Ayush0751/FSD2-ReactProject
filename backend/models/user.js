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
  name:{type:String, required:true}
});
const historySchema = new Schema({
  amount: { type: Number, required: true },
  name: { type: String, required: true },
  
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
const traderSchema = new Schema({
  name: { type: String, required: true },
  trader_id: { type: String, required: true },
  
  age: {
    type: String,
    required: true,
    // default: Date.now
  },
  bio:{
    type:String,
    required:true
  },
  rating:{
    type:String,
    required:true
  },
  address:{
    type:String,
    required:true
  },
  copiers:{
    type:String,
    required:true
  },
  profits:{
    type:String,
    required:true
  },
});

// userSchema.plugin(uniqueValidator);
const User=mongoose.model("User", userSchema);
const Copy=mongoose.model("Copy", copySchema);
const History=mongoose.model("History", historySchema);
const Traders=mongoose.model("trader", traderSchema);
module.exports = {User,Copy,History,Traders}
