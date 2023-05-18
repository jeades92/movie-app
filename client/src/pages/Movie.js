import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Box, Heading } from "@chakra-ui/react";

import ReviewList from "../components/ReviewList";
import ReviewForm from "../components/ReviewForm";
import RatingForm from "../components/RatingForm";
import RatingList from "../components/RatingList";

import { QUERY_SINGLE_MOVIE } from "../utils/queries";

const Movie = () => {
  const { movieId } = useParams();
  const { loading, data } = useQuery(QUERY_SINGLE_MOVIE, {
    variables: { movieId: movieId },
  });

  const movie = data?.movie || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Box p={4}>
      <Heading as="h2" size="lg" mb={4}>
        {data.title} Movie Reviews
      </Heading>

      {movie.reviews?.length > 0 && <ReviewList reviews={movie.reviews} />}

      <Box mt={8}>
        <ReviewForm movieId={movie._id} />
      </Box>

      <Heading as="h2" size="lg" mt={8} mb={4}>
        {data.title} Movie Rating
      </Heading>

      {movie.ratings?.length > 0 && <RatingList ratings={movie.ratings} />}

      <Box mt={8}>
        <RatingForm movieId={movie._id} />
      </Box>
    </Box>
  );
};

export default Movie;
