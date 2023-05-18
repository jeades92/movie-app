import React from "react";
import { Box, Heading } from "@chakra-ui/react";

const ReviewList = ({ reviews }) => {
  if (!reviews.length) {
    return (
      <Box as="h3" fontSize="xl" fontWeight="bold">
        No Reviews
      </Box>
    );
  }

  return (
    <Box>
      {reviews.map((review) => (
        <Box key={review} mb={4}>
          <Box bg="white" p={4} boxShadow="md" rounded="md">
            <Heading as="h4" fontSize="lg" mb={2}>
              {review}
            </Heading>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ReviewList;
