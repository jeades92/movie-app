import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Heading, Text } from "@chakra-ui/react";

import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <Box
      bg="teal.500"
      color="white"
      py={4}
      px={6}
      rounded="md"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Link to="/">
        <Button variant="solid" size="sm" colorScheme="whiteAlpha" m={2}>
          Home
        </Button>
      </Link>
      <Box flex="1" textAlign="center">
        <Link to="/">
          <Heading as="h1" fontSize={{ base: "3xl", lg: "6xl" }} m={0}>
            Movie-App
          </Heading>
        </Link>
      </Box>
      <Box>
        {Auth.loggedIn() ? (
          <>
            <Button variant="outline" size="sm" colorScheme="whiteAlpha" m={2} onClick={logout}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Link to="/login">
              <Button variant="solid" size="sm" colorScheme="whiteAlpha" m={2}>
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="outline" size="sm" colorScheme="whiteAlpha" m={2}>
                Signup
              </Button>
            </Link>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Header;
