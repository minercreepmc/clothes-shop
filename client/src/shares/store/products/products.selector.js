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

export const selectHomeProducts = createSelector(selectProducts, (products) =>
  products.slice(0, 5),
);

export const selectNewestProduct = createSelector(
  selectProducts,
  (products) => products[0],
);

// Search Text
export const selectProductsSearchText = createSelector(
  selectProductsReducer,
  (products) => products.searchText,
);

export const selectSearchedTextProducts = createSelector(
  [selectProducts, selectProductsSearchText],
  (products, searchText) => {
    return products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchText.toLowerCase()) ||
        searchText.toLowerCase().includes(product.title.toLowerCase()),
    );
  },
);

// Search Price
export const selectProductsSearchPrice = createSelector(
  selectProductsReducer,
  (products) => products.searchPrice,
);

export const selectSearchedPriceProducts = createSelector(
  [selectProducts, selectProductsSearchPrice],
  (products, searchPrice) => {
    return products.filter((product) => product.price >= searchPrice);
  },
);

export const selectSearchedProducts = createSelector(
  [selectSearchedTextProducts, selectSearchedPriceProducts],
  (products1, products2) =>
    products1.filter((product) => products2.includes(product)),
);
