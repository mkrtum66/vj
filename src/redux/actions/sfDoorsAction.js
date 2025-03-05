import { GET_SFDOORS } from '../reducers/sfDoorsReducer';

export const getSfDoors = data => {
  return {
    type: GET_SFDOORS,
    payload: data,
  };
};
