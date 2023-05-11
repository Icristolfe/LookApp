import React, { createContext } from 'react'

export const AppContext = createContext({})

const ContexProvider = ({children}) => {
    return (
        <AppContext.Provider value={{name: "Ícaro"}}>{children}</AppContext.Provider>
    )
}

export default ContexProvider