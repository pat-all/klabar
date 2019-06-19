import { combineReducers } from 'redux';

import players from './playersReducer';
import gameNotes from './gameNotesReducer';
import gameOptions from './gameOptionsReducer';

const rootReducer = combineReducers({players, gameNotes, gameOptions});
  
export default rootReducer;