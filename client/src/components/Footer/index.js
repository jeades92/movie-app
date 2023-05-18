import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Button, Text } from "@chakra-ui/react";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Box as="footer" py={4} textAlign="center">
      <Box display="flex" justifyContent="center" mb={4}>
      </Box>
      <Text fontSize="sm" fontWeight="bold">
        Since 2023
      </Text>
    </Box>
  );
};

export default Footer;
