import React from "react";
import { Helmet } from "react-helmet";
import { bgs, teams } from "../service/icons";

export default function Profile() {
  return (
    <>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <div className="profile">
        <div className="pictures">
          <div className="cover-picture">
            <img src={bgs.bannerImg} alt="cover-picture" />
          </div>
          <div className="profile-picture wpad">
            <img src={teams.Roger} alt="profile-picture" />
          </div>
          <div className="user-info wpad">
            <h2 className="info-name">Marc Doe</h2>
            <p className="info-email">marcdoe@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
}
