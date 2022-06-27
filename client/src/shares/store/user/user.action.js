import { createAction } from 'shares/utils/reducer/reducer.utils';
import { USER_ACTION_TYPE } from 'shares/store/user/user.type';
import { httpGetCurrentUser } from 'shares/hooks/requests/users/user-requests.hook';

export const setCurrentUser = (currentUserToSet) => {
  return createAction(USER_ACTION_TYPE.SET_CURRENT_USER, currentUserToSet);
};

const fetchCurrentUserStart = () =>
  createAction(USER_ACTION_TYPE.FETCH_CURRENT_USER_START);
const fetchCurrentUserSuccess = (user) =>
  createAction(USER_ACTION_TYPE.FETCH_CURRENT_USER_SUCCESS, user);
const fetchCurrentUserErrors = (errors) =>
  createAction(USER_ACTION_TYPE.FETCH_CURRENT_USER_FAILED, errors);

export const fetchCurrentUserAsync = (accessToken) => async (dispatch) => {
  dispatch(fetchCurrentUserStart());

  try {
    const currentUser = await httpGetCurrentUser(accessToken);
    dispatch(fetchCurrentUserSuccess({ ...currentUser, accessToken }));
  } catch (errors) {
    dispatch(fetchCurrentUserErrors(errors));
  }
};
