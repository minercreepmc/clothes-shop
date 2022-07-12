import { combineReducers } from 'redux';

import { userReducer } from './user/user.reducer';
import { dashboardReducer } from './dashboard/dashboard.reducer';
import { categoriesReducer } from './categories/categories.reducer';
import { subCategoriesReducer } from './sub-categories/sub-categories.reducer';
import { productsReducer } from './products/products.reducer';
import { shopReducer } from './shop/shop.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  dashboard: dashboardReducer,
  categories: categoriesReducer,
  subCategories: subCategoriesReducer,
  products: productsReducer,
  shop: shopReducer
});
