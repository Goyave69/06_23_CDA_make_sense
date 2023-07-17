// import React from "react";
// import { useNavigate, Outlet } from "react-router-dom";
// import { useCookies } from "react-cookie";
// import Navbar from "./components/NavBar";

// export default function App() {
//   const [cookies] = useCookies(["token"]);
//   const navigate = useNavigate();

//   const { token } = cookies;
//   console.log(token);

//   return (
//     <main>
//       {token ? (
//         <>
//           <Navbar />
//           <Outlet />
//         </>
//       ) : (
//         navigate("/")
//       )}
//     </main>
//   );
// }

// import React, { useEffect, useState } from "react";
// import { useNavigate, Outlet } from "react-router-dom";
// import axios from "axios";

// export default function App() {
//   const navigate = useNavigate();
//   const [_, setToken] = useState("");

//   useEffect(() => {
//     axios
//       .get("http://localhost:8888/getCookie", { responseType: "json" })
//       .then((response) => {
//         console.log("Résultat de la requête Axios :", response.data);

//         const token = response.data;

//         if (token) {
//           setToken(token);
//           console.log("Token :", token);
//         } else {
//           navigate("/login");
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//         navigate("/login");
//       });
//   }, [navigate]);

//   return (
//     <main>
//       <Outlet />
//     </main>
//   );
// }

import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import getCookie from "./services/CookieHelper";

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
