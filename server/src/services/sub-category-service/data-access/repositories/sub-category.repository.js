const SubCategoryModel = require('./sub-category.model');

async function getSubCategories() {
  return SubCategoryModel.find();
}

async function getSubCategory(filters) {
  return SubCategoryModel.findOne({ ...filters });
}

async function createSubCategory(category) {
  return SubCategoryModel.create(category);
}

async function updateSubCategory({ filters, category }) {
  const { slug } = filters;
  return SubCategoryModel.findOneAndUpdate(
    { slug },
    { $set: { ...category } },
    { new: true, runValidators: true },
  );
}

async function deleteSubCategory(filters) {
  const { slug } = filters;
  return SubCategoryModel.findOneAndDelete({ slug });
}

module.exports = {
  getSubCategories,
  getSubCategory,
  createSubCategory,
  updateSubCategory,
  deleteSubCategory,
};
