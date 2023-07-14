import React, { useState } from "react";
import { teams } from "../../service/icons";

export default function AddProfile() {
  const [userData, setUserData] = useState({
    fullName: "",
    country: "",
    profile: "",
    address: "",
    phone_number: "",
    email: "",
    password: "",
    password_again: "",
  });

  const handleChange = (data) => {
    setUserData({ ...userData, ...data });
  };

  return (
    <>
      <div className="tab-me">
        <div className="profile-image">
          <div className="image-show">
            <img src={teams.Roger} alt="profile" />
          </div>
          <div className="picture-actions">
            <span>Charger une photo</span>
            <span>Retirer la photo</span>
          </div>
        </div>
        <form className="user-datas">
          <div className="user-data-item">
            <h3>Noms et Prénoms</h3>
            <input
              type="text"
              placeholder="Noms et Prénoms"
              onChange={(e) => handleChange({ fullName: e?.target?.value })}
            />
          </div>
          <div className="user-data-item">
            <h3>Email</h3>
            <input
              type="email"
              autoComplete={false}
              placeholder="Email"
              onChange={(e) => handleChange({ email: e?.target?.value })}
            />
          </div>
          <div className="user-data-item">
            <h3>Password</h3>
            <input
              type="password"
              autoComplete={false}
              placeholder="password"
              onChange={(e) => handleChange({ password: e?.target?.value })}
            />
          </div>
          <div className="user-data-item">
            <h3>Retype password</h3>
            <input
              type="password"
              autoComplete={false}
              placeholder="password"
              onChange={(e) =>
                handleChange({ password_again: e?.target?.value })
              }
            />
          </div>
          <div className="user-data-item">
            <h3>Téléphone</h3>
            <input
              type="number"
              placeholder="Téléphone"
              onChange={(e) => handleChange({ phone_number: e?.target?.value })}
            />
          </div>
          <div className="user-data-item">
            <h3>Addresse</h3>
            <input
              type="address"
              placeholder="Angré 7eme tranche, Abidjan, Cote d'ivoire"
              onChange={(e) => handleChange({ address: e?.target?.value })}
            />
          </div>
          <div className="user-data-item">
            <h3>Pays</h3>
            <input
              type="text"
              placeholder="Pays"
              onChange={(e) => handleChange({ country: e?.target?.value })}
            />
          </div>
        </form>
        <div className="updater-button">
          <span>Enrégistrer</span>
        </div>
      </div>
    </>
  );
}
