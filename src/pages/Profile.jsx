import React from "react";
import { Helmet } from "react-helmet";
import { bgs, teams } from "../service/icons";
import { Link } from "react-router-dom";
import ProfileInfo from "../components/profile";
import AddProfile from "../components/profile/add";
import ProfileUpdate from "../components/profile/update";
import ProfileList from "../components/profile/list";
import { useState } from "react";
import { useQuery } from "../service/query";

export default function Profile() {
  const query = useQuery();
  const [tab, setTab] = useState("");

  const ChangeTab = (e) => {
    // e.preventDefault();
    console.log(query.get("tab"));
    setTab(query.get("tab"));
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
            <nav className="dflex">
              <Link to={"/profile/?tab=me"} onClick={ChangeTab}>
                <p>Mon compte</p>
              </Link>
              <Link to={"/profile"} onClick={ChangeTab}>
                <p>Profiles</p>
              </Link>
              <Link to={"/profile/?tab=add"} onClick={ChangeTab}>
                <p>Nouveau profil</p>
              </Link>
            </nav>
            <div className="tab">
              {tab === "" || (tab === null && <ProfileList />)}
              {tab === "me" && <ProfileInfo />}
              {tab === "add" && <AddProfile />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
