import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import {
  selectHomeProducts,
  selectProducts,
} from 'shares/store/products/products.selector';
import ProductCard from 'components/smarts/product-card/product-card.component';

import './products-featured.styles.scss';

import { ProductsFeatured, Header } from './products-featured.styles';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const ProductsFeaturedContainer = () => {
  const products = useSelector(selectHomeProducts);

  return (
    <ProductsFeatured>
      <Container fluid>
        <Row className="justify-content-center text-center">
          <Col md={8} lg={6}>
            <Header>
              <h3>Featured Products</h3>
              <h2>Popular Products</h2>
            </Header>
          </Col>
        </Row>
        <Row>
          <Carousel responsive={responsive}>
            {products?.map((product) => (
              <Col key={product._id}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Carousel>
        </Row>
      </Container>
    </ProductsFeatured>
  );
};

export default ProductsFeaturedContainer;
