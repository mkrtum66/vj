import { GET_ENTRANCEDOORS } from '../reducers/entranceDoorsReducer';

export const getEntranceDoors = data => {
  return {
    type: GET_ENTRANCEDOORS,
    payload: data,
  };
};
