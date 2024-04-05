import React from 'react';
import { Navigate } from 'react-router-dom';

const isAuthenticated = () => {
  // Your authentication check logic
  return localStorage.getItem('isLoggedIn') === 'true';
};

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    // Redirect them to the /login page, but save the current location they were trying to go to
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
