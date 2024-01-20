import { setLoading } from '../actions/loadingAction';
import { fetchData } from '../../utils/api';
import { getResidential } from '../actions/residentialAction';

export const getResidentialThunk = () => async dispatch => {
  dispatch(setLoading(true));
  const residential = await fetchData('residential').then(response => response);
  dispatch(getResidential(residential));
  dispatch(setLoading(false));
};
