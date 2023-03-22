import React, { createContext, useEffect, useState } from "react";
import { AuthUser, getOneUser, login } from "../requests/login";
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
  const UserLogin = async (loginData) => {
    const response = await login(loginData);
    if (response?.ok) {
      setUser({ ...response.data });
      localStorage.setItem(
        "user",
        JSON.stringify({ token: response.data.token, id: response.data._id })
      );
      setisUserLoggedIn(true);
    } else {
      setisUserLoggedIn(false);
      setLoginError(response.data.message);
    }
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

  /**
  |--------------------------------------------------
  | User Authentication control method
  |--------------------------------------------------
  */
  useEffect(() => {
    const checking = async () => {
      if (userLoadingState) {
        const currentUser = await JSON.parse(localStorage.getItem("user"));
        if (!currentUser) {
          return setUserLoadingState(false);
        }
        const res = await AuthUser(currentUser.token, currentUser.id);
        if (res?.ok) {
          const newUser = await getOneUser(res.id);
          setUser(newUser);
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
    request();
  }, [isDataLoading]);

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
        UserLogin,
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
        userLoadingState
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
