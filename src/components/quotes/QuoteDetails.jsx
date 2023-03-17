import { useContext } from "react";
import { AppContext } from "../../Contexts/AppContext";

function QuoteDetails() {
    const { quoteSelected } = useContext(AppContext);
    return (
        <>
            {/* <!-- Quotes requests details --> */}
            <div className="quote-request-details-container">
                <div className="quote-request-details-title">
                    <h1>
                        {quoteSelected.fullname ?
                            quoteSelected.fullname?.split(" ")[0] +
                                "'s request details" : 
                                "No item selected"
                                }
                    </h1>
                </div>
                {quoteSelected && (
                    <div className="request-details">
                        <div
                            className="request-details-item"
                            style={{ "--column": "1 / 2", "--row": "1 / 2" }}
                        >
                            <div className="request-details-type">
                                Full name
                            </div>
                            <div className="request-details-value default-p">
                                {quoteSelected.fullname}
                            </div>
                        </div>
                        <div
                            className="request-details-item"
                            style={{ "--column": "2 / 3", "--row": "1 / 2" }}
                        >
                            <div className="request-details-type">Location</div>
                            <div className="request-details-value default-p">
                                {quoteSelected.location}
                            </div>
                        </div>
                        <div
                            className="request-details-item"
                            style={{ "--column": "1 / -1", "--row": "2 / 3" }}
                        >
                            <div className="request-details-type">E-mail</div>
                            <div className="request-details-value default-p">
                                {quoteSelected.email}
                            </div>
                        </div>
                        <div
                            className="request-details-item"
                            style={{ "--column": "1 / 2", "--row": "3 / 4" }}
                        >
                            <div className="request-details-type">
                                Company name
                            </div>
                            <div className="request-details-value default-p">
                                {quoteSelected.company_name}
                            </div>
                        </div>
                        <div
                            className="request-details-item"
                            style={{ "--column": "2 / 3", "--row": "3 / 4" }}
                        >
                            <div className="request-details-type">
                                Phone Number
                            </div>
                            <div className="request-details-value default-p">
                                {quoteSelected.phone_number}
                            </div>
                        </div>
                        <div
                            className="request-details-item"
                            style={{ "--column": "1 / -1", "--row": "4 / 5" }}
                        >
                            <div className="request-details-type">
                                Service Needed
                            </div>
                            <div className="request-details-value default-p">
                                {quoteSelected.service}
                            </div>
                        </div>
                        <div
                            className="request-details-item"
                            style={{ "--column": "1 / -1", "--row": "5 / 6" }}
                        >
                            <div className="request-details-type">
                                Description
                            </div>
                            <div className="request-details-value">
                                <p className="default-p">
                                    {quoteSelected.description}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {/* <!-- Quotes requests details --> */}
        </>
    );
}

export default QuoteDetails;
