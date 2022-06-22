import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectCategories = createSelector(
  selectShop,
  (shop) => shop.categories,
);

export const selectCategoriesSearchText = createSelector(
  selectShop,
  (shop) => shop.categoriesSearchText,
);

export const selectSearchedCategories = createSelector(
  [selectCategories, selectCategoriesSearchText],
  (categories, searchText) => {
    return categories.filter(
      (category) =>
        category.name.toLowerCase().includes(searchText.toLowerCase()) ||
        searchText.toLowerCase().includes(category.name.toLowerCase()),
    );
  },
);

export const selectSubCategories = createSelector(
  selectShop,
  (shop) => shop.subCategories,
);

export const selectSubCategoriesSearchText = createSelector(
  selectShop,
  (shop) => shop.subCategoriesSearchText,
);

export const selectSearchedSubCategories = createSelector(
  [selectSubCategories, selectSubCategoriesSearchText],
  (subCategories, searchText) => {
    return subCategories.filter(
      (category) =>
        category.name.toLowerCase().includes(searchText.toLowerCase()) ||
        searchText.toLowerCase().includes(category.name.toLowerCase()),
    );
  },
);

export const selectProducts = createSelector(
  selectShop,
  (shop) => shop.products,
);
