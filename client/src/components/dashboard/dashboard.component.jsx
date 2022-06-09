import { Outlet } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

import DashboardNavs from 'components/dashboard-navs/dashboard-navs.component';

const Dashboard = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col style={{ borderRight: '1px solid #ccc' }} lg={2}>
          <DashboardNavs />
        </Col>

        <Col lg={10}>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
