import { createSelector } from 'reselect';

const selectProductsReducer = (state) => state.products;

export const selecIsProductLoading = createSelector(
  selectProductsReducer,
  (products) => products.isLoading,
);
export const selectIsProductCreating = createSelector(
  selectProductsReducer,
  (products) => products.isCreating,
);
export const selectIsProductUpdating = createSelector(
  selectProductsReducer,
  (products) => products.isUpdating,
);
export const selectIsProductDeleting = createSelector(
  selectProductsReducer,
  (products) => products.isDeleting,
);

export const selectProducts = createSelector(
  selectProductsReducer,
  (productsSlice) => productsSlice.products,
);
