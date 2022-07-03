import ServiceContainer from 'components/smarts/service-container/service-container.component';
import { Col, Container, Row } from 'react-bootstrap';

import { Services, ServicesHeader, Divider } from './home-services.styles';

import { services } from './home-services.constant';

const HomeServices = () => {
  return (
    <Services>
      <Container className="px-4 px-lg-5">
        <ServicesHeader>Our services</ServicesHeader>
        <Divider />
        <Row className="gx-4 gx-lg-5">
          {services.map((service) => (
            <Col key={service.id} lg={3} md={6} className="text-center">
              <ServiceContainer service={service} />
            </Col>
          ))}
        </Row>
      </Container>
    </Services>
  );
};

export default HomeServices;
