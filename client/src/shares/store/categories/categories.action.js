import { CATEGORIES_ACTION_TYPE } from './categories.type';

import { createAction } from 'shares/utils/reducer/reducer.utils';

import {
  addItemToArray,
  removeItemFromArray,
  updateItemToArray,
} from 'shares/utils/logics/logics.utils';
import {
  httpDeleteCategory,
  httpGetCategories,
  httpPostCategory,
  httpPutCategory,
} from 'shares/hooks/requests/categories/category-requests.hook';

//Add
const addCategoryToCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPE.ADD_CATEGORY_START);
const addCategoryToCategoriesSuccess = (categoryToAdd, categories) => {
  const categoriesToSet = addItemToArray(categoryToAdd, categories);
  return createAction(
    CATEGORIES_ACTION_TYPE.ADD_CATEGORY_SUCCESS,
    categoriesToSet,
  );
};
const addCategoryToCategoriesFailed = (errors) =>
  createAction(CATEGORIES_ACTION_TYPE.ADD_CATEGORY_FAILED, errors);

export const addCategoryToCategoriesAsync =
  (categoryToAdd, categories, accessToken) => async (dispatch) => {
    dispatch(addCategoryToCategoriesStart());

    try {
      const newCategory = await httpPostCategory({
        category: categoryToAdd,
        accessToken,
      });
      await dispatch(addCategoryToCategoriesSuccess(newCategory, categories));
    } catch (errors) {
      dispatch(addCategoryToCategoriesFailed(errors));
    }
  };

// Delete
const deleteCategoryFromCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPE.DELETE_CATEGORY_START);
const deleteCategoryFromCategoriesSuccess = (categoryToDelete, categories) => {
  const categoriesToSet = removeItemFromArray(categoryToDelete, categories);
  return createAction(
    CATEGORIES_ACTION_TYPE.DELETE_CATEGORY_SUCCESS,
    categoriesToSet,
  );
};
const deleteCategoryFromCategoriesFailed = (errors) =>
  createAction(CATEGORIES_ACTION_TYPE.DELETE_CATEGORY_FAILED, errors);

export const deleteCategoryFromCategoriesAsync =
  (slug, categories, accessToken) => async (dispatch) => {
    dispatch(deleteCategoryFromCategoriesStart());

    try {
      const categoryToDelete = await httpDeleteCategory({ slug, accessToken });
      dispatch(
        deleteCategoryFromCategoriesSuccess(categoryToDelete, categories),
      );
    } catch (errors) {
      dispatch(deleteCategoryFromCategoriesFailed(errors));
    }
  };

// update
const updateCategoryToCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPE.UPDATE_CATEGORY_START);
const updateCategoryToCategoriesSuccess = (updatedCategory, categories) => {
  const categoriesToSet = updateItemToArray(updatedCategory, categories);

  return createAction(
    CATEGORIES_ACTION_TYPE.UPDATE_CATEGORY_SUCCESS,
    categoriesToSet,
  );
};
const updateCategoryToCategoriesFailed = (errors) =>
  createAction(CATEGORIES_ACTION_TYPE.UPDATE_CATEGORY_FAILED, errors);

export const updateCategoryToCategoriesAsync =
  (categoryToUpdate, categories, accessToken) => async (dispatch) => {
    dispatch(updateCategoryToCategoriesStart());

    try {
      const updatedCategory = await httpPutCategory({
        category: categoryToUpdate,
        accessToken,
      });
      dispatch(updateCategoryToCategoriesSuccess(updatedCategory, categories));
    } catch (errors) {
      dispatch(updateCategoryToCategoriesFailed(errors));
    }
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
