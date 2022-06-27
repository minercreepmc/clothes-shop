import { USER_ACTION_TYPE } from './user.type';

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPE.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    case USER_ACTION_TYPE.FETCH_CURRENT_USER_START:
      return {
        ...state,
        isLoading: true,
      };
    case USER_ACTION_TYPE.FETCH_CURRENT_USER_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        isLoading: false,
      };

    case USER_ACTION_TYPE.FETCH_CURRENT_USER_FAILED:
      return {
        ...state,
        errors: payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
