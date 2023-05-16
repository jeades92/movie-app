const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
    password: String
  }

  type Auth {
    token: ID!
    profile: User
  }

  type Movie {
    _id: ID
    title: String
    ratings: [Rating]!
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
    createdAt: String
  }

  type Query {
    movies: [Movie]!
    movie(movieId: ID!): Movie
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addMovie(title: String!): Movie
    addReview(movieId: ID!, reviewText: String!): Movie
    addRating(movieId: ID!, ratingText: String!): Movie
    removeMovie(movieId: ID!): Movie
    removeReview(movieId: ID!, reviewId: ID!): Movie
  }
`;

module.exports = typeDefs;
