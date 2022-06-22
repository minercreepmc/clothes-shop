import { createSelector } from 'reselect';

const selectDashboardReducer = (state) => state.dashboard;

export const selectModalPasswordShow = createSelector(
  selectDashboardReducer,
  (dashboard) => dashboard.showModalPassword,
);

export const selectModalDeleteShow = createSelector(
  selectDashboardReducer,
  (dashboard) => dashboard.showModalDelete,
);

export const selectConfirmDelete = createSelector(
  selectDashboardReducer,
  (dashboard) => dashboard.confirmDelete,
);

export const selectIsChanging = createSelector(
  selectDashboardReducer,
  (dashboard) => dashboard.isChanging,
);
