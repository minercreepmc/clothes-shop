const CategoryModel = require('./category.model');

async function getCategories() {
  return CategoryModel.find();
}

async function getCategory(filters) {
  return CategoryModel.findOne(filters);
}

async function getCategoryWithSubCategories(filters) {
  return CategoryModel.findOne(filters).populate('subcategories');
}

async function createCategory(category) {
  return CategoryModel.create(category);
}

async function updateCategory({ filters, category }) {
  const { slug } = filters;
  return CategoryModel.findOneAndUpdate(
    { slug },
    { $set: category },
    { new: true, runValidators: true },
  );
}

async function deleteCategory(filters) {
  const { slug } = filters;
  return CategoryModel.findOneAndDelete({ slug });
}

module.exports = {
  getCategories,
  getCategory,
  getCategoryWithSubCategories,
  createCategory,
  updateCategory,
  deleteCategory,
};
