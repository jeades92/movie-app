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
    <Box bg="info" color="dark" mb={4} py={3} display="flex" alignItems="center">
      <Box
        className="container"
        display="flex"
        flexDirection="column"
        justifyContent={{ base: "center", lg: "space-between" }}
        alignItems="center"
        textAlign="center"
      >
        <Link to="/">
          <Heading as="h1" fontSize={{ base: "3xl", lg: "6xl" }} m={0}>
            Movies
          </Heading>
        </Link>
        <Text fontSize={{ base: "xl", lg: "3xl" }} fontWeight="bold" m={0}>
          Movie Reviews
        </Text>
        <Box>
          {Auth.loggedIn() ? (
            <Button variant="outline" size="lg" colorScheme="teal" m={2} onClick={logout}>
              Logout
            </Button>
          ) : (
            <>
              <Link to="/login">
                <Button variant="solid" size="lg" colorScheme="teal" m={2}>
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant="outline" size="lg" colorScheme="teal" m={2}>
                  Signup
                </Button>
              </Link>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
