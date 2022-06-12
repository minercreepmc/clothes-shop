const CategoriesModel = require('./categories.model');

async function getCategories() {
  return CategoriesModel.find();
}

async function createCategory(category) {
  return CategoriesModel.create(category);
}

async function updateCategory({ filters, category }) {
  const { slug } = filters;
  return CategoriesModel.findOneAndUpdate(
    { slug },
    { $set: { ...category } },
    { new: true },
  );
}

async function deleteCategory(filters) {
  const { slug } = filters;
  return CategoriesModel.findOneAndDelete({ slug });
}

module.exports = {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
};
