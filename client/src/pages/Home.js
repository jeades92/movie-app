import React from "react";
import { useQuery } from "@apollo/client";

import MovieList from "../components/MovieList";
import MovieForm from "../components/MovieForm";

import { QUERY_MOVIE } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_MOVIE);
  const movies = data?.movies || [];

  return (
    <main>
      <div>
        <div>
          <MovieForm />
        </div>

        <div>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <MovieList movies={movies} title="Movie List" />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;

