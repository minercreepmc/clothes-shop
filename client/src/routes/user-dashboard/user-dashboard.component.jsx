import { Route, Routes } from 'react-router-dom';

import Dashboard from 'components/dashboard/dashboard.component';
import DashboardInformation from 'components/dashboard-information/dashboard-information.component';
import Wishlist from 'components/wishlist/wishlist.component';
import ModalPassword from 'components/modal-password/modal-password.component';

const UserDashboard = () => {
  return (
    <>
      <Routes>
        <Route element={<Dashboard />}>
          <Route index element={<DashboardInformation />} />
          <Route path="wishlist" element={<Wishlist />} />
        </Route>
      </Routes>
      <ModalPassword />
    </>
  );
};

export default UserDashboard;
