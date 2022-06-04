export const selectCurrentUser = (state) => {
  return state.user.currentUser;
};
export const selectIsCurrentUserExist = (state) => state.user.length !== 0;
