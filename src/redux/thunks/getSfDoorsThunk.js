import { setLoading } from '../actions/loadingAction';
import { fetchData } from '../../utils/api';
import { getSfDoors } from '../actions/sfDoorsAction';

export const getSfDoorsThunk = () => async dispatch => {
  dispatch(setLoading(true));
  const sfDoors = await fetchData('sliding-folding-doors').then(response => response);
  dispatch(getSfDoors(sfDoors));
  dispatch(setLoading(false));
};
