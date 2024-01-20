import { GET_RESIDENTIAL } from '../reducers/residentialReducer';

export const getResidential = data => {
  return {
    type: GET_RESIDENTIAL,
    payload: data,
  };
};
