const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Movie {
    _id: ID
    title: String
    rating: [String]!
    reviews: [Review]!
  }

  type Review {
    _id: ID
    reviewText: String
    createdAt: String
  }

  type Rating {
    _id: ID
    ratingText: String
  }

  type Query {
    movies: [Movie]!
    movie(movieId: ID!): Movie
  }

  type Mutation {
    addMovie(title: String!): Movie
    addReview(movieId: ID!, reviewText: String!): Movie
    addRating(movieId: ID!, ratingText: String!): Movie
    removeMovie(movieId: ID!): Movie
    removeReview(movieId: ID!, reviewId: ID!): Movie
  }
`;

module.exports = typeDefs;
