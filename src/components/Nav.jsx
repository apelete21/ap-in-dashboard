import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { icons } from "../service/icons";
import { AppContext } from "../Contexts/AppContext";

function Nav() {
  const { pathname } = useLocation();
  const {user} = useContext(AppContext)

  const [userSubmenu, setuserSubmenu] = useState(false)

  const toggleSubMenu = () => {
    setuserSubmenu(!userSubmenu)
  }

  return (
    <>
      <div className="main_nav">
        <ul className="nav_items">
          <li>
            <Link
              className={`nav_link
                ${pathname === "/" && " selected_link"}
              `}
              to="/"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              className={`nav_link
                ${pathname.startsWith("/quote-requests") && " selected_link"}
              `}
              to="/quote-requests"
            >
              Quote request
            </Link>
          </li>
          <li>
            <Link
              className={`nav_link
                ${pathname.startsWith("/jobs") && " selected_link"}
              `}
              to="/jobs"
            >
              Jobs
            </Link>
          </li>
          <li>
            <Link
              className={`nav_link ${
                pathname.startsWith("/newsletters") && "selected_link"
              }`}
              to="/newsletters"
            >
              Newletters
            </Link>
          </li>
          <li>
            <Link
              className={`nav_link
                ${pathname.startsWith("/blog") && "selected_link"}
              `}
              to="/blog"
            >
              Blog
            </Link>
          </li>
        </ul>

        <div className={`profile_box ${userSubmenu && "active"}`} onClick={toggleSubMenu}>
          <p>
            {user?.fullName}
          </p>
          <img src={icons.prIcon} alt="profile" />
          <div className="user-menu">
            <Link to={"/profile"}>My account</Link>
            <Link>Logout</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
