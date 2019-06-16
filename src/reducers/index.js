import { combineReducers } from 'redux';

import players from './playersReducer';
import gameOptions from './gameOptionsReducer';

const rootReducer = combineReducers({players, gameOptions});
  
export default rootReducer;