import QuoteDetails from "../components/quotes/QuoteDetails";
import QuoteLists from "../components/quotes/QuoteLists";

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
