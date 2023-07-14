/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ReactDOM from "react-dom/client";
import { CookiesProvider } from "react-cookie";
import Routes from "./routes/Routes";
import "./App.css";

const customTheme = createTheme({
  typography: {
    fontFamily: `"Raleway", sans-serif`,
  },
});

const router = createBrowserRouter(Routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={customTheme}>
    <CookiesProvider>
      <RouterProvider router={router} />
    </CookiesProvider>
  </ThemeProvider>
);
