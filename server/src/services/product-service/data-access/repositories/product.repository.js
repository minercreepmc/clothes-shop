const ProductModel = require('./product.model');

async function getProducts({ limit, skip, sort, priceFrom }) {
  return ProductModel.find({ price: { $gte: priceFrom } })
    .limit(limit)
    .skip(skip)
    .sort(sort);
}

async function getProductsWithCategory({ limit, skip, sort }) {
  return ProductModel.find()
    .populate('categories')
    .limit(limit)
    .skip(skip)
    .limit(limit)
    .sort(sort);
}

async function getProductsByCategory({ limit, skip, sort, categoryId }) {
  return ProductModel.find({ categoryId }).limit(limit).skip(skip).sort(sort);
}

async function getProductsBySubCategory({ limit, skip, sort, subCategoryId }) {
  return ProductModel.find({ subCategoriesId: { $in: subCategoryId } })
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
  getProductsWithCategory,
  getProduct,
  getProductsByCategory,
  getProductsBySubCategory,
  createProduct,
  updateProduct,
  deleteProduct,
};
