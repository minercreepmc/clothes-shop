const CategoriesModel = require('./categories.model');

async function getCategories() {
  return CategoriesModel.find();
}

async function getCategory(filters) {
  return CategoriesModel.findOne({ ...filters });
}

async function createCategory(category) {
  return CategoriesModel.create(category);
}

async function updateCategory({ filters, category }) {
  const { slug } = filters;
  return CategoriesModel.findOneAndUpdate(
    { slug },
    { $set: { ...category } },
    { new: true, runValidators: true },
  );
}

async function deleteCategory(filters) {
  const { slug } = filters;
  return CategoriesModel.findOneAndDelete({ slug });
}

module.exports = {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
