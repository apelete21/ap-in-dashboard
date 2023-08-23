import React, { useContext } from "react";
import { icons } from "../service/icons";
import welIllust from "../assets/media/images/admin/welcome_illustration.png";
import { AppContext } from "../Contexts/AppContext";
import { Link } from "react-router-dom";

export default function Aside() {
  const { UserLogOut } = useContext(AppContext);
  return (
    <>
      <div className="aside">
        <div className="logo_box">
          <img className="logo" src={icons.lgDark} alt="" />
          <p className="tagline">Appeal of innovation</p>
        </div>
        <div className="onborard_card">
          <h3>Welcome to your administration board</h3>
          <p>Visualize and manage your website here</p>
          <img src={welIllust} alt="" />
        </div>

        <div className="logout" style={{ display: "grid" }} >
          <Link
            to="/profile"
            title="Disconnect account"
          >
            <svg style={{
              width: 25,
              filter: "grayscale(400)"
            }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="darkviolet"
              aria-hidden="true"
              width={80}
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            Profile
          </Link>
          <br />
          <Link
            to="/"
            title="Disconnect account"
            onClick={(e) => {
              e.preventDefault()
              UserLogOut()
            }}
          >
            <svg
              width="23"
              height="22"
              viewBox="0 0 33 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.416 11.7497V1.83301H1.41602V30.1663H18.416V20.2497M31.166 15.9997H7.08268M24.0827 8.91634L31.166 15.9997L24.0827 23.083"
                stroke="#BCBCBC"
                strokeWidth="2"
              />
            </svg>
            Logout
          </Link>
        </div>
      </div>
    </>
  );
}
