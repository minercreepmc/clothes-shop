import { createSelector } from 'reselect';

const selectUserReducer = (state) => state.user;

export const selectIsUserLoading = createSelector(
  selectUserReducer,
  (user) => user.isLoading,
);
export const selectIsUserCreating = createSelector(
  selectUserReducer,
  (user) => user.isCreating,
);
export const selectIsUserUpdating = createSelector(
  selectUserReducer,
  (user) => user.isUpdating,
);
export const selectIsUserDeleting = createSelector(
  selectUserReducer,
  (user) => user.isDeleting,
);

export const selectCurrentUser = createSelector(
  selectUserReducer,
  (userReducer) => userReducer.currentUser,
);

export const selectIsCurrentUserExist = createSelector(
  selectUserReducer,
  (userReducer) => userReducer.length !== 0,
);
