/* eslint-disable import/no-extraneous-dependencies */
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import "./App.css";
import DecisionLoader from "./components/DecisionLoader";
import DecisionItem from "./pages/DecisionItem";
import NavBar from "./components/NavBar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DecisionLoader />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/nav",
    element: <NavBar />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/decision",
    element: <DecisionItem />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
