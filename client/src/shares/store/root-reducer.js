import { combineReducers } from 'redux';

import { userReducer } from './user/user.reducer';
import { dashboardReducer } from './dashboard/dashboard.reducer';
import { shopReducer } from './shop/shop.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  dashboard: dashboardReducer,
  shop: shopReducer,
});
