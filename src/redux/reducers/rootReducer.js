import { combineReducers } from 'redux';
import { contactsReducer } from './contactsReducer';
import { toastReducer } from './toastReducer';
import { userReducer } from './userReducer';

const rootReducer = combineReducers({
  userReducer,
  contactsReducer,
  toastReducer,
})

export default rootReducer;
