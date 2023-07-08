import { Helmet } from "react-helmet";
import QuoteDetails from "../components/quotes/QuoteDetails";
import QuoteLists from "../components/quotes/QuoteLists";

export default function QuoteRequests() {
    
    return (
        <>
        <Helmet>
            <title></title>
        </Helmet>
            <div className="quotes-requests-container">
                <QuoteLists />
                <QuoteDetails />
            </div>
        </>
    );
}
