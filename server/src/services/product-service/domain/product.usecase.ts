import slugify from 'slugify';
import mongoose from 'mongoose';
const ObjectId = mongoose.Types.ObjectId;

import * as ProductRepo from '../data-access/repositories/product.repository';

import { IProduct, IProductDocument, IProductParams, IProductQueryWithPage, IProductSort } from '../data-access/repositories/product.types';
import { prettierErrors } from 'shares/utils/mongo';
import ApiError from 'shares/utils/errors/api-error.utils';
import DalError from 'shares/utils/errors/dal-error.utils';
import { getSkipFromPageAndLimit } from 'shares/utils/logics/logics.utils';
import { MongooseError } from 'shares/utils/mongo/mongo.types';

/**
 * Get all products
 *
 * @async
 * @returns {Promise<IProductDocument[]>} Array of all products
 */
export async function getAllProducts(): Promise<IProductDocument[]> {
  return ProductRepo.getProducts();
}

/**
 * Get products by query
 *
 * @async
 * @param {IProductQueryWithPage} query - Query out the products
 * @returns {Promise<IProductDocument[] | null>} Array of products
 */
export async function getProductsByQuery(query: any): Promise<IProductDocument[] | null> {
  const {
    page = 1,
    limit = 10,
    priceFrom = 0,
    descriptionTruncate,
    categoryId,
    subCategoryId,
  } = query;
  const DEFAULT_SORT: IProductSort = { updatedAt: -1 };
  const sort = DEFAULT_SORT;

  const skip = getSkipFromPageAndLimit(page, limit);
  const filters = { skip, limit, sort, priceFrom: +priceFrom };


  if (descriptionTruncate) {
    const products = await ProductRepo.getProducts(filters);
    products.forEach((product) => {
      product.description = product.description
        .slice(0, +descriptionTruncate)
        .concat('...');
    });

    return products;
  }


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

/**
 * Get product by params
 *
 * @async
 * @param {IProductParams} params - Params like (_id|slug)
 * @throws {[TODO:name]} - Throw error if not found
 * @returns {Promise<IProductDocument | null>} Array of products
 */
export async function getProduct(params: IProductParams): Promise<IProductDocument | null> {
  const product = await ProductRepo.getProduct(params);
  if (!product) {
    throw ApiError.notFound('Product did not exist');
  }

  return product;
}

/**
 * Create a product 
 *
 * @async
 * @param {IProduct} product - Product data to create
 * @throws {[TODO:name]} - Throw error if fail to create
 * @returns {Promise<IProductDocument | null>} - New product
 */
export async function createProduct(product: IProduct): Promise<IProductDocument | null> {
  const { title, price, quantity, discount = 0, categoryId, subCategoriesId } = product;

  const productFormatedData: IProduct = {
    ...product,
    slug: slugify(title),
    price: +price,
    quantity: +quantity,
    discount: +discount,
    categoryId: new ObjectId(categoryId),
    // Breaking change
    subCategoriesId: subCategoriesId.map((subCategoryId) => ({
      _id: new ObjectId(subCategoryId._id),
    })),
  };

  try {
    return await ProductRepo.createProduct(productFormatedData);
  } catch (errors) {
    throw prettierErrors(errors as MongooseError);
  }
}

/**
 * Update a product
 *
 * @async
 * @param {IProductParams} params - Params like (_id|slug)
 * @param {IProduct} product - Product data
 * @throws {[TODO:name]} - Throw error if fail to update
 * @returns {Promise<IProductDocument | null>} Updated product
 */
export async function updateProduct(params: IProductParams, product: IProduct): Promise<IProductDocument | null> {
  const { title, price, quantity, discount = 0 } = product;

  const productFormatedData = {
    ...product,
    slug: slugify(title),
    price: +price,
    quantity: +quantity,
    discount: +discount,
  };

  try {
    return await ProductRepo.updateProduct(params, productFormatedData);
  } catch (errors) {
    throw DalError.unprocessableEntity(errors as MongooseError);
  }
}

/**
 * Delete a product
 *
 * @async
 * @param {IProductParams} params - Params like (_id|slug)
 * @returns {Promise<IProductDocument | null>} Deleted product
 */
export async function deleteProduct(params: IProductParams): Promise<IProductDocument | null> {
  return ProductRepo.deleteProduct(params);
}
