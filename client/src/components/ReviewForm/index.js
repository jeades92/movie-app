import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react";

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
    <Box>
      <Box as="h4" fontSize="lg" fontWeight="bold" mb={4}>
        Add a review below.
      </Box>
      <form onSubmit={handleFormSubmit}>
        <FormControl id="review" isRequired>
          <FormLabel>Review</FormLabel>
          <Input
            type="text"
            placeholder="Add a review"
            value={review}
            onChange={(event) => setReview(event.target.value)}
          />
          <FormErrorMessage>{error && "Something went wrong"}</FormErrorMessage>
        </FormControl>
        <Button mt={4} colorScheme="teal" type="submit">
          Add review
        </Button>
      </form>
    </Box>
  );
};

export default ReviewForm;
