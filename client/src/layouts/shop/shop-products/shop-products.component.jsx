import ProductCard from 'components/smarts/product/product-card/product-card.component';
import { Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectSearchedProducts } from 'shares/store/products/products.selector';
import { selectShowColumn } from 'shares/store/shop/shop.selector';
import { ShopProductsWrap } from './shop-products.styles';

const ShopProducts = () => {
  const products = useSelector(selectSearchedProducts);
  const showColumn = useSelector(selectShowColumn);

  return (
    <ShopProductsWrap>
      {products?.map((product) => (
        <Col key={product._id} lg={showColumn} md={6} className="mb-45">
          <ProductCard product={product}></ProductCard>
        </Col>
      ))}
    </ShopProductsWrap>
  );
};

export default ShopProducts;
