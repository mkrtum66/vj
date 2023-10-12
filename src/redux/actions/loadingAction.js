import { SET_LOADING } from '../reducers/loadingReducer';

export const setLoading = data => {
  return {
    type: SET_LOADING,
    payload: data,
  };
};
