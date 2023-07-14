import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
// import { useCookies } from "react-cookie";

export default function App() {
  // const [cookies] = useCookies(["token"]);
  const navigate = useNavigate();

  // const token = cookies.token;
  const token = document.cookie;
  console.warn(token);

  React.useEffect(() => {
    console.warn(document.cookie);
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
