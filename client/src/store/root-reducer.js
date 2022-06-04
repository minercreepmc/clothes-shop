const { combineReducers } = require('redux');

const { userReducer } = require('./user/user.reducer');

export const rootReducer = combineReducers({
  user: userReducer,
});
