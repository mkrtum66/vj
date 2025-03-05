import { setLoading } from '../actions/loadingAction';
import { fetchData } from '../../utils/api';
import { getEntranceDoors } from '../actions/entranceDoorsAction';

export const getEntranceDoorsThunk = () => async dispatch => {
  dispatch(setLoading(true));
  const entranceDoors = await fetchData('railings').then(response => response);
  dispatch(getEntranceDoors(entranceDoors));
  dispatch(setLoading(false));
};
