import { setLoading } from '../actions/loadingAction';
import { fetchData } from '../../utils/api';
import { getCommercial } from '../actions/commercialAction';

export const getCommercialThunk = () => async dispatch => {
  dispatch(setLoading(true));
  const commercial = await fetchData('commercial').then(response => response);
  dispatch(getCommercial(commercial));
  dispatch(setLoading(false));
};
