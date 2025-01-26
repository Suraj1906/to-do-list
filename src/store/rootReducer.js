import { combineReducers } from 'redux';
import taskReducer from './taskReducer';
import authReducer from './authReducer';
import weatherReducer from './weatherReducer';

const rootReducer = combineReducers({
  task: taskReducer,
  auth: authReducer,
  weather: weatherReducer,
});

export default rootReducer;
