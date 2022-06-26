import { PRODUCTS_ACTION_TYPE } from './products.type';

const INITIAL_STATE = {
  products: [],
  isLoading: false,
  isCreating: false,
  isUpdating: false,
  isDeleting: false,
  errors: null,
};

export const productsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCTS_ACTION_TYPE.SET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case PRODUCTS_ACTION_TYPE.FETCH_PRODUCTS_START:
      return {
        ...state,
        isLoading: true,
      };

    case PRODUCTS_ACTION_TYPE.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: payload,
        isLoading: false,
      };

    case PRODUCTS_ACTION_TYPE.FETCH_PRODUCTS_FAILED:
      return {
        ...state,
        errors: payload,
        isLoading: false,
      };

    case PRODUCTS_ACTION_TYPE.ADD_PRODUCT_START:
      return {
        ...state,
        isCreating: true,
      };
    case PRODUCTS_ACTION_TYPE.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        products: payload,
        isCreating: false,
      };
    case PRODUCTS_ACTION_TYPE.ADD_PRODUCT_FAILED:
      return {
        ...state,
        errors: payload,
        isCreaing: false,
      };
    case PRODUCTS_ACTION_TYPE.DELETE_PRODUCT_START:
      return {
        ...state,
        isDeleting: true,
      };
    case PRODUCTS_ACTION_TYPE.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: payload,
        isDeleting: false,
      };

    case PRODUCTS_ACTION_TYPE.DELETE_PRODUCT_FAILED:
      return {
        ...state,
        errors: payload,
        isDeleting: false,
      };
    case PRODUCTS_ACTION_TYPE.UPDATE_PRODUCT_START:
      return {
        ...state,
        isUpdating: true,
      };
    case PRODUCTS_ACTION_TYPE.UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: payload,
        isUpdating: false,
      };
    case PRODUCTS_ACTION_TYPE.UPDATE_PRODUCT_FAILED:
      return {
        ...state,
        errors: payload,
        isUpdating: false,
      };

    default:
      return state;
  }
};
