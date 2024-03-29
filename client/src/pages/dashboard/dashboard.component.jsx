import { Outlet } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

import DashboardNavs from 'layouts/dashboard/dashboard-navs/dashboard-navs.component';

import { Dashboard } from './dashboard.styles';

const DashboardContainer = ({ list }) => {
  return (
    <Dashboard>
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col md={4} lg={3}>
            <DashboardNavs list={list} />
          </Col>

          <Col md={8} lg={9}>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </Dashboard>
  );
};

export default DashboardContainer;
