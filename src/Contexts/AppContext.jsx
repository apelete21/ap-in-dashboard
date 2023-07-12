import React, { createContext, useEffect, useState } from "react";
import { loginMethod } from "../requests/login";
import { deleteOneQuote, getQuotes } from "../requests/quotes";

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

  // state storing the response message of the quote to delete
  const [statusMessage, setStatusMessage] = useState("");

  // state to control the application details data
  const [JobApp, setJobApp] = useState(null);

  /**
  |--------------------------------------------------
  | Function to set view & automatic hiding operations status message
  |--------------------------------------------------
  */

  useEffect(() => {
    function status() {
      setTimeout(() => {
        setStatusMessage();
      }, 2000);
    }
    status();
  }, [statusMessage]);

  /**
  |--------------------------------------------------
  | On demand user login function
  |--------------------------------------------------
  */
  const handleUserLogin = async (loginData) => {
    setUserLoadingState(true);
    const { user, token, ok, message } = await loginMethod(loginData);
    if (ok) {
      setUser(user);
      localStorage.setItem("user", token);
      setTimeout(() => {
        setisUserLoggedIn(true);
      }, 500);
    } else {
      setLoginError(message);
    }
    setTimeout(() => {
      setUserLoadingState(false);
    }, 2000);
  };

  /**
  |--------------------------------------------------
  | On demand user login function
  |--------------------------------------------------
  */
  const UserLogOut = () => {
    localStorage.removeItem("user");
    setisUserLoggedIn(false);
    setUserLoadingState(false);
  };
  useEffect(() => {
    /**
    |--------------------------------------------------
    | User Authentication control method
    |--------------------------------------------------
    */
    const checking = async () => {
      if (userLoadingState) {
        const currentUser = localStorage.getItem("user");
        if (!currentUser) {
          return setUserLoadingState(false);
        }
        const { user, ok } = await loginMethod({}, currentUser);
        if (ok) {
          setUser(user);
          setUserLoadingState(false);
          return setisUserLoggedIn(true);
        } else {
          localStorage.removeItem("user");
          return setUserLoadingState(false);
        }
      } else return setUserLoadingState(false);
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
    if (isUserLoggedIn) request();
  }, [isDataLoading, isUserLoggedIn]);

  /**
    |--------------------------------------------------
    | Function to change item
    |--------------------------------------------------
    */
  function ChangeItem(item) {
    setQuoteSelected(item);
  }

  /**
    |--------------------------------------------------
    | Funtion to delete one quote request
    |--------------------------------------------------
    */

  async function deleteQuote(id) {
    const res = await deleteOneQuote(id);
    setStatusMessage(res.message);
    ChangeItem("");
    setIsDataLoading(true);
  }

  return (
    <AppContext.Provider
      value={{
        user,
        handleUserLogin,
        isUserLoggedIn,
        loginError,
        UserLogOut,
        setQuoteSelected,
        quoteSelected,
        setQuotesRequested,
        quotesRequested,
        ChangeItem,
        deleteQuote,
        statusMessage,
        setStatusMessage,
        userLoadingState,
        JobApp,
        setJobApp,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
