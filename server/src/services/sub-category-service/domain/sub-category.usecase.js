const { prettierErrors } = require('#shares/utils/mongo/mongo.utils');
const slugify = require('slugify');

const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const SubCategoryRepo = require('../data-access/repositories/sub-category.repository');

async function getAllSubCategories() {
  return SubCategoryRepo.getSubCategories();
}

async function getSubCategoriesByCategoryId(data) {
  const { body } = data;

  const filters = { categoryId: body.categoryId };

  return SubCategoryRepo.getSubCategories({ filters });
}

async function getSubCategoryBySlug(data) {
  const { params } = data;

  const filters = {
    slug: params.slug,
  };

  return SubCategoryRepo.getSubCategory(filters);
}

async function createSubCategory(data) {
  const { name, categoryId } = data;

  const category = {
    name,
    slug: slugify(name),
    categoryId: ObjectId(categoryId),
  };

  try {
    return await SubCategoryRepo.createSubCategory(category);
  } catch (errors) {
    throw prettierErrors(errors);
  }
}

async function updateSubCategory({ body, params }) {
  const { name, categoryId } = body;
  const { slug } = params;

  const category = {
    name,
    slug: slugify(name),
    categoryId: ObjectId(categoryId),
  };

  const filters = { slug };
  try {
    return await SubCategoryRepo.updateSubCategory({ filters, category });
  } catch (errors) {
    throw prettierErrors(errors);
  }
}

async function deleteSubCategory(data) {
  const { params } = data;

  const filters = { slug: params.slug };

  return SubCategoryRepo.deleteSubCategory(filters);
}

module.exports = {
  getAllSubCategories,
  getSubCategoriesByCategoryId,
  getSubCategoryBySlug,
  createSubCategory,
  updateSubCategory,
  deleteSubCategory,
};
