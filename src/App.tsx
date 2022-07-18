import { Box, ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { AuthContextProvider } from "./context/authContext";
import { Router } from "./router/router";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box position="fixed" left="0" top="0" right="0" textAlign="right">
      <ColorModeSwitcher justifySelf="flex-end" />
    </Box>
    <BrowserRouter>
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
    </BrowserRouter>
  </ChakraProvider>
);
