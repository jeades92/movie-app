import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Box, Heading, VStack } from "@chakra-ui/react";

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
      <VStack spacing={8} align="start">
        <Heading as="h3" size="lg" alignItems="center">
          {data.title} Movie Reviews:
        </Heading>

        {movie.reviews?.length > 0 && <ReviewList reviews={movie.reviews} />}

        <Box
          borderWidth="1px"
          borderRadius="md"
          p={4}
          boxShadow="md"
          bg="white"
          width="100%"
        >
          <ReviewForm movieId={movie._id} />
        </Box>

        <Heading as="h2" size="lg">
          {data.title} Movie Rating:
        </Heading>

        {movie.ratings?.length > 0 && <RatingList ratings={movie.ratings} />}

        <Box
          borderWidth="1px"
          borderRadius="md"
          p={4}
          boxShadow="md"
          bg="white"
          width="100%"
        >
          <RatingForm movieId={movie._id} />
        </Box>
      </VStack>
    </Box>
  );
};

export default Movie;
