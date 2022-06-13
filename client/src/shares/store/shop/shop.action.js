import { SHOP_ACTION_TYPE } from './shop.type';

import { createAction } from 'shares/utils/reducer/reducer.utils';

const _addCategoryToCategories = (categoryToAdd, categories) => {
  return [...categories, categoryToAdd];
};

const _removeCategoryFromCategories = (categoryToRemove, categories) => {
  return categories.filter((category) => category._id !== categoryToRemove._id);
};

export const addCategoryToCategories = (categoryToAdd, categories) => {
  const categoriesToSet = _addCategoryToCategories(categoryToAdd, categories);
  return createAction(SHOP_ACTION_TYPE.SET_CATEGORIES, categoriesToSet);
};

export const removeCategoryFromCategories = (categoryToRemove, categories) => {
  const categoriesToSet = _removeCategoryFromCategories(
    categoryToRemove,
    categories,
  );
  return createAction(SHOP_ACTION_TYPE.SET_CATEGORIES, categoriesToSet);
};

export const setCategories = (categories) =>
  createAction(SHOP_ACTION_TYPE.SET_CATEGORIES, categories);
