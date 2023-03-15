import React, { createContext, useEffect, useState } from "react";
import { AuthUser, login } from "../requests/login";
import { getQuotes } from "../requests/quotes";

/**
|--------------------------------------------------
| App Context
|--------------------------------------------------
*/
export const AppContext = createContext();

/**
|--------------------------------------------------
| App Context Provider 
|--------------------------------------------------
*/
export const AppContextProvider = ({ children }) => {
    const [isDataLoading, setIsDataLoading] = useState(true);
    // user logged in or not state
    const [isUserLoggedIn, setisUserLoggedIn] = useState(false);
    const [userLoadingState, setUserLoadingState] = useState(true);

    // login user data states
    const [user, setUser] = useState({});

    // login errors messages
    const [loginError, setLoginError] = useState("");

    // constant variable to set the selected item
    // on quote request route
    const [quoteSelected, setQuoteSelected] = useState("");

    // constant to store the requested quotes
    const [quotesRequested, setQuotesRequested] = useState(null);

    /**
  |--------------------------------------------------
  | On demand user login function
  |--------------------------------------------------
  */
    const UserLogin = async ({ username, password }) => {
        const response = await login({ username, password });
        if (response?.ok) {
            setUser({ ...response.data });
            localStorage.setItem("user", JSON.stringify(response.data));
            setisUserLoggedIn(true);
        } else {
            setisUserLoggedIn(false);
            setLoginError(response.data);
        }
    };

    /**
  |--------------------------------------------------
  | On demand user login function
  |--------------------------------------------------
  */
    const UserLogOut = () => {
        setisUserLoggedIn(false);
        localStorage.removeItem("user");
    };

    /**
  |--------------------------------------------------
  | Controlling if user already connected
  |--------------------------------------------------
  */
    useEffect(() => {
        const checking = async () => {
            if (userLoadingState) {
                const currentUser = localStorage.getItem("user");
                if (currentUser) {
                    setUser(JSON.parse(currentUser));
                    const res = AuthUser(currentUser.token);
                    if (res.ok) {
                        return setisUserLoggedIn(true);
                    } else {
                        localStorage.removeItem("user");
                    }
                }
                setUserLoadingState(false);
                return;
            }
        };
        checking();
    }, [userLoadingState]);

    /**
    |--------------------------------------------------
    | get quotes every time one's deleted, or the contents is updated
    |--------------------------------------------------
    */
    useEffect(() => {
        const request = async () => {
            if (isDataLoading) {
                const data = await getQuotes();
                setQuotesRequested(data);
                setIsDataLoading(false);
            }
        };
        request();
    }, [quotesRequested, isDataLoading]);

    /**
    |--------------------------------------------------
    | Function to change item
    |--------------------------------------------------
    */
    function ChangeItem(item) {
        setQuoteSelected(item);
    }

    return (
        <AppContext.Provider
            value={{
                user,
                UserLogin,
                isUserLoggedIn,
                loginError,
                UserLogOut,
                setQuoteSelected,
                quoteSelected,
                setQuotesRequested,
                quotesRequested,
                ChangeItem,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
