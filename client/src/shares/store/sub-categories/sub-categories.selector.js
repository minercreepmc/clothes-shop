import { createSelector } from 'reselect';

const selectSubCategoriesReducer = (state) => state.subCategories;

export const selectSubCategoriesIsLoading = createSelector(
  selectSubCategoriesReducer,
  (subCategories) => subCategories.isLoading,
);
export const selectIsSubCategoryCreating = createSelector(
  selectSubCategoriesReducer,
  (subCategories) => subCategories.isCreating,
);
export const selectIsSubCategoryUpdating = createSelector(
  selectSubCategoriesReducer,
  (subCategories) => subCategories.isUpdating,
);
export const selectIsSubCategoryDeleting = createSelector(
  selectSubCategoriesReducer,
  (subCategories) => subCategories.isDeleting,
);

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
