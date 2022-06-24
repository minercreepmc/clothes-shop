const ProductUseCase = require('../../domain/product.usecase');

async function httpGetProducts(req, res) {
  try {
    const products = await ProductUseCase.getProductsByQuery({
      query: req.query,
    });
    return res.status(200).json(products);
  } catch (errors) {
    console.log(errors);
    return res.status(400).json(errors);
  }
}
async function httpGetProduct(req, res) {
  try {
    const product = await ProductUseCase.getProduct({ params: req.params });
    return res.status(200).json(product);
  } catch (errors) {
    return res.status(400).json(errors);
  }
}
async function httpPostProduct(req, res) {
  try {
    const newProduct = await ProductUseCase.createProduct({ body: req.body });
    return res.status(201).json(newProduct);
  } catch (errors) {
    console.log(errors);
    return res.status(400).json(errors);
  }
}
async function httpPutProduct(req, res) {
  try {
    const newProduct = await ProductUseCase.updateProduct({
      body: req.body,
      params: req.params,
    });
    return res.status(200).json(newProduct);
  } catch (errors) {
    console.log(errors);
    return res.status(400).json(errors);
  }
}
async function httpDeleteProduct(req, res) {
  try {
    const deletedProduct = await ProductUseCase.deleteProduct({
      params: req.params,
    });
    return res.status(200).json(deletedProduct);
  } catch (errors) {
    return res.status(400).json(errors);
  }
}

module.exports = {
  httpGetProducts,
  httpGetProduct,
  httpPostProduct,
  httpPutProduct,
  httpDeleteProduct,
};
