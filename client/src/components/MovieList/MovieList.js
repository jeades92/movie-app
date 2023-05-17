import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_MOVIES, ADD_MOVIE } from './graphql/queries';

const MoviesList = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);

  const [addMovie] = useMutation(ADD_MOVIE);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const handleAddMovie = () => {
    addMovie({ variables: { title: 'New Movie' } });
  };

  return (
    <div>
      <ul>
        {data.movies.map((movie) => (
          <li key={movie._id}>{movie.title}</li>
        ))}
      </ul>
      <button onClick={handleAddMovie}>Add Movie</button>
    </div>
  );
};

export default MoviesList;
