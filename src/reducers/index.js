import {combineReducers} from 'redux';
import auth from './todos';

const rootReducer = combineReducers({
  auth,
});

export default rootReducer;
