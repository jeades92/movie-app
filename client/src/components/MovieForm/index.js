import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import { ADD_MOVIE } from "../../utils/mutations";
import { QUERY_MOVIE } from "../../utils/queries";

const MovieForm = () => {
  const [title, setTitle] = useState("");

  const [addMovie, { error }] = useMutation(ADD_MOVIE, {
    update(cache, { data: { addMovie } }) {
      try {
        const { movies } = cache.readQuery({ query: QUERY_MOVIE });

        cache.writeQuery({
          query: QUERY_MOVIE,
          data: { movies: [...movies, addMovie] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addMovie({
        variables: { title },
      });

      setTitle("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h3>Add a new movie</h3>
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="col-12 col-lg-9">
          <input
            placeholder="What is the name of the movie?"
            value={title}
            className="form-input w-100"
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>

        <div className="col-12 col-lg-3">
          <button className="btn btn-info btn-block py-3" type="submit">
            Add
          </button>
        </div>
        {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Something went wrong
          </div>
        )}
      </form>
    </div>
  );
};

export default MovieForm;
