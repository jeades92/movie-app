import { gql } from '@apollo/client';

export const ADD_MOVIE = gql`
  mutation AddMovie($title: String!) {
    addMovie(title: $title) {
      _id
      title
    }
  }
`;

export const ADD_REVIEW = gql`
  mutation AddReview($movieId: ID!, $reviewText: String!) {
    addReview(movieId: $movieId, reviewText: $reviewText) {
      _id
      reviews {
        _id
        reviewText
        createdAt
      }
    }
  }
`;

export const ADD_RATING = gql`
  mutation AddRating($movieId: ID!, $ratingText: String!) {
    addRating(movieId: $movieId, ratingText: $ratingText) {
      _id
      ratings {
        _id
        ratingText
      }
    }
  }
`;

export const DELETE_REVIEW = gql`
  mutation DeleteReview($reviewId: ID!) {
    deleteReview(reviewId: $reviewId) {
      _id
    }
  }
`;

export const DELETE_RATING = gql`
  mutation DeleteRating($ratingId: ID!) {
    deleteRating(ratingId: $ratingId) {
      _id
    }
  }
`;