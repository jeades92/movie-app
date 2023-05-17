const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  reviews: [
    {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
      trim: true,
    },
  ],
  ratings: [
    {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 10,
    },
  ],
});

const Movie = model("Movie", movieSchema);

module.exports = Movie;
