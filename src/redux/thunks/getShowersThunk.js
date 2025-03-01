import { setLoading } from '../actions/loadingAction';
import { fetchData } from '../../utils/api';
import { getShowers } from '../actions/showerAction';

export const getShowersThunk = () => async dispatch => {
  dispatch(setLoading(true));
  const showers = await fetchData('showers').then(response => response);
  dispatch(getShowers(showers));
  dispatch(setLoading(false));
};
