/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import getCookie from "./services/CookieHelper";
import "./App.css";

export default function App() {
  const navigate = useNavigate();

  const token = getCookie("user");
  console.warn(token);

  React.useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  return (
    <main>
      <Outlet />
    </main>
  );
}
