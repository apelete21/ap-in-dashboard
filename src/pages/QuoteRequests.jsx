import QuoteDetails from "../components/QuoteDetails";
import QuoteLists from "../components/QuoteLists";

export default function QuoteRequests() {
    
    return (
        <>
            <div className="quotes-requests-container">
                <QuoteLists />
                <QuoteDetails />
            </div>
        </>
    );
}
