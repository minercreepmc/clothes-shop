const ProductsModel = require('./products.model');

async function getProducts({ limit, skip }) {
  return ProductsModel.find()
    .populate('categories')
    .populate('subcategories')
    .limit(limit)
    .skip(skip);
}

async function getProduct(filters) {
  const { slug } = filters;
  return ProductsModel.find({ slug });
}

async function createProduct(product) {
  return ProductsModel.create(product);
}

async function updateProduct({ filters, product }) {
  const { slug } = filters;
  return ProductsModel.findOneAndUpdate(
    { slug },
    { $set: product },
    {
      new: true,
      runValidators: true,
    },
  );
}

async function deleteProduct(filters) {
  const { slug } = filters;

  return ProductsModel.findOneAndDelete({ slug });
}

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
