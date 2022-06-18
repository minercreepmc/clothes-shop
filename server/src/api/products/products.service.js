const slugify = require('slugify');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const ProductsRepo = require('./products.repository');
const { prettierErrors } = require('#shares/utils/mongo/mongo.utils');

async function getAllProducts() {
  return ProductsRepo.getProducts();
}

async function getProductsByQuery({ query }) {
  const DEFAULT_PAGE = 1;
  const DEFAULT_LIMIT = 10;

  const page = query.page || DEFAULT_PAGE;
  const limit = query.limit || DEFAULT_LIMIT;
  const skip = (page - 1) * limit;

  return ProductsRepo.getProducts({ limit, skip });
}

async function getProduct(data) {
  const { params } = data;

  const filters = {
    slug: params.slug,
  };

  return ProductsRepo.getProduct(filters);
}

async function createProduct(data) {
  const { body } = data;

  const product = {
    title: body.title,
    slug: slugify(body.title),
    description: body.description,
    price: +body.price,
    quantity: +body.quantity,
    brand: body.brand,
    shipping: body.shipping,
    categoryId: ObjectId(body.categoryId),
    images: body.images,
    subCategoriesId: body.subCategoriesId.map((subCategory) => ({
      _id: ObjectId(subCategory.value),
    })),
  };

  try {
    return await ProductsRepo.createProduct(product);
  } catch (errors) {
    throw prettierErrors(errors);
  }
}

async function updateProduct(data) {
  const { body, params } = data;

  const product = {
    title: body.title,
    slug: slugify(body.title),
    description: body.description,
    price: +body.price,
    quantity: +body.quantity,
    brand: body.brand,
    shipping: body.shipping,
    images: body.images,
    categoryId: ObjectId(body.categoryId),
    subCategoriesId: body.subCategoriesId.map((subCategory) => ({
      _id: ObjectId(subCategory.value),
    })),
  };

  const filters = {
    slug: params.slug,
  };

  try {
    return await ProductsRepo.updateProduct({ filters, product });
  } catch (errors) {
    throw prettierErrors(errors);
  }
}

async function deleteProduct(data) {
  const { params } = data;

  const filters = {
    slug: params.slug,
  };

  return ProductsRepo.deleteProduct(filters);
}

module.exports = {
  getAllProducts,
  getProduct,
  getProductsByQuery,
  createProduct,
  updateProduct,
  deleteProduct,
};
