import ShopBreadCrumbs from 'layouts/shop/shop-breadcrumbs/shop-breadcrumbs.component';
import ShopBody from 'layouts/shop/shop-body/shop-body.component';

import { Shop } from './shop-page.styles';

const ShopPage = () => {
  return (
    <Shop style={{ paddingTop: '6rem' }}>
      <ShopBreadCrumbs />
      <ShopBody />
    </Shop>
  );
};

export default ShopPage;
