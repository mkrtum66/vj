import { combineReducers } from 'redux';
import { loadingReducer } from './reducers/loadingReducer';
import { teamReducer } from './reducers/teamReducer';
import { residentialReducer } from './reducers/residentialReducer';
import { commercialReducer } from './reducers/commercialReducer';
import authReducer from './reducers/authReducer';
import { showersReducer } from './reducers/showersReducer';
import { railingsReducer } from './reducers/railingsReducer';
import { sfDoorsReducer } from './reducers/sfDoorsReducer';
import { entranceDoorsReducer } from './reducers/entranceDoorsReducer';

export const rootReducer = combineReducers({
  loading: loadingReducer,
  team: teamReducer,
  residential: residentialReducer,
  commercial: commercialReducer,
  showers: showersReducer,
  railings: railingsReducer,
  sfDoors: sfDoorsReducer,
  entranceDoors: entranceDoorsReducer,
  auth: authReducer,
});
