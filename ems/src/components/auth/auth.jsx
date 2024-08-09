// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';
// import { useAuth } from './authcontext'; 

// const PrivateRoute = ({ element: Element, roles, ...rest }) => {
//   const { user } = useAuth();
  

//   const isAuthenticated = !!user;
//   const hasRole = roles.includes(user?.role);

//   return (
//     <Route
//       {...rest}
//       element={isAuthenticated && hasRole ? <Element /> : <Navigate to="/login" />}
//     />
//   );
// };

// export default PrivateRoute;

import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './authcontext';

const PrivateRoute = ({ element: Element, roles }) => {
  const { user } = useAuth();
  const location = useLocation();

  // Check if user is authenticated and has the correct role
  const isAuthenticated = !!user;
  const hasRole = roles.includes(user?.role);

  if (!isAuthenticated) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" state={{ from: location }} />;
  }

  if (!hasRole) {
    // Redirect to a forbidden page if not authorized
    return <Navigate to="/forbidden" />;
  }

  return <Element />;
};

export default PrivateRoute;


