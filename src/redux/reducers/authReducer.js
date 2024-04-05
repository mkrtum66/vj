export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

const initialState = {
  loading: false,
  error: null,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_START:
      return { ...state, loading: true, error: null };
    case LOGIN_SUCCESS:
      return { ...state, loading: false };
    case LOGIN_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export default authReducer;
