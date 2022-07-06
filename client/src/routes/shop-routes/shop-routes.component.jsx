import { Routes, Route } from 'react-router-dom';

import ShopPage from 'pages/shop-page/shop-page.component';

const ShopRoutes = () => {
  return (
    <Routes>
      <Route index element={<ShopPage />} />
    </Routes>
  );
};

export default ShopRoutes;
