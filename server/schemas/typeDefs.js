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
    user: User
  }

  type Movie {
    _id: ID
    title: String
    ratings: [String]!
    reviews: [String]!
  }

  type Query {
    movies: [Movie]!
    movie(movieId: ID!): Movie
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addMovie(title: String!): Movie
    addReview(movieId: ID!, review: String!): Movie
    addRating(movieId: ID!, rating: String!): Movie
    removeMovie(movieId: ID!): Movie
    removeReview(movieId: ID!, reviewId: ID!): Movie
  }
`;

module.exports = typeDefs;
