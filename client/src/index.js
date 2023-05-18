import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, Box } from "@chakra-ui/react";
import App from "./App";

function AppWrapper() {
  return (
    <ChakraProvider>
      <Box margin="2rem" padding="1rem">
        <App />
      </Box>
    </ChakraProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>,
  document.getElementById("root")
);
