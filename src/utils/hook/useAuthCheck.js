import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Dummy authentication check function
const isAuthenticated = () => {
  // Your logic here, for example, checking local storage or context
  return localStorage.getItem('isLoggedIn') === 'true';
};

export const useAuthCheck = (redirectPath = '/') => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) {
      navigate(redirectPath);
    }
  }, [navigate, redirectPath]);
};
