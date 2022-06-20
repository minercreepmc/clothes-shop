import { Route, Routes } from 'react-router-dom';

import Dashboard from 'pages/dashboard/dashboard.component';

import DashboardInformation from 'layouts/dashboard/dashboard-information/dashboard-information.component';
import Wishlist from 'layouts/wishlist/wishlist.component';
import ModalPassword from 'components/smarts/modal/modal-password/modal-password.component';

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
