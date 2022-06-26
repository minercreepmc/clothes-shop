import { SUB_CATEGORIES_ACTION_TYPE } from './sub-categories.type';

import { createAction } from 'shares/utils/reducer/reducer.utils';

import {
  addItemToArray,
  removeItemFromArray,
  updateItemToArray,
} from 'shares/utils/logics/logics.utils';
import {
  httpDeleteSubCategory,
  httpGetSubCategories,
  httpPostSubCategory,
  httpPutSubCategory,
} from 'shares/hooks/requests/sub-categories/sub-categories.hook';

// Add
const addSubCategoryToSubCategoriesStart = () =>
  createAction(SUB_CATEGORIES_ACTION_TYPE.ADD_SUB_CATEGORY_START);

const addSubCategoryToSubCategoriesSuccess = (
  subCategoryToAdd,
  subCategories,
) => {
  const subCategoriesToSet = addItemToArray(subCategoryToAdd, subCategories);
  return createAction(
    SUB_CATEGORIES_ACTION_TYPE.ADD_SUB_CATEGORY_SUCCESS,
    subCategoriesToSet,
  );
};
const addSubCategoryToSubCategoriesFailed = (errors) =>
  createAction(SUB_CATEGORIES_ACTION_TYPE.ADD_SUB_CATEGORY_FAILED, errors);

export const addSubCategoryToSubCategoriesAsync =
  (subCategoryToAdd, subCategories, accessToken) => async (dispatch) => {
    dispatch(addSubCategoryToSubCategoriesStart());

    try {
      const newCategory = await httpPostSubCategory({
        subCategory: subCategoryToAdd,
        accessToken,
      });
      dispatch(
        addSubCategoryToSubCategoriesSuccess(newCategory, subCategories),
      );
    } catch (errors) {
      dispatch(addSubCategoryToSubCategoriesFailed(errors));
    }
  };

// Delete
const deleteSubCategoryFromSubCategoriesStart = () =>
  createAction(SUB_CATEGORIES_ACTION_TYPE.DELETE_SUB_CATEGORY_START);
const deleteSubCategoryFromSubCategoriesSuccess = (
  subCategoryToDelete,
  subCategories,
) => {
  const categoriesToSet = removeItemFromArray(
    subCategoryToDelete,
    subCategories,
  );
  return createAction(
    SUB_CATEGORIES_ACTION_TYPE.DELETE_SUB_CATEGORY_SUCCESS,
    categoriesToSet,
  );
};
const deleteSubCategoryFromSubCategoriesFailed = (errors) =>
  createAction(SUB_CATEGORIES_ACTION_TYPE.DELETE_SUB_CATEGORY_FAILED, errors);

export const deleteSubCategoryFromSubCategoriesAsync =
  (slug, subCategories, accessToken) => async (dispatch) => {
    dispatch(deleteSubCategoryFromSubCategoriesStart());

    try {
      const deletedSubCategory = await httpDeleteSubCategory({
        slug,
        accessToken,
      });
      dispatch(
        deleteSubCategoryFromSubCategoriesSuccess(
          deletedSubCategory,
          subCategories,
        ),
      );
    } catch (errors) {
      dispatch(deleteSubCategoryFromSubCategoriesFailed(errors));
    }
  };

// update
const updateSubCategoryToSubCategoriesStart = () =>
  createAction(SUB_CATEGORIES_ACTION_TYPE.UPDATE_SUB_CATEGORY_START);
const updateSubCategoryToSubCategoriesSuccess = (
  updatedSubCategory,
  subCategories,
) => {
  const subCategoriesToSet = updateItemToArray(
    updatedSubCategory,
    subCategories,
  );

  return createAction(
    SUB_CATEGORIES_ACTION_TYPE.UPDATE_SUB_CATEGORY_SUCCESS,
    subCategoriesToSet,
  );
};
const updateSubCategoryToSubCategoriesFailed = (errors) =>
  createAction(SUB_CATEGORIES_ACTION_TYPE.UPDATE_SUB_CATEGORY_FAILED, errors);

export const updateSubCategoryToSubCategoriesAsync =
  (subCategoryToUpdate, subCategories, accessToken) => async (dispatch) => {
    dispatch(updateSubCategoryToSubCategoriesStart());

    try {
      const updatedSubCategory = await httpPutSubCategory({
        subCategory: subCategoryToUpdate,
        accessToken,
      });
      dispatch(
        updateSubCategoryToSubCategoriesSuccess(
          updatedSubCategory,
          subCategories,
        ),
      );
    } catch (errors) {
      dispatch(updateSubCategoryToSubCategoriesFailed(errors));
    }
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
