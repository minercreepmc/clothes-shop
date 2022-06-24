const ProductModel = require('./product.model');

async function getProducts({ limit, skip }) {
  return ProductModel.find()
    .populate('categories')
    .populate('subcategories')
    .limit(limit)
    .skip(skip);
}

async function getProduct(filters) {
  const { slug } = filters;
  return ProductModel.find({ slug });
}

async function createProduct(product) {
  return ProductModel.create(product);
}

async function updateProduct({ filters, product }) {
  const { slug } = filters;
  return ProductModel.findOneAndUpdate(
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

  return ProductModel.findOneAndDelete({ slug });
}

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
