export const GET_ENTRANCEDOORS = 'GET_ENTRANCEDOORS';

const initialState = {
  entranceDoors: [],
};

export const entranceDoorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ENTRANCEDOORS:
      return { ...state, entranceDoors: action.payload };
    default:
      return state;
  }
};
