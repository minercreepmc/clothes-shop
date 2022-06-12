import { Route, Routes } from 'react-router-dom';

import Dashboard from 'layouts/dashboard/dashboard.component';

import DashboardInformation from 'components/dashboard-information/dashboard-information.component';
import Wishlist from 'components/wishlist/wishlist.component';
import ModalPassword from 'components/modal-password/modal-password.component';

const UserDashboard = () => {
  const list = [
    { name: 'Information', route: '' },
    { name: 'Wishlist', route: 'wishlist' },
  ];

  return (
    <>
      <Routes>
        <Route element={<Dashboard list={list} />}>
          <Route index element={<DashboardInformation />} />
          <Route path="wishlist" element={<Wishlist />} />
        </Route>
      </Routes>
      <ModalPassword />
    </>
  );
};

export default UserDashboard;
