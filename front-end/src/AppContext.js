import React, { createContext, useContext, useState } from 'react';
const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);
export const AppProvider = ({ children }) => {
    const [arrData, setArrData] = useState([]);
    return (
        <AppContext.Provider value={{ arrData, setArrData }}>
          {children}
        </AppContext.Provider>
      );
}  