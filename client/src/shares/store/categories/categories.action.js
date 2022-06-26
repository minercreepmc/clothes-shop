import { CATEGORIES_ACTION_TYPE } from './categories.type';

import { createAction } from 'shares/utils/reducer/reducer.utils';

import {
  addItemToArray,
  removeItemFromArray,
  updateItemToArray,
} from 'shares/utils/logics/logics.utils';
import { httpGetCategories } from 'shares/hooks/requests/categories/category-requests.hook';

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

const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START);

const fetchCategoriesSuccess = (categories) =>
  createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS, categories);

const fetchCategoriesFailed = (errors) =>
  createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED, errors);

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());

  try {
    const categories = await httpGetCategories();
    dispatch(fetchCategoriesSuccess(categories));
  } catch (errors) {
    dispatch(fetchCategoriesFailed(errors));
  }
};

export const setCategoriesSearchText = (searchText) =>
  createAction(CATEGORIES_ACTION_TYPE.SET_SEARCH_TEXT, searchText);
