const ProductsRepo = require('./products.repository');
const slugify = require('slugify');

async function getAllProducts() {
  return ProductsRepo.getProducts();
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
    price: body.price,
    quantity: body.quantity,
    sold: body.sold,
    brand: body.brand,
    shipping: body.shipping,
    categoryId: body.categoryId,
    subCategoriesId: body.subCategoriesId,
  };

  return ProductsRepo.createProduct(product);
}

async function updateProduct(data) {
  const { body, params } = data;

  const product = {
    title: body.title,
    slug: slugify(body.title),
    description: body.description,
    price: body.price,
    quantity: body.quantity,
    brand: body.brand,
    shipping: body.shipping,
    // categoryId: body.categoryId,
    // subCategoriesId: body.subCategoriesId,
  };

  const filters = {
    slug: params.slug,
  };

  return ProductsRepo.updateProduct({ filters, product });
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
  createProduct,
  updateProduct,
  deleteProduct,
};
