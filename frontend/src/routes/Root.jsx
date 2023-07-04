import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import "../App.css";

export default function Root() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}
