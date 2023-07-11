import React from "react";
import { Helmet } from "react-helmet";
import { bgs, teams } from "../service/icons";

export default function Profile() {
  return (
    <>
      <Helmet>
        <title>Profile | AP'IN</title>
      </Helmet>
      <div className="profile">
        <div className="profile-header">
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
        <div className="profile-body">
          <div className="side-pane">
            <div className="user-details">
              <div className="user-details-option">
                <p>Pays:</p>
                <p>Sénégal</p>
              </div>
              <div className="user-details-option">
                <p>Addresse:</p>
                <p>Angré 7eme tranche, Abidjan, Cote d'ivoire</p>
              </div>
              <div className="user-details-option">
                <p>Téléphone:</p>
                <p>+228 7886325636</p>
              </div>
            </div>
          </div>
          <div className="user-main">
            
          </div>
        </div>
      </div>
    </>
  );
}
