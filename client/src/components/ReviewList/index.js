

import React from "react";
import { Box, Heading, IconButton } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";


const ReviewList = ({ reviews, onDeleteReview }) => {
  if (!reviews.length) {
    return (
      <Box as="h3" fontSize="xl" fontWeight="bold">
        No Reviews
      </Box>
    );
  }


  const handleDeleteReview = (reviewId) => {
    onDeleteReview(reviewId);
  };


  return (
    <Box>
      {reviews.map((review) => (
        <Box key={review} mb={4}>
          <Box bg="white" p={4} boxShadow="md" rounded="md">
            <Heading as="h4" fontSize="lg" mb={2}>
              {review}
            </Heading>
            <IconButton
              icon={<CloseIcon />}
              colorScheme="red"
              aria-label="Delete Review"
              size="sm"
              onClick={() => handleDeleteReview(review)}
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
};


export default ReviewList;