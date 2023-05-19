import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react";

import { ADD_RATING } from "../../utils/mutations";

const RatingForm = ({ movieId }) => {
  const [rating, setRating] = useState("");
  const [addRating, { error }] = useMutation(ADD_RATING);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addRating({
        variables: { movieId, rating },
      });

      setRating("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box>
      <Box as="h4" fontSize="xl" fontWeight="bold" mb={4}>
        Add a rating.
      </Box>

      <form onSubmit={handleFormSubmit}>
        <FormControl id="rating" isRequired>
          <FormLabel>Rating</FormLabel>
          <Input
            type="text"
            placeholder="Add a rating"
            value={rating}
            onChange={(event) => setRating(event.target.value)}
          />
          <FormErrorMessage>{error && "Uh oh... Something went wrong"}</FormErrorMessage>
        </FormControl>

        <Button mt={4} colorScheme="teal" type="submit">
          Add a rating
        </Button>

      </form>
    </Box>
  );
};

export default RatingForm;
