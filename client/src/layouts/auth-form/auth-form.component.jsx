import { Col, Container, Row } from 'react-bootstrap';

import Login from 'components/smarts/login/login.component';
import SignUp from 'components/smarts/signup/signup.component';

const AuthForm = () => {
  return (
    <Container>
      <Row>
        <Col className="mb-5" lg={6}>
          <Login />
        </Col>
        <Col lg={6}>
          <SignUp />
        </Col>
      </Row>
    </Container>
  );
};

export default AuthForm;
