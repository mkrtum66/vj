import { GET_SHOWERS } from '../reducers/showersReducer';

export const getShowers = data => {
  return {
    type: GET_SHOWERS,
    payload: data,
  };
};
