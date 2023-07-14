import ErrorPage from "../pages/ErrorPage";
import DecisionItem from "../pages/DecisionItem";
import LoginPage from "../pages/LoginPage";
import App from "../App";
import "../App.css";

const Routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
        children: [
          {
            path: "*",
            element: <ErrorPage />,
          },
        ],
      },
      {
        path: "/decision",
        element: <DecisionItem />,
      },
    ],
  },
];

export default Routes;
