import moment from "moment";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../Contexts/AppContext";
import { icons } from "../../service/icons";
import { useState } from "react";
import { LoadingComp } from "../loading";
import { createElement } from "react";
import { PromptPopUp } from "../template/elements/prompt";
import { createPortal } from "react-dom";

const HomeQuotesList = () => {
  const { setQuoteSelected, quotesRequested, deleteQuote } =
    useContext(AppContext);

  const [deleting, setDeleting] = useState(false)
  const [delId, setDelId] = useState("")
  const [commitApp, setCommitApp] = useState(false)
  const [submitPrompt, setSubmitPrompt] = useState(false)

  const deleteOneApp = () => {
    deleteQuote(delId)
    setSubmitPrompt(false)
  }

  return (
    <>
      {submitPrompt && createPortal(<>
        <PromptPopUp setSubmitPrompt={setSubmitPrompt} action={deleteOneApp} />
      </>, document.body)}
      <div className="quote_request_list">
        <div className="quote_request_list_header">
          <h1>Latest quote requests</h1>
          <Link className="btn btn_primary" to="/quote-requests">
            View all
          </Link>
        </div>

        {quotesRequested?.length ? (
          <div className="table-wrap">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Full name</th>
                  <th>Email</th>
                  <th>Location</th>
                  <th>Service needed</th>
                  <th>Date</th>
                  <th className="text-last">Actions</th>
                </tr>
              </thead>
              <tbody>
                {quotesRequested?.slice(0, 5).map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="full_name">
                        <div className="requester-picture">
                          <div className="icon-letter">
                            <span> {item?.fullname?.charAt(0)?.toUpperCase()} </span>
                          </div>
                        </div>
                        <div className="requester_name">{item.fullname}</div>
                      </td>
                      <td className="email">{item.email}</td>
                      <td className="location">{item.location}</td>
                      <td className="service">
                        <span className="service_name">{item.service}</span>
                      </td>
                      <td className="date">
                        {moment(item.createdAt).calendar()}
                      </td>
                      <td className="actions">
                        <div style={{
                          display: "flex",
                          gap: "0.5rem",
                          justifyItems: "center",
                          alignItems: "center",
                          alignContent: "center"
                        }}>
                          <span
                            className="view-info"
                            title="view"
                            onClick={() => setQuoteSelected(item)}
                          >
                            <Link to={"/quote-requests"}>
                              <img src={icons.eyeIcon} alt="view-info" />
                            </Link>
                          </span>
                          <span
                            className="delete-item"
                            title="delete"
                            onClick={() => {
                              setDelId(item?._id)
                              setSubmitPrompt(true)
                            }}
                          >
                            <img src={icons.trashIcon} alt="delete-item" />
                          </span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <p style={{ textAlign: "center" }}>No requests found!</p>
        )}
      </div>
    </>
  );
};

export default HomeQuotesList;
