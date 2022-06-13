const { DASHBOARD_ACTION_TYPE } = require('./dashboard.type');

const INITIAL_STATE = {
  showModalPassword: false,
  showModalDelete: false,
  isChanging: false,
  confirmDelete: false,
};

export const dashboardReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case DASHBOARD_ACTION_TYPE.SET_SHOW_MODAL_PASSWORD:
      return {
        ...state,
        showModalPassword: payload,
      };
    case DASHBOARD_ACTION_TYPE.SET_SHOW_MODAL_DELETE:
      return {
        ...state,
        showModalDelete: payload,
      };
    case DASHBOARD_ACTION_TYPE.SET_CONFIRM_DELETE:
      return {
        ...state,
        confirmDelete: payload,
      };
    case DASHBOARD_ACTION_TYPE.SET_IS_CHANGING:
      return {
        ...state,
        isChanging: payload,
      };
    default:
      return state;
  }
};
