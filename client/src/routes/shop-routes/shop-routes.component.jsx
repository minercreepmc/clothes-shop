import { Routes, Route } from 'react-router-dom';

import ShopPage from 'pages/shop-page/shop-page.component';
import ShopBreadCrumbs from 'layouts/shop/shop-breadcrumbs/shop-breadcrumbs.component';
import ShopProduct from 'pages/shop-product/shop-product.component';

const ShopRoutes = () => {
  return (
    <Routes>
      <Route element={<ShopBreadCrumbs />}>
        <Route index element={<ShopPage />} />
        <Route path=":slug" element={<ShopProduct />} />
      </Route>
    </Routes>
  );
};

export default ShopRoutes;
