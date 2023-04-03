import React, { useEffect, useState } from "react";
import { icons } from "../service/icons";
import { Link } from "react-router-dom";
import { allApplications } from "../requests/applications";
import moment from "moment";

export default function ApplicationsTable() {
  const [isAppLoading, setIsAppLoading] = useState(true);
  const [apply, setApply] = useState([]);
  const [appError, setAppError] = useState("");

  useEffect(() => {
    const getData = async () => {
      if (isAppLoading) {
        const response = await allApplications();
        if (response?.ok) {
          setApply(response?.data);
        } else {
          setAppError(response?.data.message);
        }
        setIsAppLoading(false);
      }
    };
    getData();
  }, [isAppLoading]);

  if (appError == "") {
    return (
      <>
        <div className="quote_request_list_header">
          <h1>Applications list</h1>
          <Link
            className="btn btn_primary"
            to="/delete"
            onClick={(e) => e.preventDefault()}
          >
            Delete the selection
          </Link>
        </div>
        <div className="table-wrap">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Full name</th>
                <th>Email</th>
                <th>Location</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {apply &&
                apply?.map((element, index) => {
                  return (
                    <tr key={index}>
                      <td className="full_name">
                        <input type="checkbox" name="" id="" />
                        <div className="requester-picture">
                          <img src={icons.prIcon} alt="" />
                        </div>
                        <div className="requester_name"> {element?.fullname} </div>
                      </td>
                      <td className="email">{element?.email}</td>
                      <td className="location">{element?.location}</td>
                      <td className="date">{moment(element?.createdAt).calendar()}</td>
                      <td className="actions">
                        <span className="view-info">
                          <img src={icons.eyeIcon} alt="view-info" />
                        </span>
                        <span className="delete-item">
                          <img src={icons.trashIcon} alt="delete-item" />
                        </span>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </>
    );
  } else {
    return (
      <p
        style={{
          textAlign: "center",
        }}
      >
        {" "}
        {appError}{" "}
      </p>
    );
  }
}
