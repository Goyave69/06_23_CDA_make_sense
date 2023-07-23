import App from "../App";
import AdminPage from "../pages/AdminPage";
import ErrorPage from "../pages/ErrorPage";
import DecisionForm from "../pages/DecisionForm";
import DecisionPage from "../pages/DecisionPage";
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
    path: "/make_sense",
    element: <App />,
    children: [
      // {
      //   path: "decision-item",
      //   element: <DecisionItem />,
      // },
      {
        path: "decision",
        element: <DecisionPage />,
      },
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
      {
        path: "admin",
        element: <AdminPage />,
      },
    ],
  },
];

export default Routes;
