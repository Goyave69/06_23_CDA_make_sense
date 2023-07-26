/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import { CookiesProvider } from "react-cookie";
import Routes from "./routes/Routes";
import "./App.css";

const customTheme = extendTheme({
  typography: {
    fontFamily: `"Raleway", sans-serif`,
  },
});

const router = createBrowserRouter(Routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <CookiesProvider>
    <ChakraProvider theme={customTheme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </CookiesProvider>
);
