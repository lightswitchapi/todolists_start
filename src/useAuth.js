// based on https://usehooks.com/useAuth/

import React, { useState, useContext, createContext } from "react";

const authContext = createContext();

// Provider component
export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
  }


// Hook for child components to get the auth object
export const useAuth = () => {
    return useContext(authContext);
  };

function useProvideAuth() {

    const getToken = () => {
        return JSON.parse(localStorage.getItem('token'));
    };
    
    const [token, setToken] = useState(getToken());

    const saveToken = (token) => {
        localStorage.setItem('token', JSON.stringify(token));
        setToken(token);
    };

    const validateToken = () => {
        let validTo = Date.parse(token?.validTo)
        if (!validTo || validTo <= new Date().getTime())
            return false
    
        return true
    };

    const logout = () => {
        saveToken(null);
      }

    return {
        token,
        validateToken,
        saveToken,
        logout
      }
  }
