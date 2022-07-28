import { Request, Response, NextFunction } from 'express';
import * as ProductUseCase from '../../domain/product.usecase';

export async function httpGetProducts(req: Request, res: Response, next: NextFunction) {

  try {
    const products = await ProductUseCase.getProductsByQuery(req.query);
    return res.status(200).json(products);
  } catch (errors) {
    return next(errors);
  }
}
export async function httpGetProduct(req: Request, res: Response, next: NextFunction) {
  const params = {
    _id: req.params._id,
    slug: req.params.slug,
  }
  try {
    const product = await ProductUseCase.getProduct(params);
    return res.status(200).json(product);
  } catch (errors) {
    return next(errors);
  }
}
export async function httpPostProduct(req: Request, res: Response, next: NextFunction) {
  try {
    const newProduct = await ProductUseCase.createProduct(req.body);
    return res.status(201).json(newProduct);
  } catch (errors) {
    return next(errors);
  }
}
export async function httpPutProduct(req: Request, res: Response, next: NextFunction) {
  try {
    const newProduct = await ProductUseCase.updateProduct(req.params, req.body);
    return res.status(200).json(newProduct);
  } catch (errors) {
    return next(errors);
  }
}
export async function httpDeleteProduct(req: Request, res: Response, next: NextFunction) {
  try {
    const deletedProduct = await ProductUseCase.deleteProduct(req.params);
    return res.status(200).json(deletedProduct);
  } catch (errors) {
    return next(errors);
  }
}

