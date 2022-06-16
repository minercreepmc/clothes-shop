const ProductsModel = require('./products.model');

async function getProducts() {
  return ProductsModel.find();
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
