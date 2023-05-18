import React from "react";
import { Box, Heading } from "@chakra-ui/react";

const RatingList = ({ ratings }) => {
  if (!ratings.length) {
    return (
      <Box as="h3" fontSize="xl" fontWeight="bold">
        No Reviews
      </Box>
    );
  }

  return (
    <Box>
      {ratings.map((rating) => (
        <Box key={rating} p={4} boxShadow="md" rounded="md" bg="white" mb={4}>
          <Heading as="h4" fontSize="lg">
            {rating}
          </Heading>
        </Box>
      ))}
    </Box>
  );
};

export default RatingList;
