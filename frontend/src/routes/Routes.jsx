import ErrorPage from "../pages/ErrorPage";
import DecisionItem from "../pages/DecisionItem";
import LoginPage from "../pages/LoginPage";
import DecisionLoader from "../components/DecisionLoader";
import "../App.css";

const Routes = [
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/decision",
    element: <DecisionItem />,
    children: [
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <DecisionLoader />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];

export default Routes;
