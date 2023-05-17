import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import { ADD_RATING } from "../../utils/mutations";

const RatingForm = ({ movieId }) => {
  const [rating, setRating] = useState("");

  const [addRating, { error }] = useMutation(ADD_RATING);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addRating({
        variables: { movieId, rating },
      });

      setRating("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h4>Add a rating.</h4>
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="col-12 col-lg-9">
          <input
            placeholder="Add a rating"
            value={rating}
            className="form-input w-100"
            onChange={(event) => setRating(event.target.value)}
          />
        </div>

        <div className="col-12 col-lg-3">
          <button className="btn btn-info btn-block py-3" type="submit">
            add a rating
          </button>
        </div>
        {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Add a rating Uh oh...
          </div>
        )}
      </form>
    </div>
  );
};

export default RatingForm;
