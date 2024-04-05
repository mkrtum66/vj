import { LOGIN_ERROR, LOGIN_START, LOGIN_SUCCESS } from '../reducers/authReducer';

export const login = (username, password, rememberMe, navigate) => {
  return dispatch => {
    dispatch({ type: LOGIN_START });
    // Simulate an API call
    setTimeout(() => {
      if (username === 'admin' && password === 'password') {
        dispatch({ type: LOGIN_SUCCESS });
        localStorage.setItem('isLoggedIn', 'true');
        navigate('/admin');
        // Save username to localStorage if "Remember Me" is checked
        if (rememberMe) {
          localStorage.setItem('username', username);
        } else {
          localStorage.removeItem('username');
        }
      } else {
        dispatch({ type: LOGIN_ERROR, payload: 'Invalid credentials' });
      }
    }, 1000);
  };
};
