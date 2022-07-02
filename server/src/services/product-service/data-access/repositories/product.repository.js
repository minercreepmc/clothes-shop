const ProductModel = require('./product.model');

async function getProducts({ limit, skip, sort }) {
  return ProductModel.find()
    .populate('categories')
    .populate('subcategories')
    .limit(limit)
    .skip(skip)
    .sort(sort);
}

async function getProduct(filters) {
  return ProductModel.findOne(filters);
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
