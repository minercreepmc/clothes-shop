import { Col, Container, Row } from 'react-bootstrap';
import { ShopHeader } from './shop-header.styles';
import FilterTitle from 'components/smarts/filter/filter-title/filter-title.component';
import FilterIcons from 'components/smarts/filter/filter-icons/filter-icons.component';

const ShopHeaderContainer = () => {
  return (
    <ShopHeader>
      <Container>
        <Row className="align-items-center">
          <Col lg={7} md={10} className="d-none d-md-block">
            <FilterTitle />
          </Col>
          <Col lg={5} md={2}>
            <FilterIcons />
          </Col>
        </Row>
      </Container>
    </ShopHeader>
  );
};

export default ShopHeaderContainer;
