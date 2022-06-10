import { createAction } from 'utils/reducer/reducer.utils';
import { MODAL_ACTION_TYPE } from './modal.type';

export const setShowModalPassword = (bool) =>
  createAction(MODAL_ACTION_TYPE.SET_SHOW_MODAL_PASSWORD, bool);
