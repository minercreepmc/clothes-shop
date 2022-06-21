const { prettierErrors } = require('#shares/utils/mongo/mongo.utils');
const slugify = require('slugify');
const url = require('url');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const CategoriesRepo = require('./categories.repository');

async function getAllCategories() {
  return CategoriesRepo.getCategories();
}

async function getCategoryBySlug({ params, query }) {
  const { slug } = params;
  const { subCategories } = query;

  const filters = {
    slug,
  };

  // NOTE: query string return undefined as string
  if (subCategories) {
    return CategoriesRepo.getCategoryWithSubCategories(filters);
  }

  return CategoriesRepo.getCategory(filters);
}

async function getCategoryByIdOrSlug({ params, query }) {
  // TODO: EDit the fkcing name
  const { param } = params;
  const { subCategories } = query;
  const filters = {};

  if (ObjectId.isValid(param)) {
    filters._id = param;
  } else {
    filters.slug = param;
  }

  if (subCategories) {
    return CategoriesRepo.getCategoryWithSubCategories(filters);
  }

  return CategoriesRepo.getCategory(filters);
}

async function createCategory(data) {
  const { name } = data;

  const category = {
    name,
    slug: slugify(name),
  };

  try {
    return await CategoriesRepo.createCategory(category);
  } catch (errors) {
    throw prettierErrors(errors);
  }
}

async function updateCategory(data) {
  const { body, params } = data;

  const category = {
    name: body.name,
    slug: slugify(body.name),
  };

  const filters = { slug: params.slug };
  return CategoriesRepo.updateCategory({ filters, category });
}

async function deleteCategory(data) {
  const { params } = data;

  const filters = { slug: params.slug };

  return CategoriesRepo.deleteCategory(filters);
}

module.exports = {
  getAllCategories,
  getCategoryBySlug,
  getCategoryByIdOrSlug,
  createCategory,
  updateCategory,
  deleteCategory,
};
