import { createSelector } from 'reselect';

export const selectShop = (state) => state.shop;

export const selectShowColumn = createSelector(
  selectShop,
  (shop) => shop.showColumn,
);
