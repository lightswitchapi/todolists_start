import { useState } from 'react';

export default function useToken() {
    
  const getSavedToken = () => {
    return JSON.parse(localStorage.getItem('token'));
  };

  const saveToken = (token) => {
    localStorage.setItem('token', JSON.stringify(token));
    setToken(token);
  };

  const [token, setToken] = useState(getSavedToken());

  return {
    token,
    saveToken
  }
}