import { gql } from '@apollo/client';

export const GET_MOVIES = gql`
  query allMovies {
    movies {
      _id
      title
      ratings
      reviews
    }
  }
`;

export const GET_SINGLE_MOVIE = gql`
  query singleMovie($movieId: ID!) {
    movie(movieId: $movieId) {
      _id
      title
      ratings
      reviews
    }
  }
`;
