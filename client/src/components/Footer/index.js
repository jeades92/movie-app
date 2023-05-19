import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Footer = () => {

  return (
    <Box as="footer" py={4} textAlign="center">
      <Box display="flex" justifyContent="center" mb={4}>
      </Box>
      <Text fontSize="md" fontWeight="bold">
        Since 2023
        <span role="img" aria-label="Popcorn" style={{marginLeft: '4px'}}>
          🍿
        </span>
      </Text>
    </Box>
  );
};

export default Footer;
