import App from "../App";
import AdminPage from "../pages/AdminPage";
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
        path: "admin",
        element: <AdminPage />,
      },
    ],
  },
];

export default Routes;
