import { ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { TaskListContextProvider } from "./context/taskListContext";
import { Router } from "./router/router";

export const App = () => (
  <TaskListContextProvider>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  </TaskListContextProvider>
);
