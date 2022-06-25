import { CATEGORIES_ACTION_TYPE } from './categories.type';

import { createAction } from 'shares/utils/reducer/reducer.utils';

import {
  addItemToArray,
  removeItemFromArray,
  updateItemToArray,
} from 'shares/utils/logics/logics.utils';

// Categories
export const addCategoryToCategories = (categoryToAdd, categories) => {
  const categoriesToSet = addItemToArray(categoryToAdd, categories);
  return createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES, categoriesToSet);
};

export const removeCategoryFromCategories = (categoryToRemove, categories) => {
  const categoriesToSet = removeItemFromArray(categoryToRemove, categories);
  return createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES, categoriesToSet);
};

export const updateCategoryToCategories = (updatedCategory, categories) => {
  const categoriesToSet = updateItemToArray(updatedCategory, categories);

  return createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES, categoriesToSet);
};

export const setCategories = (categories) =>
  createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES, categories);

export const setCategoriesSearchText = (searchText) =>
  createAction(CATEGORIES_ACTION_TYPE.SET_SEARCH_TEXT, searchText);
