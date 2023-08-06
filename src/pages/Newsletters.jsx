import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../Contexts/AppContext";
import { LoadingComp } from "../components/loading";
import { deleteManyEmails, getNewsletters } from "../requests/newsletters";
import { Helmet } from "react-helmet";
import jsPDF from "jspdf";
import HTMLReactParser from "html-react-parser";

export default function Newsletters() {
  const [emails, setEmails] = useState();
  const [reload, setreload] = useState(true);
  const [error, setError] = useState(false);
  const [todelete, setTodelete] = useState([]);

  const { setStatusMessage } = useContext(AppContext);
  /**
    |--------------------------------------------------
    | First newsletters data load
    |--------------------------------------------------
    */
  useEffect(() => {
    const request = async () => {
      setError(false);
      if (reload) {
        try {
          const data = await getNewsletters();
          setEmails(data);
        } catch (error) {
          setError(true);
        }
        setreload(false);
        return;
      }
      setreload(false);
    };
    request();
  }, [emails, reload]);

  /**
    |--------------------------------------------------
    | Function to add items to todelete if not exits
    |--------------------------------------------------
    */

  function addOrRemoveValue(val) {
    let arr = todelete;
    const index = arr?.indexOf(val);
    if (index !== -1) {
      // La valeur existe dans le tableau, on la supprime
      arr.splice(index, 1);
    } else {
      // La valeur n'existe pas dans le tableau, on l'ajoute
      arr.push(val);
      setTodelete(arr);
      return;
    }
    // On vérifie si la valeur existe encore dans le tableau
    const newIndex = arr.indexOf(val);
    if (newIndex !== -1 && newIndex !== index) {
      // La valeur existe encore, on la supprime
      arr.splice(newIndex, 1);
      setTodelete(arr);
      return;
    }
  }

  /**
    |--------------------------------------------------
    | Function to delete selected emails items
    |--------------------------------------------------
    */
  async function getDelete(e) {
    e.preventDefault();
    setTimeout(() => {
      const checkbox = document.querySelectorAll('input[type="checkbox"]');
      checkbox.forEach((element) => {
        element.checked = false;
      });
    }, 100);
    if (todelete.length === 0) {
      return setStatusMessage("Anything selected");
    }
    const response = await deleteManyEmails(todelete);
    setStatusMessage(response.message);
    setreload(true);
    // reinitialise la valeur des checkbox à false
    setTodelete([]);
  }


  /**
   * export datas to pdf file
   */
  const generatePDF = (e) => {
    e.preventDefault()
    const el = (<div>
      {emails?.map((e, i) => {
        <p>{`${e.email}`}</p>
      })}
    </div>)
      console.log(HTMLReactParser(el))
    const report = new jsPDF("portrait", "pt", "a4")
    report.html(HTMLReactParser(el)).then(() => {
      report.save("emails.pdf")
    })
  }

  return (
    <>
      <Helmet>
        <title>Newsletters</title>
      </Helmet>
      <div className="newsletter-request-list">
        <div className="newsletter-lists-top-bar">
          <h1>Newletters contacts list</h1>
          <Link
            className="btn btn_primary"
            to={"/newsletters"}
            onClick={generatePDF}
          >
            Export emails
          </Link>
          <Link
            className="btn btn_primary"
            to={"/newsletters"}
            onClick={getDelete}
          >
            Delete the selection
          </Link>
        </div>
        {!reload ? <div className="requests-lists">
          {emails?.length ? (
            emails?.map((item, index) => {
              return (
                <div className="request-item" key={index}>
                  <div className="requester-letter-logo">
                    {item?.email.charAt(0).toUpperCase()}
                  </div>
                  <div className="requester-details">
                    <div className="requester-email">{item.email}</div>
                    <div className="resquest-date">
                      {moment(item?.createdAt).calendar()}
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    onClick={() => addOrRemoveValue(item._id)}
                  />
                </div>
              );
            })
          ) : (
            <p style={{ width: "100%" }}>No email found!</p>
          )}
        </div> : <LoadingComp scale={0.7} />}
      </div>
    </>
  );
}
