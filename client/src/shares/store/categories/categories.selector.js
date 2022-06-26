import { createSelector } from 'reselect';

const selectCategoriesReducer = (state) => state.categories;

export const selectIsCategoriesLoading = createSelector(
  selectCategoriesReducer,
  (categories) => categories.isLoading,
);
export const selectIsCategoryCreating = createSelector(
  selectCategoriesReducer,
  (categories) => categories.isCreating,
);
export const selectIsCategoryUpdating = createSelector(
  selectCategoriesReducer,
  (categories) => categories.isUpdating,
);
export const selectIsCategoryDeleting = createSelector(
  selectCategoriesReducer,
  (categories) => categories.isDeleting,
);

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
