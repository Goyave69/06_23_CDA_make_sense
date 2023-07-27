import { BiHomeAlt, BiLogOut } from "react-icons/bi";
import { AiOutlineCalendar } from "react-icons/ai";

export default function NavBar() {
  return (
    <div className="BoxNavbar">
      <div className="NavBarElement">
        <nav>
          <img src="/src/assets/LogoMS.png" alt="MS-Logo" />
          <ol>
            <li>
              <BiHomeAlt />
              <a href="http://localhost:3000/decision">Toutes les décisions</a>
            </li>
            <li>
              <AiOutlineCalendar />
              <a href="http://localhost:3000/my-decisions">Mes décisions</a>
            </li>
            <li>
              <BiLogOut />
              <a href="http://localhost:3000/login"> Se déconnecter</a>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
}
