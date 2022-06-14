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
