import { Col, Container, Row } from 'react-bootstrap';
import { LandingHeader, Divider } from './home-header.styles';
import SecondaryButton from 'components/reusables/button/secondary-button/secondary-button.component';

const HomeHeader = () => {
  return (
    <LandingHeader>
      <Container className="px-4 px-lg-5 h-100">
        <Row className="gx-4 gx-lg-5 h-100 align-content-center justify-content-center text-center">
          <Col lg={8} className="align-self-end">
            <h1 className="text-white font-weight-bold">Summer Sale</h1>
            <Divider />
          </Col>
          <Col lg={8} className="align-self-baseline">
            <p className="text-white-75 mb-5">
              Start shopping today for biggest sale in summer
            </p>
            <SecondaryButton href="#about">Find Out More</SecondaryButton>
          </Col>
        </Row>
      </Container>
    </LandingHeader>
  );
};

export default HomeHeader;
