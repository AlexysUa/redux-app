import counterReducer from './counter';
import loggedReducer from './isLogged';
import { combineReducers } from 'redux';

const allReducer = combineReducers({
  myCounter: counterReducer,
  isLogged: loggedReducer
})

export default allReducer;