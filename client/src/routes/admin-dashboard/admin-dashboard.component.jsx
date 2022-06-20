import { Route, Routes } from 'react-router-dom';

import Dashboard from 'pages/dashboard/dashboard.component';

import DashboardInformation from 'components/dashboard/dashboard-information/dashboard-information.component';
import DashboardCategories from 'components/dashboard/dashboard-categories/dashboard-categories.component';
import ModalPassword from 'components/modal/modal-password/modal-password.component';
import DashboardCategoryUpdate from 'components/dashboard/dashboard-category-update/dashboard-category-update.component';
import DashboardSubCategories from 'components/dashboard/dashboard-sub-categories/dashboard-sub-categories.component';
import DashboardSubCategoriesUpdate from 'components/dashboard/dashboard-sub-categories-update/dashboard-sub-categories-update.component';
import DashboardProductCreate from 'components/dashboard/dashboard-product-create/dashboard-product-create.component';
import DashboardProducts from 'components/dashboard/dashboard-products/dashboard-products.components';

import { DashboardCategoriesProvider } from 'shares/contexts/dashboard-categories.context';
import { DashboardSubcategoriesProvider } from 'shares/contexts/dashboard-sub-categories.context';
import { DashboardProductCreateProvider } from 'shares/contexts/dashboard-product-create.context';
import { DashboardCategoryUpdateProvider } from 'shares/contexts/dashboard-category-update.context';
import { DashboardSubCategoryUpdateProvider } from 'shares/contexts/dashboard-sub-category-update.context';

const AdminDashboard = () => {
  const list = [
    { name: 'Information', route: '' },
    { name: 'Categories', route: 'categories' },
    { name: 'Sub-categories', route: 'sub-categories' },
    { name: 'Create product', route: 'create-product' },
    { name: 'Products', route: 'products' },
  ];

  return (
    <>
      <Routes>
        <Route element={<Dashboard list={list} />}>
          <Route index element={<DashboardInformation />} />
          <Route
            path="categories"
            element={
              <DashboardCategoriesProvider>
                <DashboardCategories />
              </DashboardCategoriesProvider>
            }
          />
          <Route
            path="categories/:slug"
            element={
              <DashboardCategoryUpdateProvider>
                <DashboardCategoryUpdate />
              </DashboardCategoryUpdateProvider>
            }
          />
          <Route
            path="sub-categories"
            element={
              <DashboardSubcategoriesProvider>
                <DashboardSubCategories />
              </DashboardSubcategoriesProvider>
            }
          />
          <Route
            path="sub-categories/:slug"
            element={
              <DashboardSubCategoryUpdateProvider>
                <DashboardSubCategoriesUpdate />
              </DashboardSubCategoryUpdateProvider>
            }
          />

          <Route
            path="create-product"
            element={
              <DashboardProductCreateProvider>
                <DashboardProductCreate />
              </DashboardProductCreateProvider>
            }
          />
          <Route path="products" element={<DashboardProducts />} />
        </Route>
      </Routes>
      <ModalPassword />
    </>
  );
};

export default AdminDashboard;
