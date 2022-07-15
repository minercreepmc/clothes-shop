const ProductUseCase = require('../../domain/product.usecase');

async function httpGetProducts(req, res, next) {
  try {
    const products = await ProductUseCase.getProductsByQuery({
      query: req.query,
    });
    return res.status(200).json(products);
  } catch (errors) {
    return next(errors);
  }
}
async function httpGetProduct(req, res, next) {
  try {
    const product = await ProductUseCase.getProductByIdOrSlug({
      params: req.params,
      next,
    });
    return res.status(200).json(product);
  } catch (errors) {
    return next(errors);
  }
}
async function httpPostProduct(req, res, next) {
  try {
    const newProduct = await ProductUseCase.createProduct({ body: req.body });
    return res.status(201).json(newProduct);
  } catch (errors) {
    return next(errors);
  }
}
async function httpPutProduct(req, res, next) {
  try {
    const newProduct = await ProductUseCase.updateProduct({
      body: req.body,
      params: req.params,
    });
    return res.status(200).json(newProduct);
  } catch (errors) {
    return next(errors);
  }
}
async function httpDeleteProduct(req, res, next) {
  try {
    const deletedProduct = await ProductUseCase.deleteProduct({
      params: req.params,
    });
    return res.status(200).json(deletedProduct);
  } catch (errors) {
    return next(errors);
  }
}

module.exports = {
  httpGetProducts,
  httpGetProduct,
  httpPostProduct,
  httpPutProduct,
  httpDeleteProduct,
};
