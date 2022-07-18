const slugify = require('slugify');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const ProductRepo = require('../data-access/repositories/product.repository');
const { prettierErrors } = require('#shares/utils/mongo/mongo.utils');
const ApiError = require('#shares/utils/errors/api-error.utils');
const DalError = require('#shares/utils/errors/dal-error.utils');

async function getAllProducts() {
  return ProductRepo.getProducts();
}

async function getProductsByQuery({ query }) {
  const DEFAULT_PAGE = 1;
  const DEFAULT_LIMIT = 10;
  const DEFAULT_SORT = { updatedAt: -1 };

  const {
    page = DEFAULT_PAGE,
    limit = DEFAULT_LIMIT,
    descriptionTruncate,
    categoryId,
    subCategoryId,
    priceFrom = 0,
  } = query;

  const sort = DEFAULT_SORT;

  const skip = (page - 1) * limit;

  if (descriptionTruncate) {
    const products = await ProductRepo.getProducts({ limit, skip, sort });
    products.forEach((product) => {
      product.description = product.description
        .slice(0, +query.descriptionTruncate)
        .concat('...');
    });

    return products;
  }

  const filters = { skip, limit, sort, priceFrom: +priceFrom };
  console.log(filters);

  // if (query.category && query.subCategories) {
  //   return ProductRepo.getProductsWithCategoryAndSubcategories({
  //     limit,
  //     skip,
  //     sort,
  //   });
  // }

  if (categoryId) {
    return ProductRepo.getProductsByCategory({
      ...filters,
      categoryId: query.categoryId,
    });
  }

  if (subCategoryId) {
    return ProductRepo.getProductsBySubCategory({
      ...filters,
      subCategoryId: query.subCategoryId,
    });
  }

  return ProductRepo.getProducts(filters);
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

  const product = await ProductRepo.getProduct(filters);
  if (!product) {
    throw ApiError.notFound('Product did not exist');
  }

  return product;
}

async function createProduct(data) {
  const { body } = data;

  const product = {
    ...body,
    slug: slugify(body.title),
    price: +body.price,
    quantity: +body.quantity,
    discount: +body.discount,
    categoryId: ObjectId(body.categoryId),
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
    discount: +body.discount,
  };

  const filters = {
    slug: params.slug,
  };

  try {
    return await ProductRepo.updateProduct({ filters, product });
  } catch (errors) {
    throw DalError.unprocessableEntity(errors);
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
