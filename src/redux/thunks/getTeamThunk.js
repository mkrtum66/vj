import { setLoading } from '../actions/loadingAction';
import { fetchData } from '../../utils/api';
import { getTeam } from '../actions/teamAction';

export const getTeamThunk = () => async dispatch => {
  dispatch(setLoading(true));
  const allTeam = await fetchData('team').then(response => response);
  dispatch(getTeam(allTeam));
  dispatch(setLoading(false));
};
