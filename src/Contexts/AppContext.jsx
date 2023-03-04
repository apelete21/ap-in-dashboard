import React, { createContext, useState } from 'react'

export const AppContext = createContext()

export const AppContextProvider = ({ children }) => {

    const [login, setLogin] = useState(true)

    return (
        <AppContext.Provider
            value={{
                login
            }}
        >
            {children}
        </AppContext.Provider>
    )
}