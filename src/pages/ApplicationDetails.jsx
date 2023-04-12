import { useContext, useEffect } from "react";
import { AppContext } from "../Contexts/AppContext";
import { icons } from "../service/icons";
import { DownloadFile, DownloadFileRoute } from "../requests/applications";
import { useLocation } from "react-router-dom";

export default function ApplicationDetails() {
  const { JobApp, setJobApp } = useContext(AppContext);
  const handleClose = (e) => {
    e.preventDefault();
    setJobApp(null);
  };
  if (JobApp !== null) {
    return (
      <div className="right-popup">
        <div className="right-popup-bg" onClick={handleClose} />
        <div className="job-application-details">
          <div className="details-top-sections">
            <a href="#" className="close-popup" onClick={handleClose}>
              <img src={icons.alGray} width={25} alt="" />
            </a>
            <h1>Applications details</h1>
          </div>

          <div className="details-specifications">
            <div className="detail-item flex-basis-45">
              <div className="detail-item-name">Full name</div>
              <div className="detail-item-value">{JobApp?.fullname}</div>
            </div>
            <div className="detail-item flex-basis-45">
              <div className="detail-item-name">Location</div>
              <div className="detail-item-value">{JobApp?.location}</div>
            </div>
            <div className="detail-item">
              <div className="detail-item-name">E-mail</div>
              <div className="detail-item-value">{JobApp?.email}</div>
            </div>
            <div className="detail-item">
              <div className="detail-item-name">Phone number</div>
              <div className="detail-item-value">{JobApp?.phone_number}</div>
            </div>
            <div className="detail-item">
              <div className="detail-item-name">Resume</div>
              <div className="detail-item-value resume">
                <div>
                  <div className="document-picture">
                    <img
                      src="../assets/media/images/icons/pdf-icon.svg"
                      alt=""
                    />
                  </div>
                  <div className="document-name">{JobApp?.cv}</div>
                </div>

                <a
                  href={`${DownloadFileRoute}/${JobApp.cv}`}
                  title="Download resume"
                  target="_blank"
                >
                  Download
                </a>
              </div>
            </div>
            <div className="detail-item">
              <div className="detail-item-name">Profile</div>
              <div className="detail-item-value">{JobApp?.profile}</div>
            </div>
            <div className="detail-item">
              <div className="detail-item-name">Motivation</div>
              <div className="detail-item-value">{JobApp?.motivation}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
