export const GET_TEAM = 'GET_TEAM';

const initialState = {
  team: [],
};

export const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TEAM:
      return { ...state, team: action.payload };
    default:
      return state;
  }
};
