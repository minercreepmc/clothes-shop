import { SHOP_ACTION_TYPE } from './shop.type';

import { createAction } from 'shares/utils/reducer/reducer.utils';

import {
  addItemToArray,
  removeItemFromArray,
  updateItemToArray,
} from 'shares/utils/logics/logics.utils';

// Categories
export const addCategoryToCategories = (categoryToAdd, categories) => {
  const categoriesToSet = addItemToArray(categoryToAdd, categories);
  return createAction(SHOP_ACTION_TYPE.SET_CATEGORIES, categoriesToSet);
};

export const removeCategoryFromCategories = (categoryToRemove, categories) => {
  const categoriesToSet = removeItemFromArray(categoryToRemove, categories);
  return createAction(SHOP_ACTION_TYPE.SET_CATEGORIES, categoriesToSet);
};

export const updateCategoryToCategories = (updatedCategory, categories) => {
  const categoriesToSet = updateItemToArray(updatedCategory, categories);

  return createAction(SHOP_ACTION_TYPE.SET_CATEGORIES, categoriesToSet);
};

export const setCategories = (categories) =>
  createAction(SHOP_ACTION_TYPE.SET_CATEGORIES, categories);

export const setCategoriesSearchText = (searchText) =>
  createAction(SHOP_ACTION_TYPE.SET_CATEGORIES_SEARCH_TEXT, searchText);

// Sub Categories
export const addSubCategoryToSubCategories = (
  subCategoryToAdd,
  subCategories,
) => {
  const subCategoriesToSet = addItemToArray(subCategoryToAdd, subCategories);
  return createAction(SHOP_ACTION_TYPE.SET_SUB_CATEGORIES, subCategoriesToSet);
};

export const removeSubCategoryFromSubCategories = (
  subCategoryToRemove,
  subCategories,
) => {
  const subCategoriesToSet = removeItemFromArray(
    subCategoryToRemove,
    subCategories,
  );

  return createAction(SHOP_ACTION_TYPE.SET_SUB_CATEGORIES, subCategoriesToSet);
};

export const updateSubCategoryToSubCategories = (
  updatedSubCategory,
  subCategories,
) => {
  const subCategoriesToSet = updateItemToArray(
    updatedSubCategory,
    subCategories,
  );

  return createAction(SHOP_ACTION_TYPE.SET_SUB_CATEGORIES, subCategoriesToSet);
};

export const setSubCategories = (subCategoriesToSet) =>
  createAction(SHOP_ACTION_TYPE.SET_SUB_CATEGORIES, subCategoriesToSet);

export const setSubCategoriesSearchText = (searchText) =>
  createAction(SHOP_ACTION_TYPE.SET_SUB_CATEGORIES_SEARCH_TEXT, searchText);

// products

export const addProductToProducts = (productToAdd, products) => {
  const productsToSet = addItemToArray(productToAdd, products);
  return createAction(SHOP_ACTION_TYPE.SET_PRODUCTS, productsToSet);
};

export const removeProductFromProducts = (productToRemove, products) => {
  const productsToSet = removeItemFromArray(productToRemove, products);
  return createAction(SHOP_ACTION_TYPE.SET_PRODUCTS, productsToSet);
};

export const updateProductToProducts = (productToUpdate, products) => {
  const productsToSet = updateItemToArray(productToUpdate, products);
  return createAction(SHOP_ACTION_TYPE.SET_PRODUCTS, productsToSet);
};

export const setProducts = (productsToSet) =>
  createAction(SHOP_ACTION_TYPE.SET_PRODUCTS, productsToSet);
