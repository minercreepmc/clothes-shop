import Login from 'components/login/login.component';
import SignUp from 'components/signup/signup.component';
import { Col, Container, Row } from 'react-bootstrap';

const Auth = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Login />
        </Col>
        <Col>
          <SignUp />
        </Col>
      </Row>
    </Container>
  );
};

export default Auth;
