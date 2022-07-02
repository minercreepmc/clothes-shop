import ProductCard from 'components/smarts/product-card/product-card.component';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import {
  selectHomeProducts,
  selectNewestProduct,
  selectProducts,
} from 'shares/store/products/products.selector';
import { Header, ProductsNewArrival } from './products-new.styles';

const ProductsNewArrivalsContainer = () => {
  const products = useSelector(selectHomeProducts);
  const newProduct = useSelector(selectNewestProduct);

  return (
    <ProductsNewArrival>
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={8} lg={6}>
            <Header>
              <h2>New Products</h2>
            </Header>
          </Col>
        </Row>
        <Row>
          {products?.map((product, index) => {
            const isNew = index === 0 ? true : false;
            return (
              <Col key={product._id} md={6} lg={4} xl={3}>
                <ProductCard product={product} isNew={isNew} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </ProductsNewArrival>
  );
};

export default ProductsNewArrivalsContainer;
