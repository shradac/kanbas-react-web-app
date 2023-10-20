import { Link, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaUserCircle} from "react-icons/fa";
import {RiDashboard3Fill} from "react-icons/ri";
import {FaBook} from "react-icons/fa";
import {BsFillCalendar2DateFill} from "react-icons/bs";
import {FaInbox} from "react-icons/fa";
import {FaHistory} from "react-icons/fa";
import {FaChalkboardTeacher} from "react-icons/fa";
import {BiHelpCircle} from "react-icons/bi";
import {AiOutlineArrowRight} from "react-icons/ai";


import "../css/menu.css";
import "../css/sections.css";
import "../css/index.css";

function KanbasNavigation() {
  const links = [
    "Account",
    "Dashboard",
    "Courses",
    "Calendar",
    "Inbox",
    "History",
    "Studio",
    "Commons",
    "Help",
  ];

  const linkToIconMap = {
    Account: <FaUserCircle />,
    Dashboard: <RiDashboard3Fill />,
    Courses: <FaBook />,
    Calendar: <BsFillCalendar2DateFill />,
    Inbox: <FaInbox />,
    History: <FaHistory />,
    Studio: <FaChalkboardTeacher />,
    Commons: <AiOutlineArrowRight />,
    Help: <BiHelpCircle />,

  };



  const { pathname } = useLocation();
  return (
    <div className="d-none d-md-block col-auto d-flex black">
      <div className="wd-kanbas-navigation">
      <a href="#">
          <img src="../../../images/northeastern-university-logo.png" class="logo-in-menu"></img>
        </a>
        {links.map((link, index) => (
          <Link
            key={index}
            to={`/Kanbas/${link}`}
            className={`list-group-item wd-kanbas-navigation-home-item ${
              pathname.includes(link) && "wd-active"
            }`}
          >
            <div className="icon-container">

              {linkToIconMap[link]}
              
            </div>
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
}
export default KanbasNavigation;


