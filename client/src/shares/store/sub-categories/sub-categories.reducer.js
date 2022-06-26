import { SUB_CATEGORIES_ACTION_TYPE } from './sub-categories.type';

const INITIAL_STATE = {
  subCategories: [],
  isLoading: false,
  isCreating: false,
  isUpdating: false,
  isDeleting: false,
  errors: null,
  searchText: '',
};

export const subCategoriesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case SUB_CATEGORIES_ACTION_TYPE.SET_SUB_CATEGORIES:
      return {
        ...state,
        subCategories: payload,
      };
    case SUB_CATEGORIES_ACTION_TYPE.FETCH_SUB_CATEGORIES_START:
      return {
        ...state,
        isLoading: true,
      };
    case SUB_CATEGORIES_ACTION_TYPE.FETCH_SUB_CATEGORIES_SUCCESS:
      return {
        ...state,
        subCategories: payload,
        isLoading: false,
      };
    case SUB_CATEGORIES_ACTION_TYPE.FETCH_SUB_CATEGORIES_FAILED:
      return {
        ...state,
        errors: payload,
        isLoading: false,
      };

    case SUB_CATEGORIES_ACTION_TYPE.ADD_SUB_CATEGORY_START:
      return {
        ...state,
        isCreating: true,
      };
    case SUB_CATEGORIES_ACTION_TYPE.ADD_SUB_CATEGORY_SUCCESS:
      return {
        ...state,
        subCategories: payload,
        isCreating: false,
      };
    case SUB_CATEGORIES_ACTION_TYPE.ADD_SUB_CATEGORY_FAILED:
      return {
        ...state,
        errors: payload,
        isCreaing: false,
      };
    case SUB_CATEGORIES_ACTION_TYPE.DELETE_SUB_CATEGORY_START:
      return {
        ...state,
        isDeleting: true,
      };
    case SUB_CATEGORIES_ACTION_TYPE.DELETE_SUB_CATEGORY_SUCCESS:
      return {
        ...state,
        subCategories: payload,
        isDeleting: false,
      };

    case SUB_CATEGORIES_ACTION_TYPE.DELETE_SUB_CATEGORY_FAILED:
      return {
        ...state,
        errors: payload,
        isDeleting: false,
      };
    case SUB_CATEGORIES_ACTION_TYPE.UPDATE_SUB_CATEGORY_START:
      return {
        ...state,
        isUpdating: true,
      };
    case SUB_CATEGORIES_ACTION_TYPE.UPDATE_SUB_CATEGORY_SUCCESS:
      return {
        ...state,
        subCategories: payload,
        isUpdating: false,
      };
    case SUB_CATEGORIES_ACTION_TYPE.UPDATE_SUB_CATEGORY_FAILED:
      return {
        ...state,
        errors: payload,
        isUpdating: false,
      };

    case SUB_CATEGORIES_ACTION_TYPE.SET_SEARCH_TEXT:
      return {
        ...state,
        searchText: payload,
      };

    default:
      return state;
  }
};
