import React from "react";
import { Helmet } from "react-helmet";
import { bgs, teams } from "../service/icons";
import ProfileInfo from "../components/profile";
import AddProfile from "../components/profile/add";
import ProfileUpdate from "../components/profile/update";
import ProfileList from "../components/profile/list";
import { useState } from "react";

export default function Profile() {
  const [tab, setTab] = useState("add");

  const ChangeTab = (e, value) => {
    e.preventDefault();
    console.log(value);
    setTab(value?.toString());
  };

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
        <div className="profile-body dflex">
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
          <div className="user-tabs">
            <div className="tabs">
              <span
                className={tab === (null || "") && "active"}
                onClick={(e) => ChangeTab(e, "")}
              >
                <p>Profiles</p>
              </span>
              <span
                className={tab === "me" && "active"}
                onClick={(e) => ChangeTab(e, "me")}
              >
                <p>Mon compte</p>
              </span>
              <span
                className={tab === "add" && "active"}
                onClick={(e) => ChangeTab(e, "add")}
              >
                <p>Nouveau profil</p>
              </span>
            </div>
            <div className="tab-content">
              {tab === (null || "") && <ProfileList />}
              {tab === "me" && <ProfileInfo />}
              {tab === "add" && <AddProfile />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
