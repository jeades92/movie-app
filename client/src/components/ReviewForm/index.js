import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import { ADD_REVIEW } from "../../utils/mutations";

const ReviewForm = ({ movieId }) => {
  const [review, setReview] = useState("");

  const [addReview, { error }] = useMutation(ADD_REVIEW);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addReview({
        variables: { movieId, review },
      });

      setReview("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h4>Add a review below.</h4>
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="col-12 col-lg-9">
          <input
            placeholder="Add a review"
            value={review}
            className="form-input w-100"
            onChange={(event) => setReview(event.target.value)}
          />
        </div>

        <div className="col-12 col-lg-3">
          <button className="btn btn-info btn-block py-3" type="submit">
            add review
          </button>
        </div>
        {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Add a review Uh oh...
          </div>
        )}
      </form>
    </div>
  );
};

export default ReviewForm;
