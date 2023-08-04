import moment from "moment";
import React, { useContext, useState } from "react";
import { AppContext } from "../../Contexts/AppContext";
import { icons } from "../../service/icons";
import { PromptPopUp } from "../template/elements/prompt";
import { createPortal } from "react-dom";

function QuoteLists({ }) {
  const { quotesRequested, ChangeItem, quoteSelected, deleteQuote } = useContext(AppContext);

  const [search, setSearch] = useState("")
  const [selected, setSelected] = useState({})

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
      <div className="quotes-requests-lists-container">
        <div className="quotes-search-bar-container">
          <form onSubmit={e => e.preventDefault()}>
            <div className="quotes-search-bar">
              <input type="text" placeholder="Rechercher" onChange={(e) => setSearch(e?.target?.value)} />
              <button>
                <img src={icons.searchIcon} alt="search icon" />
              </button>
            </div>
          </form>
        </div>
        <div className="quotes-requests-lists">
          {/* <!-- Item --> */}
          {quotesRequested?.length ? (
            quotesRequested?.filter((element) => {
              if (search === "") {
                return element;
              }
              if (search !== "" && element.fullname.search(search) !== -1) {
                return element;
              }
            })?.map((item, index) => {
              return (
                <div
                  className={`quote-request-item ${item === selected && "selected"}`}
                  key={index}
                  onClick={() => {
                    ChangeItem(item)
                    setSelected(item)
                  }}
                >
                  <div className="quote-request-picture">
                    <div className="icon-letter">
                      <span> {item?.fullname?.charAt(0)?.toUpperCase()} </span>
                    </div>
                  </div>
                  <div className="quote-request-item-details">
                    <div className="quote-request-title">{item.fullname}</div>
                    <div className="quote-time-requested">
                      {moment(item.createdAt).calendar()}
                    </div>
                  </div>
                  <div
                    className="quotes-button-trash"
                    onClick={() => {
                      setDelId(item?._id)
                      setSubmitPrompt(true)
                    }}
                  >
                    <div className="button-trash-quote">
                      <img src={icons.trashIcon} alt="" />
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p style={{ textAlign: "center" }}>0 requests</p>
          )}
        </div>

        {/* item end */}
        {/* {quotesRequested?.length !== 0 ? (
          <div className="quote-pagination-controller">
            <div className="pagination-back-btn">
              <img src={icons.chevronLeft} alt="" />
            </div>
            <div className="controller-pages-number">
              <span className="selected">1</span>
              <span>2</span>
              <span>3</span>
              <span>...</span>
              <span>14</span>
            </div>
            <div className="pagination-forward-btn">
              <img src={icons.chevronRight} alt="" />
            </div>
          </div>
        ) : (
          <></>
        )} */}
      </div>
    </>
  );
}

export default QuoteLists;
