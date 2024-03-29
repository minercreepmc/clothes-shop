import { Route, Routes } from 'react-router-dom';

import Dashboard from 'pages/dashboard/dashboard.component';

import ModalPassword from 'components/smarts/modal/modal-password/modal-password.component';

import DashboardInformation from 'layouts/dashboard/dashboard-information/dashboard-information.component';
import DashboardCategories from 'layouts/dashboard/dashboard-categories/dashboard-categories.component';
import DashboardCategoryUpdate from 'layouts/dashboard/dashboard-category-update/dashboard-category-update.component';
import DashboardSubCategories from 'layouts/dashboard/dashboard-sub-categories/dashboard-sub-categories.component';
import DashboardSubCategoriesUpdate from 'layouts/dashboard/dashboard-sub-categories-update/dashboard-sub-categories-update.component';
import DashboardProductCreate from 'layouts/dashboard/dashboard-product-create/dashboard-product-create.component';
import DashboardProducts from 'layouts/dashboard/dashboard-products/dashboard-products.components';

import { DashboardSubcategoriesProvider } from 'shares/contexts/dashboard-sub-categories.context';
import { DashboardProductCreateProvider } from 'shares/contexts/dashboard-product-create.context';
import { DashboardSubCategoryUpdateProvider } from 'shares/contexts/dashboard-sub-category-update.context';
import { DashboardProductsProvider } from 'shares/contexts/dashboard-products.context';
import { DashboardInformationProvider } from 'shares/contexts/dashboard-information.context';
import DashboardProductUpdate from 'layouts/dashboard/dashboard-product-update/dashboard-product-update.component';

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
          <Route
            index
            element={
              <DashboardInformationProvider>
                <DashboardInformation />
              </DashboardInformationProvider>
            }
          />
          <Route path="categories" element={<DashboardCategories />} />
          <Route
            path="categories/:slug"
            element={<DashboardCategoryUpdate />}
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
          <Route
            path="products"
            element={
              <DashboardProductsProvider>
                <DashboardProducts />
              </DashboardProductsProvider>
            }
          />

          <Route path="products/:slug" element={<DashboardProductUpdate />} />
        </Route>
      </Routes>
      <ModalPassword />
    </>
  );
};

export default AdminDashboard;
