const SubCategoriesModel = require('./sub-categories.model');

async function getSubCategories() {
  return SubCategoriesModel.find();
}

async function getSubCategory(filters) {
  return SubCategoriesModel.findOne({ ...filters });
}

async function createSubCategory(category) {
  return SubCategoriesModel.create(category);
}

async function updateSubCategory({ filters, category }) {
  const { slug } = filters;
  return SubCategoriesModel.findOneAndUpdate(
    { slug },
    { $set: { ...category } },
    { new: true, runValidators: true },
  );
}

async function deleteSubCategory(filters) {
  const { slug } = filters;
  return SubCategoriesModel.findOneAndDelete({ slug });
}

module.exports = {
  getSubCategories,
  getSubCategory,
  createSubCategory,
  updateSubCategory,
  deleteSubCategory,
};
