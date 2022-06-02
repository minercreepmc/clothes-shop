import FormGroup from 'components/form-group/form-group.component';
import { Button, Form } from 'react-bootstrap';

const Login = () => {
  return (
    <Form>
      <Form.Text>Already have an account!!</Form.Text>
      <FormGroup label="Email address" type="email" placeholder="Enter email" />

      <FormGroup
        label="Password"
        type="password"
        placeholder="Enter password"
      />

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Login;
