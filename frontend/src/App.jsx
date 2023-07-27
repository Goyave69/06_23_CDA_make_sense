import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import getCookie from "./services/CookieHelper";
import "./App.css";
import NavBar from "./components/NavBar";

export default function App() {
  const navigate = useNavigate();

  const token = getCookie("user");
  console.warn(token);

  React.useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, []);

  return (
    <main>
      <NavBar />
      <Outlet />
    </main>
  );
}
