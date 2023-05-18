import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import { Box, Heading, Input, Button, Text } from "@chakra-ui/react";

import Auth from "../utils/auth";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="50vh"
    >
      <Box
        bg="gray.100"
        p={8}
        rounded="md"
        boxShadow="lg"
        width={{ base: "90%", sm: "80%", md: "60%", lg: "40%" }}
      >
        <Heading as="h4" size="md" mb={4} textAlign="center">
          Login
        </Heading>
        {data ? (
          <Text mb={4} textAlign="center">
            Success! You may now head{" "}
            <Link to="/">back to the homepage.</Link>
          </Text>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <Input
              placeholder="Your email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
              mb={4}
            />
            <Input
              placeholder="******"
              name="password"
              type="password"
              value={formState.password}
              onChange={handleChange}
              mb={4}
            />
            <Button
              colorScheme="teal"
              variant="solid"
              width="full"
              type="submit"
              mb={4}
            >
              Submit
            </Button>
          </form>
        )}

        {error && (
          <Box my={4} p={3} bg="red.500" color="white" rounded="md">
            {error.message}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Login;
