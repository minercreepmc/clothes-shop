const slugify = require('slugify');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const ProductRepo = require('../data-access/repositories/product.repository');
const { prettierErrors } = require('#shares/utils/mongo/mongo.utils');

async function getAllProducts() {
  return ProductRepo.getProducts();
}

async function getProductsByQuery({ query }) {
  const DEFAULT_PAGE = 1;
  const DEFAULT_LIMIT = 10;
  const DEFAULT_SORT = { updatedAt: -1 };

  const page = query.page || DEFAULT_PAGE;
  const limit = query.limit || DEFAULT_LIMIT;
  const sort = DEFAULT_SORT;

  const skip = (page - 1) * limit;

  if (query.descriptionTruncate) {
    const products = await ProductRepo.getProducts({ limit, skip, sort });
    products.forEach((product) => {
      product.description = product.description
        .slice(0, +query.descriptionTruncate)
        .concat('...');
    });

    return products;
  }

  return ProductRepo.getProducts({ limit, skip, sort });
}

async function getProduct(data) {
  const { params } = data;

  const filters = {
    slug: params.slug,
  };

  return ProductRepo.getProduct(filters);
}

async function getProductByIdOrSlug({ params }) {
  const { param } = params;

  const filters = {};

  if (ObjectId.isValid(param)) {
    filters._id = param;
  } else {
    filters.slug = param;
  }

  return ProductRepo.getProduct(filters);
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
    color: body.color,
    subCategoriesId: body.subCategoriesId.map((subCategoryId) => ({
      _id: ObjectId(subCategoryId),
    })),
  };

  try {
    return await ProductRepo.createProduct(product);
  } catch (errors) {
    throw prettierErrors(errors);
  }
}

async function updateProduct({ body, params }) {
  const product = {
    ...body,
    slug: slugify(body.title),
    price: +body.price,
    quantity: +body.quantity,
  };

  const filters = {
    slug: params.slug,
  };

  try {
    return await ProductRepo.updateProduct({ filters, product });
  } catch (errors) {
    throw prettierErrors(errors);
  }
}

async function deleteProduct(data) {
  const { params } = data;

  const filters = {
    slug: params.slug,
  };

  return ProductRepo.deleteProduct(filters);
}

module.exports = {
  getAllProducts,
  getProduct,
  getProductByIdOrSlug,
  getProductsByQuery,
  createProduct,
  updateProduct,
  deleteProduct,
};
