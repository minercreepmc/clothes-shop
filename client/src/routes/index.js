import { Route, Routes } from 'react-router-dom';

import Navbar from 'layouts/navbar/navbar.component';

import Home from 'pages/home/home.component';
import NotFound from 'pages/notfound/notfound.component';

import ProtectedUser from 'components/smarts/protected/protected-user/protected-user.component';
import ProtectedAdmin from 'components/smarts/protected/protected-admin/protected-admin.component';

import Auth from './auth/auth.component';
import AdminDashboard from './admin-dashboard/admin-dashboard.component';
import UserDashboard from './user-dashboard/user-dashboard.component';
import ShopRoutes from './shop-routes/shop-routes.component';

import { DashboardProvider } from 'shares/contexts/dashboard.context';

const AppRoute = () => {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="auth/*" element={<Auth />} />
        <Route
          path="user/dashboard/*"
          element={
            <DashboardProvider>
              <ProtectedUser>
                <UserDashboard />
              </ProtectedUser>
            </DashboardProvider>
          }
        />
        <Route
          path="admin/dashboard/*"
          element={
            <DashboardProvider>
              <ProtectedAdmin>
                <AdminDashboard />
              </ProtectedAdmin>
            </DashboardProvider>
          }
        />

        <Route path="shop/*" element={<ShopRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoute;
