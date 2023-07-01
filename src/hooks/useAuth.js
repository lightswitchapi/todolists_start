import React, { useState, useContext, createContext } from "react";

const authContext = createContext();

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  
  const [token, setToken] = useState(null);

  const validateToken = () => {
    let validTo = Date.parse(token?.validTo);
    return (!validTo || validTo <= new Date().getTime()) ? false : true;
  };

  const logout = () => {
    setToken(null);
  };

  return {
    token,
    setToken,
    validateToken,
    logout,
  };
}
