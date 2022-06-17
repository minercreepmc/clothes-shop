import { Route, Routes } from 'react-router-dom';

import Navbar from 'layouts/navbar/navbar.component';

import Home from 'pages/home/home.component';
import NotFound from 'pages/notfound/notfound.component';

import ProtectedUser from 'components/protected/protected-user/protected-user.component';
import ProtectedAdmin from 'components/protected/protected-admin/protected-admin.component';

import Auth from './auth/auth.component';
import AdminDashboard from './admin-dashboard/admin-dashboard.component';
import UserDashboard from './user-dashboard/user-dashboard.component';

const AppRoute = () => {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="auth/*" element={<Auth />} />
        <Route
          path="user/dashboard/*"
          element={
            <ProtectedUser>
              <UserDashboard />
            </ProtectedUser>
          }
        />
        <Route
          path="admin/dashboard/*"
          element={
            <ProtectedAdmin>
              <AdminDashboard />
            </ProtectedAdmin>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoute;
