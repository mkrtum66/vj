import { GET_RAILINGS } from '../reducers/railingsReducer';

export const getRailings = data => {
  return {
    type: GET_RAILINGS,
    payload: data,
  };
};
