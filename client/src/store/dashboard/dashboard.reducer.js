const { DASHBOARD_ACTION_TYPE } = require('./dashboard.type');

const INITIAL_STATE = {
  showModalPassword: false,
  isChanging: false,
};

export const dashboardReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case DASHBOARD_ACTION_TYPE.SET_SHOW_MODAL_PASSWORD:
      return {
        ...state,
        showModalPassword: payload,
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
