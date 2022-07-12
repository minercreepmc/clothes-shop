import { Col, Container, Row } from 'react-bootstrap';
import ShopProducts from '../shop-products/shop-products.component';
import ShopSidebar from '../shop-sidebar/shop-sidebar.component';
import { ShopContent } from './shop-content.styles';

const ShopContentContainer = ({ ...otherProps }) => {
  return (
    <ShopContent {...otherProps}>
      <Container>
        <Row>
          <Col lg={3} className="order-2 order-lg-1">
            <ShopSidebar className="noselect" />
          </Col>

          <Col lg={9} className="order-1 order-lg-2 mb-md-80 mb-sm-80">
            <ShopProducts />
          </Col>
        </Row>
      </Container>
    </ShopContent>
  );
};

export default ShopContentContainer;
