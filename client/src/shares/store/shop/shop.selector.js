export const selectCategories = (state) => state.shop.categories;

export const selectSearchedCategories = (state) => {
  const categories = state.shop.categories;
  const searchText = state.shop.categoriesSearchText;

  return categories.filter(
    (category) =>
      category.name.toLowerCase().includes(searchText.toLowerCase()) ||
      searchText.toLowerCase().includes(category.name.toLowerCase()),
  );
};

export const selectSubCategories = (state) => state.shop.subCategories;

export const selectSearchedSubCategories = (state) => {
  const subCategories = state.shop.subCategories;
  const searchText = state.shop.subCategoriesSearchText;

  return subCategories.filter(
    (category) =>
      category.name.toLowerCase().includes(searchText.toLowerCase()) ||
      searchText.toLowerCase().includes(category.name.toLowerCase()),
  );
};

export const selectProducts = (state) => state.shop.products;
