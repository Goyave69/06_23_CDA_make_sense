/* eslint-disable import/no-extraneous-dependencies */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ChakraProvider } from "@chakra-ui/react";

import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import "./App.css";
import DecisionPage from "./pages/DecisionPage";
import DecisionItem from "./components/DecisionItem";

const customTheme = createTheme({
  typography: {
    fontFamily: `"Raleway", sans-serif`,
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <DecisionItem />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/decisions",
    element: <DecisionPage />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <ChakraProvider>
        <div className="App">
          <RouterProvider router={router} />
        </div>
      </ChakraProvider>
    </ThemeProvider>
  );
}

export default App;
