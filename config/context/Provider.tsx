import React, { createContext, useReducer } from 'react';

export const GlobalContext = createContext({});

interface IProps {
    children: React.ReactNode;
}

export const GlobalProvider: React.FC<IProps> = ({ children }) => {
    return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
};
