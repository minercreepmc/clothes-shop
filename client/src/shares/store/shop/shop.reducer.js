import { SHOP_ACTION_TYPE } from './shop.type';

const INITIAL_STATE = {
  categories: [],
};

export const shopReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case SHOP_ACTION_TYPE.SET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    default:
      return state;
  }
};
