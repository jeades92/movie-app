import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box as="header" py={4} display="flex" alignItems="center" justifyContent="space-between" >
      <Box textAlign="center" flex="1">
        <Link to="/">
          <Heading as="h1" size="lg" bg="teal.500" color="white" p={2} borderRadius="md" mx="auto" maxWidth="80%">
            Welcome to Movie App!
          </Heading>
        </Link>
        <Text fontSize="md">Movie Ratings & Reviews</Text>
      </Box>
      <Flex alignItems="center">
        <Button size="sm" colorScheme="teal" variant="outline" mr={2}>
          Login
        </Button>
        <Button size="sm" colorScheme="teal">
          Logout
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
