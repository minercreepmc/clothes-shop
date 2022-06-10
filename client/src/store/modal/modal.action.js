import { createAction } from 'utils/reducer/reducer.utils';
import { MODAL_ACTION_TYPE } from './modal.type';

export const setShow = (bool) => createAction(MODAL_ACTION_TYPE.SET_SHOW, bool);
