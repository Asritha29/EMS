import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

function parseJwt(token) {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );

    return JSON.parse(jsonPayload);
  } catch (e) {
    console.error('Failed to parse JWT:', e);
    return {};
  }
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
  
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
        const decoded = parseJwt(token);
        setUser({ role: decoded.role });
      }
    }, []);
  
    const login = (userData) => {
      setUser(userData);
    };
  
    const logout = () => {
      setUser(null);
      localStorage.removeItem('token');
    };
  
    return (
      <AuthContext.Provider value={{ user, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
  };
  

export const useAuth = () => useContext(AuthContext);
