import { setLoading } from '../actions/loadingAction';
import { fetchData } from '../../utils/api';
import { getRailings } from '../actions/railingsAction';

export const getRailingsThunk = () => async dispatch => {
  dispatch(setLoading(true));
  const railings = await fetchData('railings').then(response => response);
  dispatch(getRailings(railings));
  dispatch(setLoading(false));
};
