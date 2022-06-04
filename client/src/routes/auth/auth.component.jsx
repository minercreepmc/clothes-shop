import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';

import Login from 'components/login/login.component';
import SignUp from 'components/signup/signup.component';

import { selectCurrentUser } from 'store/user/user.selector';

const Auth = () => {
  const currentUser = useSelector(selectCurrentUser);

  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate('/');
    }
  }, [currentUser, navigate]);

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

export default Auth;
