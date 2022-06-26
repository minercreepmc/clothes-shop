import { SUB_CATEGORIES_ACTION_TYPE } from './sub-categories.type';

const INITIAL_STATE = {
  subCategories: [],
  isLoading: false,
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

    case SUB_CATEGORIES_ACTION_TYPE.SET_SEARCH_TEXT:
      return {
        ...state,
        searchText: payload,
      };

    default:
      return state;
  }
};
