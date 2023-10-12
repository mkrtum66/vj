import { combineReducers } from 'redux';
import { loadingReducer } from './reducers/loadingReducer';
import { teamReducer } from './reducers/teamReducer';

export const rootReducer = combineReducers({
  loading: loadingReducer,
  team: teamReducer,
});
