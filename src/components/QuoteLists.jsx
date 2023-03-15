import moment from "moment";
import React, { useContext } from "react";
import { AppContext } from "../Contexts/AppContext";
import { icons } from "../service/icons";

function QuoteLists() {
    const { quotesRequested, ChangeItem } = useContext(AppContext);

    return (
        <>
            <div className="quotes-requests-lists-container">
                <div className="quotes-search-bar-container">
                    <form>
                        <div className="quotes-search-bar">
                            <input type="text" placeholder="Rechercher" />
                            <button>
                                <img src={icons.searchIcon} alt="search icon" />
                            </button>
                        </div>
                    </form>
                </div>
                <div className="quotes-requests-lists">
                    {/* <!-- Item --> */}
                    {quotesRequested &&
                        quotesRequested?.slice(0, 5).map((item, index) => {
                            return (
                                <div
                                    className="quote-request-item"
                                    key={index}
                                    onClick={() => ChangeItem(item)}
                                >
                                    <div className="quote-request-picture">
                                        <img src={icons.prIcon} alt="" />
                                    </div>
                                    <div className="quote-request-item-details">
                                        <div className="quote-request-title">
                                            {item.fullname}
                                        </div>
                                        <div className="quote-time-requested">
                                            {moment(item.createdAt).calendar()}
                                        </div>
                                    </div>
                                    <div className="quotes-button-trash">
                                        <div className="button-trash-quote">
                                            <img src={icons.trashIcon} alt="" />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>

                {/* item end */}
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
            </div>
        </>
    );
}

export default QuoteLists;
