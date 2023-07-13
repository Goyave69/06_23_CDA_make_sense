import ErrorPage from "../pages/ErrorPage";
import DecisionPage from "../pages/DecisionPage";
import DecisionItem from "../components/DecisionItem";
import LoginPage from "../pages/LoginPage";
import DecisionLoader from "../components/DecisionLoader";
import "../App.css";
import SignUpPage from "../pages/SignUpPage";

const Routes = [
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/decision",
    element: <DecisionPage />,
    children: [
      {
        path: "",
        element: <ErrorPage />,
      },
    ],
  },
  {
    path: "/decision-item",
    element: <DecisionItem />,
  },
  {
    path: "/login",
    element: <DecisionLoader />,
  },
  {
    path: "/Test",
    element: <SignUpPage />,
    children: [
      {
        path: "",
        element: <ErrorPage />,
      },
    ],
  },
];

export default Routes;
