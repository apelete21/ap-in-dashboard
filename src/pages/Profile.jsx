import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { bgs, teams } from "../service/icons";
import ProfileInfo from "../components/profile";
import AddProfile from "../components/profile/add";
import ProfileList from "../components/profile/list";
import { useState } from "react";
import { usersReqs } from "../requests/users";
import { useContext } from "react";
import { AppContext } from "../Contexts/AppContext";
import { baseUrl } from "../api/url";
import { LoadingComp } from "../components/loading";
import { createPortal } from "react-dom";
import UpdatePwd from "../components/profile/password";

export default function Profile() {
  const { setStatusMessage } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);
  const [tab, setTab] = useState("me");
  const [user, setUser] = useState({});
  const [popUp, setPopUp] = useState(false)

  useEffect(() => {
    (async () => {
      const { user, ok, message } = await usersReqs({}, "auth");
      if (ok) {
        setUser(user);
      } else {
        setStatusMessage(message ?? message);
      }
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    })();
  }, [isLoading]);

  const ChangeTab = (e, value) => {
    e.preventDefault();
    setTab(value?.toString());
  };

  const handleShow = () => {
    setPopUp(true)
  }

  if (isLoading)
    return (
      <>
        <LoadingComp scale={0.3} />
      </>
    );
  else
    return (
      <>
        {popUp ? createPortal(<UpdatePwd cancel={() => {
          setPopUp(false)
        }} />, document.body) : <></>}
        <Helmet>
          <title>Profile | AP'IN</title>
        </Helmet>
        <div className="profile">
          <div className="profile-header">
            <div className="cover-picture">
              <img src={bgs.bannerImg} alt="cover-picture" />
            </div>
            <div className="profile-picture wpad">
              <img
                src={
                  user?.profile
                    ? `${baseUrl}/picture/${user.profile}`
                    : teams.feikandine
                }
                alt="profile-picture"
              />
            </div>
            <div className="user-info wpad">
              <h2 className="info-name">{user?.fullName}</h2>
              <p className="info-email">{user?.email}</p>
            </div>
          </div>
          <div className="profile-body dflex">
            <div className="side-pane">
              <div className="user-details">
                <div className="user-details-option">
                  <p>Pays:</p>
                  <p>{user?.country}</p>
                </div>
                <div className="user-details-option">
                  <p>Addresse:</p>
                  <p>{user?.address}</p>
                </div>
                <div className="user-details-option">
                  <p>Téléphone:</p>
                  <p>{user?.phone_number}</p>
                </div>
                <div className="user-details-option">
                  <div className="updater-button" onClick={handleShow} style={{ cursor: "pointer" }}>
                    Change Password
                    {/* <span onClick={() => { }} style={{ color: "white" }}></span> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="user-tabs">
              <div className="tabs">
                <span
                  className={tab === "me" && "active"}
                  onClick={(e) => ChangeTab(e, "me")}
                >
                  <p>Mon compte</p>
                </span>
                {user?.role === "USER" ? (
                  <></>
                ) : (
                  <>
                    <span
                      className={tab === (null || "") && "active"}
                      onClick={(e) => ChangeTab(e, "")}
                    >
                      <p>Profiles</p>
                    </span>
                    <span
                      className={tab === "add" && "active"}
                      onClick={(e) => ChangeTab(e, "add")}
                    >
                      <p>Nouveau profil</p>
                    </span>
                  </>
                )}
              </div>
              <div className="tab-content">
                {tab === "me" && <ProfileInfo loading={isLoading} setloading={setIsLoading} user={user} />}
                {user?.role !== "USER" && (
                  <>
                    {tab === (null || "") && <ProfileList loading={isLoading} setloading={setIsLoading} />}
                    {tab === "add" && <AddProfile loading={isLoading} setloading={setIsLoading} setTab={setTab} />}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
