const { AuthenticationError } = require("apollo-server-express");
const { Movie, User } = require("../models");
const { signToken } = require("../utils/auth");

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
    addUser: async (parent, { name, email, password }) => {
      const user = await User.create({ name, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user with this email found!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);
      return { token, user };
    },

    addMovie: async (parent, { title }) => {
      return Movie.create({ title });
    },
    addReview: async (parent, { movieId, review }) => {
      return Movie.findOneAndUpdate(
        { _id: movieId },
        {
          $addToSet: { reviews: review },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },

    addRating: async (parent, { movieId, rating }) => {
      return Movie.findOneAndUpdate(
        { _id: movieId },
        {
          $addToSet: { ratings: rating },
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
      return Movie.findOneAndDelete(
        { _id: movieId },
        { $pull: { reviews: { _id: reviewId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
