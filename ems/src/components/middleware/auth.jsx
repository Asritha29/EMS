// src/middleware/Auth.jsx
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import jwt from 'jsonwebtoken';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwt.decode(token); // Using the imported function
      setUser({ id: decoded.id, role: decoded.role });
    }
  }, []);

  const login = async (username, password) => {
    const res = await axios.post('/login', { username, password });
    const token = res.data.token;
    localStorage.setItem('token', token);
    const decoded = jwt.decode(token); // Using the imported function
    setUser({ id: decoded.id, role: decoded.role });
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
