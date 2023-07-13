import React from "react";
import { teams } from "../../service/icons";

export default function ProfileInfo() {
  return (
    <div className="tab-me">
      <div className="profile-image"> 
        <div className="image-show">
          <img src={teams.feikandine} alt="profile" />
        </div>
        <div className="picture-actions">
          <span>Charger une photo</span>
          <span>Retirer la photo</span>
        </div>
      </div>
      <div className="user-datas">
        <div className="user-data-item">
          <h3>Noms et Prénoms</h3>
          <input type="text" value={"Admin"} placeholder="Noms et Prénoms" />
        </div>
        <div className="user-data-item">
          <h3>Téléphone</h3>
          <input
            type="text"
            value={"+228 294625854653"}
            placeholder="Téléphone"
          />
        </div>
        <div className="user-data-item">
          <h3>Email</h3>
          <input
            type="email"
            value={"admin@gmail.com"}
            placeholder="Noms et Prénoms"
          />
        </div>
        <div className="user-data-item">
          <h3>Pays</h3>
          <input type="text" value={"Liban"} placeholder="Pays" />
        </div>
        <div className="user-data-item">
          <h3>Password</h3>
          <input type="password" value={"password"} placeholder="password" />
        </div>
      </div>
      <div className="updater-button">
        <span>Enrégistrer</span>
      </div>
    </div>
  );
}
