import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/NavBar";

export default function App() {
  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  );
}
