export const GET_RESIDENTIAL = 'GET_RESIDENTIAL';

const initialState = {
  residential: [],
};

export const residentialReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESIDENTIAL:
      return { ...state, residential: action.payload };
    default:
      return state;
  }
};
