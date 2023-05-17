import { gql } from "@apollo/client";

export const ADD_MOVIE = gql`
  mutation addMovie($title: String!) {
    addMovie(title: $title) {
      _id
      title
      reviews
      ratings
    }
  }
`;

export const ADD_REVIEW = gql`
  mutation addReview($movieId: ID!, $review: String!) {
    addReview(movieId: $movieId, review: $review) {
      _id
      title
      reviews
    }
  }
`;

export const REMOVE_MOVIE = gql`
  mutation removeMovie($movieId: ID!) {
    removeMovie(movieId: $movieId) {
      _id
      title
      reviews
      ratings
    }
  }
`;

export const REMOVE_REVIEW = gql`
  mutation removeReview($movieId: ID!, $review: String!) {
    removeReview(movieId: $movieId, review: $review) {
      _id
      title
      reviews
    }
  }
`;

export const ADD_RATING = gql`
  mutation addRating($movieId: ID!, $rating: String!) {
    addRating(movieId: $movieId, rating: $rating) {
      _id
      title
      ratings
    }
  }
`;

