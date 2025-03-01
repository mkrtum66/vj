export const GET_SHOWERS = 'GET_SHOWERS';

const initialState = {
  showers: [],
};

export const showersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SHOWERS:
      return { ...state, showers: action.payload };
    default:
      return state;
  }
};
