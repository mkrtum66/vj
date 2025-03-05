export const GET_SFDOORS = 'GET_SFDOORS';

const initialState = {
  sfDoors: [],
};

export const sfDoorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SFDOORS:
      return { ...state, sfDoors: action.payload };
    default:
      return state;
  }
};
