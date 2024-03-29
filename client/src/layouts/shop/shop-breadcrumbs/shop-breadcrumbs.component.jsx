import { Breadcrumb, Col, Container, Row } from 'react-bootstrap';
import {
  BreadcrumbContainer,
  BreadcrumbTitle,
  BreadcrumbList,
} from './shop-breadcrumbs.styles';

import { Outlet } from 'react-router-dom';

import { Link } from 'react-router-dom';

const ShopBreadCrumbsContainer = () => {
  return (
    <>
      <BreadcrumbContainer style={{ paddingTop: '6rem' }}>
        <Container>
          <Row>
            <Col lg={12}>
              <BreadcrumbTitle>Shop</BreadcrumbTitle>
              <BreadcrumbList className="breadcrumb">
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
                  HOME
                </Breadcrumb.Item>
                <Breadcrumb.Item
                  active
                  linkAs={Link}
                  linkProps={{ to: '/shop' }}
                >
                  SHOP
                </Breadcrumb.Item>
              </BreadcrumbList>
            </Col>
          </Row>
        </Container>
      </BreadcrumbContainer>
      <Outlet />
    </>
  );
};

export default ShopBreadCrumbsContainer;
