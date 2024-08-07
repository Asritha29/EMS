import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
//   const [admin, setAdmin] = useState(null);

  const login = (userData) => {
    // login logic ( API call)
    setUser(userData);
    // setAdmin(adminData);
  };

  const logout = () => {
    // Implement logout logic here
    setUser(null);

  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);