import { createSelector } from 'reselect';

const selectUserReducer = (state) => state.user;

export const selectCurrentUser = createSelector(
  selectUserReducer,
  (userReducer) => userReducer.currentUser,
);

export const selectIsCurrentUserExist = createSelector(
  selectUserReducer,
  (userReducer) => userReducer.length !== 0,
);
