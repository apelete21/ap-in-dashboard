import React, { useContext, useEffect, useState } from "react";
import { icons } from "../service/icons";
import { Link, useParams } from "react-router-dom";
import {
  allApplications,
  deleteOneApplication,
} from "../requests/applications";
import moment from "moment";

import { AppContext } from "../Contexts/AppContext";
import { createPortal } from "react-dom";
import { PromptPopUp } from "./template/elements/prompt";

export default function ApplicationsTable({
  isDataLoading,
  setIsDataLoading,
  jobId,
}) {
  const { setJobApp, setStatusMessage } = useContext(AppContext);

  const [isAppLoading, setIsAppLoading] = useState(true);
  const [deletePrompt, setDeletePrompt] = useState(false)
  const [apply, setApply] = useState([]);
  const [appError, setAppError] = useState("");
  const [selected, setSelected] = useState("")

  useEffect(() => {
    const getData = async () => {
      const response = await allApplications(jobId);
      if (response?.ok) {
        setApply(response?.data);
      } else {
        setAppError(response?.data.message);
      }
      setIsAppLoading(false);
    };
    getData();
  }, [isAppLoading, isDataLoading, jobId]);

  /**
    |--------------------------------------------------
    | Funtion to delete one Job application
    |--------------------------------------------------
    */

  async function handleDeleteJobApp(id) {
    const response = await deleteOneApplication(id);
    setStatusMessage(response?.data.message);
    setIsAppLoading(true);
    setIsDataLoading(true);
  }
  // (!isAppLoading && !setIsDataLoading) ? (
  if (appError === "") {
    return (
      <>
      {deletePrompt ? createPortal(<PromptPopUp action={()=> {
        handleDeleteJobApp(selected)
      }} setSubmitPrompt={setDeletePrompt} />, document.body) : <></>}
        <div className="quote_request_list_header">
          <h1>Applications list</h1>
          {/* <Link
            className="btn btn_primary"
            to="delete"
            onClick={(e) => e.preventDefault()}
          >
            Delete the selection
          </Link> */}
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
              {apply?.map((element, index) => {
                return (
                  <tr key={index}>
                    <td className="full_name">
                      {/* <input type="checkbox" name="" id="" /> */}
                      {/* <div className=""> */}
                      <div className="requester-letter-logo">
                        {element?.fullname?.charAt(0).toUpperCase()}
                        {/* </div> */}
                      </div>
                      <div className="requester_name">
                        {element?.fullname}
                      </div>
                    </td>
                    <td className="email">{element?.email}</td>
                    <td className="location">{element?.location}</td>
                    <td className="date">
                      {moment(element?.createdAt).calendar()}
                    </td>
                    <td className="actions">
                      <span
                        className="view-info"
                        title="view"
                        onClick={() => setJobApp(element)}
                      >
                        <img src={icons.eyeIcon} alt="view-info" />
                      </span>
                      <span
                        className="delete-item"
                        title="delete"
                        onClick={() => {
                          setSelected(element?._id)
                          setDeletePrompt(true)}}
                      >
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
        {appError}
      </p>
    );
  }
  // )() : (
  //   <LoadingComp scale={0.6} />
  // );
}
