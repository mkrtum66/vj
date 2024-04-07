import { LOGIN_ERROR, LOGIN_START, LOGIN_SUCCESS, LOGOUT } from '../reducers/authReducer';
import { auth } from '../../firebase/config';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const login = (email, password, rememberMe, navigate) => async dispatch => {
  dispatch({ type: LOGIN_START });
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    dispatch({ type: LOGIN_SUCCESS, payload: userCredential.user });
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/admin');
    if (rememberMe) {
      localStorage.setItem('email', email);
    } else {
      localStorage.removeItem('email');
    }
  } catch (error) {
    dispatch({ type: LOGIN_ERROR, payload: error.message });
  }
};

export const logout = navigate => async dispatch => {
  try {
    await signOut(auth);
    dispatch({ type: LOGOUT });
    navigate('/login');
  } catch (error) {
    console.error('Logout error', error);
    // Optionally, handle logout error by dispatching another action
  }
};
