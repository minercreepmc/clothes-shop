import { Routes, Route } from 'react-router-dom';

import ShopPage from 'pages/shop-page/shop-page.component';
import ShopBreadCrumbs from 'layouts/shop/shop-breadcrumbs/shop-breadcrumbs.component';

const ShopRoutes = () => {
  return (
    <Routes>
      <Route element={<ShopBreadCrumbs />}>
        <Route index element={<ShopPage />} />
      </Route>
    </Routes>
  );
};

export default ShopRoutes;
