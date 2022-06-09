import { Route, Routes } from 'react-router-dom';
import Dashboard from 'components/dashboard/dashboard.component';
import Wishlist from 'components/wishlist/wishlist.component';
import Information from 'components/information/information.component';

const UserDashboard = () => {
  return (
    <Routes>
      <Route element={<Dashboard />}>
        <Route index element={<Information />} />
        <Route path="wishlist" element={<Wishlist />} />
      </Route>
    </Routes>
  );
};

export default UserDashboard;
