const mongoose = require("mongoose");
// const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const postSchema = new Schema(
    {
      postText: { type: String, required: true },
      postImage: { type: String, required: false },
    },
    {
      timestamps: true,
    }
  );

  module.exports = mongoose.model("Post", postSchema);