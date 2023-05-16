import { gql } from '@apollo/client';

export const GET_MOVIES = gql`
  query GetMovies {
    movies {
      _id
      title
    }
  }
`;

export const ADD_MOVIE = gql`
  mutation AddMovie($title: String!) {
    addMovie(title: $title) {
      _id
      title
    }
  }
`;

// Add more queries and mutations as needed
