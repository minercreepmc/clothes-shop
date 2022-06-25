import { createSelector } from 'reselect';

const selectCategoriesReducer = (state) => state.categories;

export const selectCategories = createSelector(
  selectCategoriesReducer,
  (categories) => categories.categories,
);

export const selectCategoriesSearchText = createSelector(
  selectCategoriesReducer,
  (categories) => categories.searchText,
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
