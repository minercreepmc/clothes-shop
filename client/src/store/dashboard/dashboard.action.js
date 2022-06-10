import { createAction } from 'utils/reducer/reducer.utils';
import { DASHBOARD_ACTION_TYPE } from './dashboard.type';

export const setShowModalPassword = (bool) =>
  createAction(DASHBOARD_ACTION_TYPE.SET_SHOW_MODAL_PASSWORD, bool);

export const setIsChanging = (bool) =>
  createAction(DASHBOARD_ACTION_TYPE.SET_IS_CHANGING, bool);
