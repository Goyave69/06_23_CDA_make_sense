import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import DecisionForm from "../pages/DecisionForm";
import LoginPage from "../pages/LoginPage";
import MyDecisions from "../pages/MyDecisions";
import SignUpPage from "../pages/SignUpPage";
import NewDecision from "../pages/NewDecision";
import "../App.css";

const Routes = [
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "my-decisions",
        element: <MyDecisions />,
      },
      {
        path: "decision-form",
        element: <DecisionForm />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
      {
        path: "decision/:id",
        element: <NewDecision />,
      },
      {
        path: "Test",
        element: <SignUpPage />,
      },
    ],
  },
];

export default Routes;
