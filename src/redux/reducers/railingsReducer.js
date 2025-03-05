export const GET_RAILINGS = 'GET_RAILINGS';

const initialState = {
  railings: [],
};

export const railingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RAILINGS:
      return { ...state, railings: action.payload };
    default:
      return state;
  }
};
