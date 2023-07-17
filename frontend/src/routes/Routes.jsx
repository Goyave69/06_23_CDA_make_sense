import ErrorPage from "../pages/ErrorPage";
import DecisionPage from "../pages/DecisionPage";
import DecisionItem from "../components/DecisionItem";
import LoginPage from "../pages/LoginPage";
import DecisionLoader from "../components/DecisionLoader";
import MyDecisions from "../pages/MyDecisions";
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
    path: "/my-decisions",
    element: <MyDecisions />,
  },
  {
    path: "/*",
    element: <ErrorPage />,
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
