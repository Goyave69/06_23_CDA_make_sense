/* eslint-disable import/no-extraneous-dependencies */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import "./App.css";
import DecisionLoader from "./components/DecisionLoader";
import DecisionItem from "./pages/DecisionPage";

const customTheme = createTheme({
  typography: {
    fontFamily: `"Raleway", sans-serif`,
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <DecisionLoader />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/decisions",
    element: <DecisionItem />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  );
}

export default App;
