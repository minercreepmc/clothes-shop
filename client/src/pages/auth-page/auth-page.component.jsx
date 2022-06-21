import { Col, Container, Row } from 'react-bootstrap';

import LoginForm from 'components/smarts/form/login-form/login-form.component';
import SignUpForm from 'components/smarts/form/signup-form/signup-form.component';

const AuthPage = () => {
  return (
    <Container>
      <Row>
        <Col className="mb-5" lg={6}>
          <LoginForm />
        </Col>
        <Col lg={6}>
          <SignUpForm />
        </Col>
      </Row>
    </Container>
  );
};

export default AuthPage;
