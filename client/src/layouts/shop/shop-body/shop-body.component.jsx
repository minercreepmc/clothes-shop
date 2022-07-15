import ShopHeaderContainer from '../shop-header/shop-header.component';
import ShopContentContainer from '../shop-content/shop-content.component';

import { ShopWrapper } from 'pages/shop-page/shop-page.styles';

const ShopBody = () => {
  return (
    <ShopWrapper>
      <ShopHeaderContainer />
      <ShopContentContainer className="mt-100 mb-50" />
    </ShopWrapper>
  );
};

export default ShopBody;
