import { createAction } from 'shares/utils/reducer/reducer.utils';
import { SHOP_ACTION_TYPE } from './shop.type';

export const setShowColumn = (bool) =>
  createAction(SHOP_ACTION_TYPE.SET_SHOW_COLUMN, bool);
