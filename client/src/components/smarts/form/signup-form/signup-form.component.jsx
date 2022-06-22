import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

import FormInput from 'components/reusables/form-group/form-input/form-input.component';

import { signUpWithEmailAndPassword } from 'shares/utils/firebase/firebase.utils';

const INITIAL_USER_STATE = {
  email: '',
  password: '',
  passwordConfirm: '',
};

const SignUpForm = () => {
  const [user, setUser] = useState(INITIAL_USER_STATE);
  const { email, password, passwordConfirm } = user;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !passwordConfirm) {
      toast.error('Please enter all required fields');
    }

    if (password !== passwordConfirm) {
      toast.error('Password did not match');
      return;
    }

    try {
      await signUpWithEmailAndPassword(email, password);

      toast.success('A confirmation has been sent to your email');
      window.localStorage.setItem('emailToVerify', email);
    } catch (errors) {
      toast.error(errors.message);
    }
  };

  const handleGeneralChange = (e) => {
    const { value, name } = e.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <Form onSubmit={handleSubmit} onChange={handleGeneralChange}>
      <h1>Sign Up</h1>
      <Form.Text>You don't have an account?</Form.Text>
      <FormInput
        label="Email"
        placeholder="Enter email"
        type="email"
        name="email-signup"
        id="email"
        value={email}
        onChange={() => { }}
      />
      <FormInput
        label="Password"
        placeholder="Enter password"
        type="password"
        name="password"
        id="password-signup"
        value={password}
        onChange={() => { }}
      />
      <FormInput
        label="Confirm Password"
        placeholder="Enter confirm password"
        type="password"
        name="passwordConfirm"
        id="password-confirm"
        value={passwordConfirm}
        onChange={() => { }}
      />
      <Button variant="dark" type="submit">
        Sign Up
      </Button>
    </Form>
  );
};

export default SignUpForm;
