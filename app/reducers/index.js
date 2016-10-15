// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import dialogs from './dialogsReducer'

const rootReducer = combineReducers({
  dialogs,
  routing
});

export default rootReducer;
