import slugify from 'slugify';
import { prettierErrors, toObjectId } from 'shares/utils/mongo';

import * as SubCategoryRepo from '../data-access/repositories/sub-category.repository';
import { ISubCategory, ISubCategoryDocument, ISubCategoryParams, ISubCategoryQuery } from '../data-access/repositories/sub-category.types'; import { MongooseError, ObjectId } from 'shares/utils/mongo/mongo.types';

/**
 * Get sub categories by parameter
 *
 * @async
 * @param {ISubCategoryParams} params - Params lile _id|slug
 * @returns {Promise<ISubCategoryDocument[] | null>} Return array of sub categories
 */
export async function getSubCategoriesByParams(params: ISubCategoryParams): Promise<ISubCategoryDocument[] | null> {
  return SubCategoryRepo.getSubCategories(params);
}

/**
 * Get sub categories by query
 *
 * @async
 * @param {ISubCategoryQuery} query - Query like categoriId
 * @returns {Promise<ISubCategoryDocument[] | null>} Return array of sub categories 
 */
export async function getSubCategoriesByQuery(query: ISubCategoryQuery): Promise<ISubCategoryDocument[] | null> {
  return SubCategoryRepo.getSubCategories(query);
}


/**
 * Create sub category 
 *
 * @async
 * @param {ISubCategory} data - Sub category data to create
 * @throws {[TODO:name]} - [TODO:description]
 * @returns {Promise<ISubCategoryDocument[] | null>} Return new sub category
 */
export async function createSubCategory(data: ISubCategory): Promise<ISubCategoryDocument | null> {
  const { name, categoryId } = data;

  const category = {
    name,
    slug: slugify(name),
    categoryId: toObjectId(categoryId),
  };

  try {
    return await SubCategoryRepo.createSubCategory(category);
  } catch (errors) {
    throw prettierErrors(errors as MongooseError);
  }
}

/**
 * Update a sub category
 *
 * @async
 * @param {ISubCategoryParams} params - Sub category parameter 
 * @param {ISubCategory} data - Sub category data to update
 * @throws {[TODO:name]} - [TODO:description]
 * @returns {Promise<ISubCategoryDocument>} Return updated document
 */
export async function updateSubCategory(params: ISubCategoryParams, data: ISubCategory): Promise<ISubCategoryDocument | null> {
  const { name, categoryId } = data;

  const category = {
    name,
    slug: slugify(name),
    categoryId: toObjectId(categoryId),
  };

  try {
    return await SubCategoryRepo.updateSubCategory(params, category);
  } catch (errors) {
    throw prettierErrors(errors as MongooseError);
  }
}


/**
 * Delete a sub category
 *
 * @async
 * @param {ISubCategoryParams} params - Sub category parameter
 * @returns {Promise<ISubCategoryDocument | null>} Return deleted document
 */
export async function deleteSubCategory(params: ISubCategoryParams): Promise<ISubCategoryDocument | null> {
  return SubCategoryRepo.deleteSubCategory(params);
}

