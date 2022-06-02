import FormGroup from 'components/form-group/form-group.component';
import { Button, Form } from 'react-bootstrap';

const SignUp = () => {
  return (
    <Form>
      <Form.Text>You don't have an account?</Form.Text>
      <FormGroup
        label="Display Name"
        placholder="Enter a display name"
        type="text"
      />
      <FormGroup label="Email" placholder="Enter email" type="email" />
      <FormGroup label="Password" placholder="Enter password" type="password" />
      <FormGroup
        label="Confirm Password"
        placholder="Enter confirm password"
        type="password"
      />
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default SignUp;
