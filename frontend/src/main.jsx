/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ReactDOM from "react-dom/client";
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
    <RouterProvider router={router} />
  </ThemeProvider>
);
