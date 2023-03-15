import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteManyEmails, getNewsletters } from "../requests/newsletters";

export default function Newsletters() {
    const [emails, setEmails] = useState();
    const [reload, setreload] = useState(true);
    const [todelete, setTodelete] = useState([]);
    const [response, setresponse] = useState("");
    /**
    |--------------------------------------------------
    | First newsletters data load
    |--------------------------------------------------
    */
    useEffect(() => {
        const request = async () => {
            if (reload) {
                const data = await getNewsletters();
                setEmails(data);
                setreload(false);
                return data;
            }
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
        const response = await deleteManyEmails(todelete);
        setresponse(response.message);
        setTimeout(() => {
            setresponse("");
        }, 200);
        setreload(true);
        setTodelete([]);
        // reinitialise la valeur des checkbox à false
        const checkbox = document.querySelector('input[type="checkbox"]');
        checkbox.checked = false
    }

    return (
        <>
            <div className="newsletter-request-list">
                <div className="newsletter-lists-top-bar">
                    <h1>Newletters contacts list</h1>
                    <Link
                        className="btn btn_primary"
                        to={"/newsletters/delete"}
                        onClick={getDelete}
                    >
                        Delete the selection
                    </Link>
                </div>
                <p
                    style={{
                        color: "#777 !importtant",
                    }}
                >
                    {response}
                </p>
                <div className="requests-lists">
                    {emails?.map((item, index) => {
                        return (
                            <div className="request-item" key={index}>
                                <div className="requester-letter-logo">
                                    {item.email.charAt(0).toUpperCase()}
                                </div>
                                <div className="requester-details">
                                    <div className="requester-email">
                                        {item.email}
                                    </div>
                                    <div className="resquest-date">
                                        {moment(item?.createdAt).calendar()}
                                    </div>
                                </div>
                                <input
                                    type="checkbox"
                                    onClick={() => addOrRemoveValue(item._id)}
                                    defaultValue={false}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
