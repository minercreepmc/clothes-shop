import { createAction } from 'shares/utils/reducer/reducer.utils';
import { DASHBOARD_ACTION_TYPE } from './dashboard.type';

export const setShowModalPassword = (bool) =>
  createAction(DASHBOARD_ACTION_TYPE.SET_SHOW_MODAL_PASSWORD, bool);

export const setShowModalDelete = (bool) =>
  createAction(DASHBOARD_ACTION_TYPE.SET_SHOW_MODAL_DELETE, bool);

export const setIsChanging = (bool) =>
  createAction(DASHBOARD_ACTION_TYPE.SET_IS_CHANGING, bool);
