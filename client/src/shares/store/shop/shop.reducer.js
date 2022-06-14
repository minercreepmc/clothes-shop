import { SHOP_ACTION_TYPE } from './shop.type';

const INITIAL_STATE = {
  categories: [],
  subCategories: [],
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

    default:
      return state;
  }
};
