import { BiHomeAlt } from "react-icons/bi";
import { AiOutlineCalendar } from "react-icons/ai";
import { PiSmileyBold } from "react-icons/pi";

export default function NavBar() {
  return (
    <div className="BoxNavbar">
      <div className="NavBarElement">
        <nav>
          <img src="/src/assets/LogoMS.png" alt="MS-Logo" />
          <ol>
            <li>
              <BiHomeAlt />
              <a href="http://localhost:3000/decision">
                Parcourir les décisions
              </a>
            </li>
            <li>
              <AiOutlineCalendar />
              <a href="http://localhost:3000/">Mes décisions</a>
            </li>
            <li>
              <PiSmileyBold />
              <a href="http://localhost:3000/"> Notifications</a>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
}
