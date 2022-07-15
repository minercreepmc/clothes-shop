import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import { BiArrowFromLeft } from 'react-icons/bi';

import { selectHomeProducts } from 'shares/store/products/products.selector';
import ProductCard from 'components/smarts/product/product-card/product-card.component';
import SecondaryButton from 'components/reusables/button/secondary-button/secondary-button.component';

import { ProductsFeatured, Header } from './products-featured.styles';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from './product-featured.constant';

const ProductsFeaturedContainer = ({ ...otherProps }) => {
  const products = useSelector(selectHomeProducts);
  const navigate = useNavigate();

  return (
    <ProductsFeatured {...otherProps}>
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={8} lg={6}>
            <Header>
              <h3>Featured Products</h3>
              <h2>Popular Products</h2>
            </Header>
          </Col>
        </Row>
        <Row className="mb-3">
          <Carousel responsive={responsive}>
            {products?.map((product) => (
              <Col key={product._id}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Carousel>
        </Row>
        <Row className="text-center">
          <Col>
            <SecondaryButton
              className="align-middle"
              onClick={() => navigate('/shop')}
            >
              Shop more <BiArrowFromLeft className="fs-4" />
            </SecondaryButton>
          </Col>
        </Row>
      </Container>
    </ProductsFeatured>
  );
};

export default ProductsFeaturedContainer;
