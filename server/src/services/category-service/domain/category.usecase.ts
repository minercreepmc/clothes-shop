import slugify from 'slugify';
import url from 'url';
import mongoose from 'mongoose';
const ObjectId = mongoose.Types.ObjectId;

// import { prettierErrors } from 'shares/utils/mongo';

import * as CategoryRepo from 'services/category-service/data-access/repositories/category.repository';
import { ICategory, ICategoryDocument, ICategoryFilter, ICategoryQuery } from 'services/category-service/data-access/repositories/category.types';


/**
 * Get all categories
 *
 * @async
 * @returns {Promise<ICategoryDocument[]>} Return array of category documents
 */
export async function getAllCategories(): Promise<ICategoryDocument[]> {
  return CategoryRepo.getCategories();
}


/**
 * Return one category base on the filter has been given
 *
 * @async
 * @param {ICategoryFilter} filter - Get category by given property (_id|slug)
 * @param {ICategoryQuery} query - Query out the result
 * @returns {Promise<ICategoryDocument | null>} Return appropriate category
 */
export async function getCategory(filter: ICategoryFilter, query: ICategoryQuery): Promise<ICategoryDocument | null> {
  const { subCategories, products } = query;

  if (subCategories) {
    return CategoryRepo.getCategoryWithSubCategories(filter);
  }

  if (products) {
    return CategoryRepo.getCategoryWithProducts(filter);
  }

  return CategoryRepo.getCategory(filter);
}


/**
 * Create category by given name
 *
 * @async
 * @param {string} name 
 * @throws {[TODO:name]} - [TODO:description]
 * @returns {Promise<ICategoryDocument | null>} Return new category 
 */
export async function createCategoryByName(name: string): Promise<ICategoryDocument | null> {

  const category = {
    name,
    slug: slugify(name),
  };

  try {
    return await CategoryRepo.createCategory(category);
  } catch (errors) {
    throw prettierErrors(errors);
  }
}

/**
 * Update data for a category by filter (_id|slug) 
 *
 * @async
 * @param {ICategoryFilter} filter - Get category by given property (_id|slug)
 * @param {ICategory} data - Category data to update
 * @returns {Promise<ICategoryDocument | null>} Return updated category
 */
export async function updateCategory(filter: ICategoryFilter, data: ICategory): Promise<ICategoryDocument | null> {
  const category = {
    name: data.name,
    slug: slugify(data.name),
  };

  return CategoryRepo.updateCategory(filter, category);
}


/**
 * Delete a category by given filter (_id|slug)
 *
 * @async
 * @param {ICategoryFilter} filter - Get category by given property (_id|slug)
 * @returns {Promise<ICategoryDocument | null>} Return deleted category
 */
export async function deleteCategory(filter: ICategoryFilter): Promise<ICategoryDocument | null> {
  return CategoryRepo.deleteCategory(filter);
}

