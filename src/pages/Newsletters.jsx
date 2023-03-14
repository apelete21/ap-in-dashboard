import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getNewsletters } from "../requests/getnewsletters";

export default function Newsletters() {
    const [emails, setEmails] = useState();

    const [reload, setreload] = useState(true);

    const [todelete, setTodelete] = useState([]);

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
    }, [emails]);

    return (
        <>
            <div className="newsletter-request-list">
                <div className="newsletter-lists-top-bar">
                    <h1>Newletters contacts list</h1>
                    <Link className="btn btn_primary" to={"/delete"}>
                        Delete the selection
                    </Link>
                </div>

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
                                <input type="checkbox" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
