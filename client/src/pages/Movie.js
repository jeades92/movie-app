import React from "react";

// Import the `useParams()` hook
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import ReviewList from "../components/ReviewList";
import ReviewForm from "../components/ReviewForm";
import RatingForm from "../components/RatingForm";
import RatingList from "../components/RatingList";

import { QUERY_SINGLE_MOVIE } from "../utils/queries";

const Movie = () => {
  // Use `useParams()` to retrieve value of the route parameter `:movieId`
  const { movieId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_MOVIE, {
    // pass URL parameter
    variables: { movieId: movieId },
  });

  const movie = data?.movie || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2 className="card-header">{data.title} Movie Reviews</h2>

      {movie.reviews?.length > 0 && <ReviewList reviews={movie.reviews} />}

      <div className="my-4 p-4" style={{ border: "1px solid grey" }}>
        <ReviewForm movieId={movie._id} />
      </div>
      <h2 className="card-header">{data.title} Movie Rating</h2>

      {movie.ratings?.length > 0 && <RatingList ratings={movie.ratings} />}

      <div className="my-4 p-4" style={{ border: "1px solid grey" }}>
        <RatingForm movieId={movie._id} />
      </div>
    </div>
  );
};

export default Movie;
