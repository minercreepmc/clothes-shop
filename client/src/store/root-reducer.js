import { combineReducers } from 'redux';

import { userReducer } from './user/user.reducer';
import { modalReducer } from './modal/modal.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  modal: modalReducer,
});
