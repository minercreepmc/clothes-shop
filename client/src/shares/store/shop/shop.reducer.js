import { SHOP_ACTION_TYPE } from './shop.type';

const INITIAL_STATE = {
  categories: [],
  subCategories: [],
  products: [],
  categoriesSearchText: '',
  subCategoriesSearchText: '',
};

export const shopReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case SHOP_ACTION_TYPE.SET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    case SHOP_ACTION_TYPE.SET_SUB_CATEGORIES:
      return {
        ...state,
        subCategories: payload,
      };
    case SHOP_ACTION_TYPE.SET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case SHOP_ACTION_TYPE.SET_CATEGORIES_SEARCH_TEXT:
      return {
        ...state,
        categoriesSearchText: payload,
      };
    case SHOP_ACTION_TYPE.SET_SUB_CATEGORIES_SEARCH_TEXT:
      return {
        ...state,
        subCategoriesSearchText: payload,
      };

    default:
      return state;
  }
};
