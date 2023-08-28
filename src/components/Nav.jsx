import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { icons, teams } from "../service/icons";
import { AppContext } from "../Contexts/AppContext";
import { imgUrl } from "../requests/article";

function Nav() {
  const { pathname } = useLocation();
  const { user } = useContext(AppContext);

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
              className={`nav_link ${pathname.startsWith("/newsletters") && "selected_link"
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

        <Link to={"/profile"}>
          <div
            className={`profile_box ${pathname?.startsWith("/profile") ? "active" : ""}`}
          >
            <p>{user?.fullName || "Anonymous"}</p>
              <img src={user?.profile ? `${imgUrl}/${user?.profile}` : teams.feikandine} alt="" />
          </div>
        </Link>
      </div>
    </>
  );
}

export default Nav;
