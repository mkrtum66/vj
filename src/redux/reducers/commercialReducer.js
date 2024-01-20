export const GET_COMMERCIAL = 'GET_COMMERCIAL';

const initialState = {
  commercial: [],
};

export const commercialReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMERCIAL:
      return { ...state, commercial: action.payload };
    default:
      return state;
  }
};
