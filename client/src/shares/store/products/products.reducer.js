import { PRODUCTS_ACTION_TYPE } from './products.type';

const INITIAL_STATE = {
  products: [],
  isLoading: false,
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

    default:
      return state;
  }
};
