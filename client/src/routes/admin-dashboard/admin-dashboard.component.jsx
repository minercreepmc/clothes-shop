import { Route, Routes } from 'react-router-dom';

import Dashboard from 'layouts/dashboard/dashboard.component';

import DashboardInformation from 'components/dashboard-information/dashboard-information.component';
import DashboardCategories from 'components/dashboard-categories/dashboard-categories.component';
import ModalPassword from 'components/modal-password/modal-password.component';
import DashboardCategoryUpdate from 'components/dashboard-category-update/dashboard-category-update.component';

const AdminDashboard = () => {
  const list = [
    { name: 'Information', route: '' },
    { name: 'Categories', route: 'categories' },
  ];

  return (
    <>
      <Routes>
        <Route element={<Dashboard list={list} />}>
          <Route index element={<DashboardInformation />} />
          <Route path="categories" element={<DashboardCategories />} />
          <Route
            path="categories/:slug"
            element={<DashboardCategoryUpdate />}
          />
        </Route>
      </Routes>
      <ModalPassword />
    </>
  );
};

export default AdminDashboard;
