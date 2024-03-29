import React, { useState, useEffect, useRef } from "react";
import { teams } from "../../service/icons";
import { usersReqs } from "../../requests/users";
import { LoadingComp } from "../loading";
import { imgUrl, pictureReq } from "../../requests/article";
import { useContext } from "react";
import { AppContext } from "../../Contexts/AppContext"

export default function ProfileInfo({ loading, setloading }) {
  const { setStatusMessage } = useContext(AppContext)
  const [userFisrtLoad, setUserFisrtLoad] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [current, setCurrent] = useState({});
  const pfImg = useRef(null)
  const [pfChange, setPfChange] = useState(false)
  const [currentError, setCurrentError] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      if (userFisrtLoad) {
        const { user, ok } = await usersReqs({}, "auth");
        if (ok) {
          setCurrent(user);
        } else {
          setCurrentError(true);
        }
      }
      setIsLoading(false);
    })();
    setUserFisrtLoad(false);
  }, [userFisrtLoad]);

  const [userInfo, setUserInfo] = useState({
    fullName: "",
    phone_number: "",
    email: "",
    country: "",
    address: "",
    profile: "",
  });

  const handleUserChange = (data) => {
    setUserInfo({
      ...userInfo,
      ...data,
    });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    let body = {
      email: current?.email,
    };
    const keys = Object.keys(userInfo);
    keys?.forEach((e, i) => {
      if (userInfo[e] === "") {
        return;
      } else {
        body[e] = userInfo[e];
      }
    });
    const { ok } = await usersReqs(body, "update");
    if (ok) {
      setIsLoading(true)
      setUserFisrtLoad(true)
      setStatusMessage("Update Successfull!");
    } else {
      alert("An error occured!");
    }
    setIsLoading(false);
  };

  const handleClickFileInput = async () => {
    await pfImg.current.click()
  }

  const handlePfChange = async () => {
    setPfChange(true)
    if (pfImg.current?.files[0]) {
      const body = new FormData();
      body.append("file", pfImg?.current?.files[0]);
      const { data, ok } = await pictureReq("POST", "upload", body);
      if (ok) {
        const newBody = {
          profile: data?.srcUrl
        }
        const { ok } = await usersReqs(newBody, "update");
        if (!ok) {
          alert("An error occured!");
        }
        setIsLoading(true)
      }
    }
    setUserFisrtLoad(true)
    setloading(true)
    setPfChange(false)
  }

  const handlePfRemove = async () => {
    setPfChange(true)
    const { ok } = await pictureReq("POST", `delete/${current?.profile}`);
    if (ok) {
      const newBody = {
        profile: null
      }
      const { ok } = await usersReqs(newBody, "update");
      if (!ok) {
        alert("An error occured!");
      } else {
        setStatusMessage("update success!")
      }
      setIsLoading(true)
    }
    setUserFisrtLoad(true)
    setloading(true)
    setPfChange(false)
  }

  if (isLoading) {
    return <LoadingComp scale={0.3} />;
  } else {
    return (
      <>
        {!currentError ? (
          <div className="tab-me">
            <div className="profile-image">
              <div className="image-show">
                {pfChange ? <LoadingComp scale={0.2} /> : <img src={current?.profile ? imgUrl + "/" + current?.profile : teams.feikandine} alt="profile" />}
                <input type="file" ref={pfImg} onChange={handlePfChange} accept="jpg/jpeg/png/svg" style={{ position: "absolute", opacity: 0, zIndex: -100 }} />
              </div>
              <div className="picture-actions">
                <span onClick={handleClickFileInput}>Charger une photo</span>
                <span onClick={handlePfRemove}>Retirer la photo</span>
              </div>
            </div>
            <div className="user-datas">
              <div className="user-data-item">
                <h3>Noms et Prénoms</h3>
                <input
                  type="text"
                  defaultValue={current?.fullName}
                  onChange={(e) => {
                    handleUserChange({ fullName: e?.target?.value });
                  }}
                  placeholder="Noms et Prénoms"
                />
              </div>
              <div className="user-data-item">
                <h3>Téléphone</h3>
                <input
                  type="text"
                  defaultValue={current?.phone_number}
                  onChange={(e) => {
                    handleUserChange({ phone_number: e?.target?.value });
                  }}
                  placeholder="Téléphone"
                />
              </div>
              <div className="user-data-item">
                <h3>Pays</h3>
                <input
                  type="text"
                  defaultValue={current?.country}
                  onChange={(e) => {
                    handleUserChange({ country: e?.target?.value });
                  }}
                  placeholder="Pays"
                />
              </div>
              <div className="user-data-item">
                <h3>Address</h3>
                <input
                  type="text"
                  defaultValue={current?.address}
                  onChange={(e) => {
                    handleUserChange({ address: e?.target?.value });
                  }}
                  placeholder="address"
                />
              </div>
            </div>
            <div className="updater-button">
              <span onClick={handleSubmit}>Enrégistrer</span>
            </div>
          </div>
        ) : (
          <div className="" style={{ textAlign: "center" }}>
            {"Error while getting data"}
          </div>
        )}
      </>
    );
  }
}
