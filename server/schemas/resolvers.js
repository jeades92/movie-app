const { Movie } = require("../models");

const resolvers = {
  Query: {
    movies: async () => {
      return Movie.find();
    },

    movie: async (parent, { movieId }) => {
      return Movie.findOne({ _id: movieId });
    },
  },

  Mutation: {
    addMovie: async (parent, { title }) => {
      return Movie.create({ title });
    },
    addReview: async (parent, { movieId, reviewText }) => {
      return Movie.findOneAndUpdate(
        { _id: movieId },
        {
          $addToSet: { reviews: { reviewText } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },

    addRating: async (parent, { movieId, ratingText }) => {
      return Movie.findOneAndUpdate(
        { _id: movieId },
        {
          $addToSet: { ratings: { ratingText } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },

    removeMovie: async (parent, { movieId }) => {
      return Movie.findOneAndDelete({ _id: movieId });
    },
    removeReview: async (parent, { movieId, reviewId }) => {
      return Movie.findOneAndUpdate(
        { _id: movieId },
        { $pull: { reviews: { _id: reviewId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
