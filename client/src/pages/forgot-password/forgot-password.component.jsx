import { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';

import FormGroup from 'components/form-group/form-group.component';
import { resetPasswordWithEmailLink } from 'shares/utils/firebase/firebase.utils';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    const input = e.target;

    setEmail(input.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error('Please enter email');
      return;
    }

    try {
      await resetPasswordWithEmailLink(email);
      toast.success('A reset password link have sent to your email');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Container>
      <Row md={8}>
        <Col>
          <Form onSubmit={handleSubmit} onChange={handleChange}>
            <FormGroup
              name="email"
              type="email"
              label="Email"
              placeholder="Enter email to get reset link"
            />

            <Button variant="dark" type="submit">
              Send
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPassword;
