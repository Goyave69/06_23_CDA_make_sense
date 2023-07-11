import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import DecisionPage from "../pages/DecisionPage";
import DecisionItem from "../components/DecisionItem";
import DecisionForm from "../pages/DecisionForm";
import LoginPage from "../pages/LoginPage";
import "../App.css";

const Routes = createBrowserRouter([
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
  {
    path: "/decisionsform",
    element: <DecisionForm />,
    errorElement: <ErrorPage />,
  },
]);

export default Routes;
