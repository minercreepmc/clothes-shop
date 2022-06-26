import { CATEGORIES_ACTION_TYPE } from './categories.type';

const INITIAL_STATE = {
  categories: [],
  isLoading: false,
  isCreating: false,
  isDeleting: false,
  isUpdating: false,
  errors: null,
  searchText: '',
};

export const categoriesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START:
      return {
        ...state,
        isLoading: true,
      };
    case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: payload,
        isLoading: false,
      };
    case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED:
      return {
        ...state,
        errors: payload,
        isLoading: false,
      };
    case CATEGORIES_ACTION_TYPE.ADD_CATEGORY_START:
      return {
        ...state,
        isCreating: true,
      };
    case CATEGORIES_ACTION_TYPE.ADD_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: payload,
        isCreating: false,
      };
    case CATEGORIES_ACTION_TYPE.ADD_CATEGORY_FAILED:
      return {
        ...state,
        errors: payload,
        isCreaing: false,
      };
    case CATEGORIES_ACTION_TYPE.DELETE_CATEGORY_START:
      return {
        ...state,
        isDeleting: true,
      };
    case CATEGORIES_ACTION_TYPE.DELETE_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: payload,
        isDeleting: false,
      };

    case CATEGORIES_ACTION_TYPE.DELETE_CATEGORY_FAILED:
      return {
        ...state,
        errors: payload,
        isDeleting: false,
      };
    case CATEGORIES_ACTION_TYPE.UPDATE_CATEGORY_START:
      return {
        ...state,
        isUpdating: true,
      };
    case CATEGORIES_ACTION_TYPE.UPDATE_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: payload,
        isUpdating: false,
      };
    case CATEGORIES_ACTION_TYPE.UPDATE_CATEGORY_FAILED:
      return {
        ...state,
        errors: payload,
        isUpdating: false,
      };
    case CATEGORIES_ACTION_TYPE.SET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    case CATEGORIES_ACTION_TYPE.SET_SEARCH_TEXT:
      return {
        ...state,
        searchText: payload,
      };

    default:
      return state;
  }
};
