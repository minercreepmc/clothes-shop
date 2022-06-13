const { prettierErrors } = require('#shares/utils/mongo/mongo.utils');
const slugify = require('slugify');

const CategoriesRepo = require('./categories.repository');

async function getAllCategories() {
  return CategoriesRepo.getCategories();
}

async function getCategoryBySlug(data) {
  const { params } = data;

  const filters = {
    slug: params.slug,
  };

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
  createCategory,
  updateCategory,
  deleteCategory,
};
