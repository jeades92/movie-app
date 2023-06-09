import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input, Flex, Text } from "@chakra-ui/react";

import { ADD_MOVIE } from "../../utils/mutations";
import { QUERY_MOVIE } from "../../utils/queries";

const MovieForm = () => {
  const [title, setTitle] = useState("");
  const [addMovie, { error }] = useMutation(ADD_MOVIE, {
    update(cache, { data: { addMovie } }) {
      try {
        const { movies } = cache.readQuery({ query: QUERY_MOVIE });

        cache.writeQuery({
          query: QUERY_MOVIE,
          data: { movies: [...movies, addMovie] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });
  const [showForm, setShowForm] = useState(false); 

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addMovie({
        variables: { title },
      });

      setTitle("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleButtonClick = () => {
    setShowForm(true); 
  };

  return (
    <Flex justifyContent="center" alignItems="center">
      <Box p={4} textAlign="center">
        {!showForm ? (
          <>
            <Text as="p" fontSize="lg" mb={4}>
              Add your favorite movie, rate and review movies for your peers to see!
            </Text>
            <Button
              as="h3"
              fontSize="xl"
              fontWeight="bold"
              mb={4}
              colorScheme="teal"
              onClick={handleButtonClick}
            >
              Add a new movie
            </Button>
          </>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <FormControl id="title" isRequired>
              <FormLabel>Title</FormLabel>
              <Input
                type="text"
                placeholder="Movie name?"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
              <FormErrorMessage>{error && "Something went wrong"}</FormErrorMessage>
            </FormControl>

            <Button mt={4} colorScheme="teal" type="submit" px={6} py={3}>
              Add
            </Button>
          </form>
        )}
      </Box>
    </Flex>
  );
};

export default MovieForm;
