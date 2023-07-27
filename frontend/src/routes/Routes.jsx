import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import DecisionPage from "../pages/DecisionPage";
import DecisionItem from "../components/DecisionItem";
import LoginPage from "../pages/LoginPage";
import DecisionLoader from "../components/DecisionLoader";
import MyDecisions from "../pages/MyDecisions";
import "../App.css";
import SignUpPage from "../pages/SignUpPage";
import DecisionForm from "../pages/DecisionForm";
import PageExpert from "../pages/PageExpert";

const Routes = [
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/make_sense",
    element: <App />,
    children: [
      {
        path: "decision-item",
        element: <DecisionItem />,
      },
      {
        path: "decision",
        element: <DecisionPage />,
      },
      {
        path: "my-decisions",
        element: <MyDecisions />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
      {
        path: "login",
        element: <DecisionLoader />,
      },
      {
        path: "Test",
        element: <SignUpPage />,
      },
      {
        path: "decisionform",
        element: <DecisionForm />,
      },
      {
        path: "page-expert",
        element: <PageExpert />,
      },
    ],
  },
];

export default Routes;
