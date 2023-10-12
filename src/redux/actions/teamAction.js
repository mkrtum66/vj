import { GET_TEAM } from '../reducers/teamReducer';

export const getTeam = data => {
  return {
    type: GET_TEAM,
    payload: data,
  };
};
