import { createAction } from 'utils/reducer/reducer.utils';
import { USER_ACTION_TYPE } from 'store/user/user.type';

export const setCurrentUser = (currentUserToSet) => {
  return createAction(USER_ACTION_TYPE.SET_CURRENT_USER, currentUserToSet);
};
