import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { USER_Type } from './role'; // Ensure the path is correct

const UserElement = ({ children }) => {
  const navigate = useNavigate();
  const currentUserRole = USER_Type.User; // Adjust this for testing

  useEffect(() => {
    // Logic to handle different user types
    if (![USER_Type.User, USER_Type.Admin, USER_Type.HR, USER_Type.Manager].includes(currentUserRole)) {
      navigate('/login');
    }
  }, [currentUserRole, navigate]);

  // Render the children only if the user role is allowed
  if ([USER_Type.Admin, USER_Type.HR].includes(currentUserRole)) {
    return <div>{children}</div>;
  } else {
    return null;
  }
};

export default UserElement;

