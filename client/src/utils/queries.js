import { gql } from "@apollo/client";

export const QUERY_MOVIE = gql`
  query allMovies {
    movies {
      _id
      title
      ratings
      reviews
    }
  }
`;

export const QUERY_SINGLE_MOVIE = gql`
  query singleMovie($movieId: ID!) {
    movie(movieId: $movieId) {
      _id
      title
      ratings
      reviews
    }
  }
`;
