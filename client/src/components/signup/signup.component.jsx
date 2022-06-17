import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

import FormGroup from 'components/form-group/form-input/form-input.component';

import { signUpWithEmailAndPassword } from 'shares/utils/firebase/firebase.utils';

const newUserTemplate = {
  email: '',
  password: '',
  passwordConfirm: '',
};

const SignUp = () => {
  const [newUser, setNewUser] = useState(newUserTemplate);
  const { email, password, passwordConfirm } = newUser;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !passwordConfirm) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (password !== passwordConfirm) {
      toast.error('Password did not match');
      return;
    }

    try {
      await signUpWithEmailAndPassword(email, password);

      toast.success('A confirmation has been sent to your email');
      window.localStorage.setItem('emailToVerify', email);
      setNewUser(newUserTemplate);
    } catch (errors) {
      toast.error(errors.message);
    }
  };

  const handleChange = (e) => {
    const input = e.target;
    setNewUser({ ...newUser, [input.name]: input.value });
  };

  return (
    <Form onChange={handleChange} onSubmit={handleSubmit}>
      <h1>Sign Up</h1>
      <Form.Text>You don't have an account?</Form.Text>
      <FormGroup
        label="Email"
        placeholder="Enter email"
        type="email"
        name="email"
        value={email}
        onChange={() => { }}
      />
      <FormGroup
        label="Password"
        placeholder="Enter password"
        type="password"
        name="password"
        value={password}
        onChange={() => { }}
      />
      <FormGroup
        label="Confirm Password"
        placeholder="Enter confirm password"
        type="password"
        name="passwordConfirm"
        value={passwordConfirm}
        onChange={() => { }}
      />
      <Button variant="dark" type="submit">
        Sign Up
      </Button>
    </Form>
  );
};

export default SignUp;
