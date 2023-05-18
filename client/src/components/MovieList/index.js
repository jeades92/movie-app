import React from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Heading, Text, Link as ChakraLink } from "@chakra-ui/react";

const MovieList = ({ movies, title }) => {
  if (!movies.length) {
    return (
      <Box as="h3" fontSize="xl" fontWeight="bold">
        ...No Movies...
      </Box>
    );
  }

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={4}>
      {movies.map((movie) => (
        <Box key={movie._id}>
          <Box p={4} boxShadow="md" rounded="md" bg="white">
            <Heading as="h4" fontSize="lg" mb={2}>
              {movie.title}
            </Heading>
            <Text fontSize="md" color="gray.500">
              {movie.reviews?.length} movie review{movie.reviews?.length !== 1 && "s"}
            </Text>
            <ChakraLink as={Link} to={`/movies/${movie._id}`} color="teal.500" mt={2}>
              Add a review
            </ChakraLink>
          </Box>
        </Box>
      ))}
    </Grid>
  );
};

export default MovieList;
