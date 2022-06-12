export const selectCurrentUser = (state) => state.user.currentUser;

export const selectCurrentUserEmail = (state) => state.user.currentUser?.email;

export const selectIsCurrentUserExist = (state) => state.user.length !== 0;
