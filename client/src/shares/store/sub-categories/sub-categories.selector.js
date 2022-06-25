import { createSelector } from 'reselect';

const selectSubCategoriesReducer = (state) => state.subCategories;

export const selectSubCategories = createSelector(
  selectSubCategoriesReducer,
  (subCategoriesSlice) => subCategoriesSlice.subCategories,
);

export const selectSubCategoriesSearchText = createSelector(
  selectSubCategoriesReducer,
  (subCategoriesSlice) => subCategoriesSlice.searchText,
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
