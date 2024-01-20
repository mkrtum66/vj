import { combineReducers } from 'redux';
import { loadingReducer } from './reducers/loadingReducer';
import { teamReducer } from './reducers/teamReducer';
import { residentialReducer } from './reducers/residentialReducer';
import { commercialReducer } from './reducers/commercialReducer';

export const rootReducer = combineReducers({
  loading: loadingReducer,
  team: teamReducer,
  residential: residentialReducer,
  commercial: commercialReducer,
});
