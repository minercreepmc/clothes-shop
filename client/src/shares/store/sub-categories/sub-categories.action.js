import { SUB_CATEGORIES_ACTION_TYPE } from './sub-categories.type';

import { createAction } from 'shares/utils/reducer/reducer.utils';

import {
  addItemToArray,
  removeItemFromArray,
  updateItemToArray,
} from 'shares/utils/logics/logics.utils';
import { httpGetSubCategories } from 'shares/hooks/requests/sub-categories/sub-categories.hook';

// Sub Categories
export const addSubCategoryToSubCategories = (
  subCategoryToAdd,
  subCategories,
) => {
  const subCategoriesToSet = addItemToArray(subCategoryToAdd, subCategories);
  return createAction(
    SUB_CATEGORIES_ACTION_TYPE.SET_SUB_CATEGORIES,
    subCategoriesToSet,
  );
};

export const removeSubCategoryFromSubCategories = (
  subCategoryToRemove,
  subCategories,
) => {
  const subCategoriesToSet = removeItemFromArray(
    subCategoryToRemove,
    subCategories,
  );

  return createAction(
    SUB_CATEGORIES_ACTION_TYPE.SET_SUB_CATEGORIES,
    subCategoriesToSet,
  );
};

export const updateSubCategoryToSubCategories = (
  updatedSubCategory,
  subCategories,
) => {
  const subCategoriesToSet = updateItemToArray(
    updatedSubCategory,
    subCategories,
  );

  return createAction(
    SUB_CATEGORIES_ACTION_TYPE.SET_SUB_CATEGORIES,
    subCategoriesToSet,
  );
};

export const setSubCategories = (subCategoriesToSet) =>
  createAction(
    SUB_CATEGORIES_ACTION_TYPE.SET_SUB_CATEGORIES,
    subCategoriesToSet,
  );

const fetchSubCategoriesStart = () =>
  createAction(SUB_CATEGORIES_ACTION_TYPE.FETCH_SUB_CATEGORIES_START);
const fetchSubCategoriesSuccess = (subCategories) =>
  createAction(
    SUB_CATEGORIES_ACTION_TYPE.FETCH_SUB_CATEGORIES_SUCCESS,
    subCategories,
  );
const fetchSubCategoriesFailed = (errors) =>
  createAction(SUB_CATEGORIES_ACTION_TYPE.FETCH_SUB_CATEGORIES_FAILED, errors);

export const fetchSubCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchSubCategoriesStart());

  try {
    const subCategories = await httpGetSubCategories();
    dispatch(fetchSubCategoriesSuccess(subCategories));
  } catch (errors) {
    dispatch(fetchSubCategoriesFailed(errors));
  }
};

export const setSubCategoriesSearchText = (searchText) =>
  createAction(SUB_CATEGORIES_ACTION_TYPE.SET_SEARCH_TEXT, searchText);
