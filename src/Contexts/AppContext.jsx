import React, { createContext, useEffect, useState } from "react";
import { login } from "../requests/login";

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
    // user logged in or not state
    const [isUserLoggedIn, setisUserLoggedIn] = useState(false);

    // login user data states
    const [user, setUser] = useState({});
    // const [currentUser, setCurrentUser] = useState({});

    // login errors messages
    const [loginError, setLoginError] = useState("");

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
        console.log(response);
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
        const currentUser = localStorage.getItem("user");
        if (currentUser) {
            setUser(JSON.parse(currentUser));
            setisUserLoggedIn(true);
        }
    }, []);

    return (
        <AppContext.Provider
            value={{
                user,
                UserLogin,
                isUserLoggedIn,
                loginError,
                UserLogOut,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
