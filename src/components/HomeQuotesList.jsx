import moment from "moment";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../Contexts/AppContext";
import { icons } from "../service/icons";

const HomeQuotesList = () => {
    const { setQuoteSelected, quotesRequested } = useContext(AppContext);
    return (
        <>
            <div className="quote_request_list">
                <div className="quote_request_list_header">
                    <h1>Latest quote requests</h1>
                    <Link className="btn btn_primary" to="/quote-requests">
                        View all
                    </Link>
                </div>

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
                            {quotesRequested &&
                                quotesRequested
                                    .slice(0, 5)
                                    .map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td className="full_name">
                                                    <div className="requester-picture">
                                                        <img
                                                            src={icons.prIcon}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="requester_name">
                                                        {item.fullname}
                                                    </div>
                                                </td>
                                                <td className="email">
                                                    {item.email}
                                                </td>
                                                <td className="location">
                                                    {item.location}
                                                </td>
                                                <td className="service">
                                                    <span className="service_name">
                                                        {item.service}
                                                    </span>
                                                </td>
                                                <td className="date">
                                                    {moment(
                                                        item.createdAt
                                                    ).calendar()}
                                                </td>
                                                <td className="actions">
                                                    <span
                                                        className="view-info"
                                                        title="view"
                                                        onClick={() =>
                                                            setQuoteSelected(
                                                                item
                                                            )
                                                        }
                                                    >
                                                        <Link
                                                            to={
                                                                "/quote-requests"
                                                            }
                                                        >
                                                            <img
                                                                src={
                                                                    icons.eyeIcon
                                                                }
                                                                alt="view-info"
                                                            />
                                                        </Link>
                                                    </span>
                                                    <span
                                                        className="delete-item"
                                                        title="delete"
                                                    >
                                                        <img
                                                            src={
                                                                icons.trashIcon
                                                            }
                                                            alt="delete-item"
                                                        />
                                                    </span>
                                                </td>
                                            </tr>
                                        );
                                    })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default HomeQuotesList;
