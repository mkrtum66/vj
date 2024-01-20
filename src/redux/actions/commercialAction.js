import { GET_COMMERCIAL } from '../reducers/commercialReducer';

export const getCommercial = data => {
  return {
    type: GET_COMMERCIAL,
    payload: data,
  };
};
