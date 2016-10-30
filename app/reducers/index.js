// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import dialogs from './dialogsReducer'
import scans from './scans'

const rootReducer = combineReducers({
  dialogs,
  scans,
  routing
});

export default rootReducer;
