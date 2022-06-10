const { MODAL_ACTION_TYPE } = require('./modal.type');

const INITIAL_STATE = {
  show: true,
};

export const modalReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case MODAL_ACTION_TYPE.SET_SHOW:
      return {
        show: payload,
      };
    default:
      return state;
  }
};
