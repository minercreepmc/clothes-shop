const { MODAL_ACTION_TYPE } = require('./modal.type');

const INITIAL_STATE = {
  showModalPassword: false,
};

export const modalReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case MODAL_ACTION_TYPE.SET_SHOW_MODAL_PASSWORD:
      return {
        ...state,
        showModalPassword: payload,
      };
    default:
      return state;
  }
};
