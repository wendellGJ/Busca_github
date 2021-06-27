import { combineReducers } from 'redux';
import userReducer from './user';
import starredReducer from './starred';
import reposReducer from './repos';

const rootReducer = combineReducers({
  user: userReducer,
  repos: reposReducer,
  starred: starredReducer,
});

export default rootReducer;
