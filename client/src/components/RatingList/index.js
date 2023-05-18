import React from "react";
import { Box, Heading, IconButton } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";


const RatingList = ({ ratings, onDeleteRating }) => {
  if (!ratings.length) {
    return (
      <Box as="h3" fontSize="xl" fontWeight="bold">
        No Reviews
      </Box>
    );
  }


  const handleDeleteRating = (ratingId) => {
    onDeleteRating(ratingId);
  };


  return (
    <Box>
      {ratings.map((rating) => (
        <Box key={rating} p={4} boxShadow="md" rounded="md" bg="white" mb={4}>
          <Heading as="h4" fontSize="lg">
            {rating}
          </Heading>
          <IconButton
            icon={<CloseIcon />}
            colorScheme="red"
            aria-label="Delete Rating"
            size="sm"
            onClick={() => handleDeleteRating(rating)}
            />
        </Box>
      ))}
    </Box>
  );
};


export default RatingList;
