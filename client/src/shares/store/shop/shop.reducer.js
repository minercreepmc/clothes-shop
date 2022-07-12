import { SHOP_ACTION_TYPE } from './shop.type';

const DEFAULT_SHOW_COLUMN = 3;

const INITIAL_SHOP_STATE = {
  showColumn: DEFAULT_SHOW_COLUMN,
};

export const shopReducer = (state = INITIAL_SHOP_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case SHOP_ACTION_TYPE.SET_SHOW_COLUMN:
      return {
        ...state,
        showColumn: payload,
      };
    default:
      return state;
  }
};
