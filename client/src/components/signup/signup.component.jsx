import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

import FormGroup from 'components/form-group/form-group.component';

import { signUpWithEmailAndPassword } from 'utils/firebase/firebase.utils';
const newUserTemplate = {
  displayName: '',
  email: '',
  password: '',
  passwordConfirm: '',
};

const SignUp = () => {
  const [newUser, setNewUser] = useState(newUserTemplate);

  const { displayName, email, password, passwordConfirm } = newUser;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !passwordConfirm || !displayName) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (password !== passwordConfirm) {
      toast.error('Password did not match');
      return;
    }

    try {
      const user = await signUpWithEmailAndPassword(email, password);
      // TODO:
      //user.displayName = name;
      toast.success('A confirmation has been sent to your email');

      window.localStorage.setItem('emailToVerify', email);

      setNewUser(newUserTemplate);
    } catch (errors) {
      console.error(errors);
      toast.error('Something went wrong');
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
        label="Display Name"
        placholder="Enter a display name"
        type="text"
        name="name"
      />
      <FormGroup
        label="Email"
        placholder="Enter email"
        type="email"
        name="email"
      />
      <FormGroup
        label="Password"
        placholder="Enter password"
        type="password"
        name="password"
      />
      <FormGroup
        label="Confirm Password"
        placholder="Enter confirm password"
        type="password"
        name="passwordConfirm"
      />
      <Button variant="dark" type="submit">
        Sign Up
      </Button>
    </Form>
  );
};

export default SignUp;
