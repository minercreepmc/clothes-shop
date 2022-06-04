import { useState } from 'react';
import { Button, ButtonGroup, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

import FormGroup from 'components/form-group/form-group.component';
import { loginUser, loginWithGooglePopUp } from 'utils/firebase/firebase.utils';

import { AiFillGoogleCircle } from 'react-icons/ai';

const userToLogInTemplate = {
  email: '',
  password: '',
};

const Login = () => {
  const [userToLogIn, setUserToLogIn] = useState(userToLogInTemplate);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isGoogleLoggingIn, setIsGoogleLoggingIn] = useState(false);

  const { email, password } = userToLogIn;

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('Please fill in all required fields');
      return;
    }

    try {
      setIsLoggingIn(true);
      await loginUser(email, password);
    } catch (errors) {
      console.error(errors);
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setIsGoogleLoggingIn(true);
      await loginWithGooglePopUp();
    } catch (errors) {
      console.error(errors);
    } finally {
      setIsGoogleLoggingIn(false);
    }
  };

  const handleChange = (e) => {
    const input = e.target;

    setUserToLogIn({ ...userToLogIn, [input.name]: input.value });
  };

  return (
    <Form onSubmit={handleLogin} onChange={handleChange}>
      <h1>Login</h1>
      <Form.Text>Already have an account!!</Form.Text>
      <FormGroup
        name="email"
        label="Email address"
        type="email"
        placeholder="Enter email"
      />

      <FormGroup
        name="password"
        label="Password"
        type="password"
        placeholder="Enter password"
      />

      <ButtonGroup aria-label="Log in group">
        <Button variant="dark" type="submit" disabled={isLoggingIn}>
          {isLoggingIn ? 'Logging in..' : 'Login'}
        </Button>

        <Button
          variant="primary"
          type="button"
          onClick={!isGoogleLoggingIn ? handleGoogleLogin : null}
          disabled={isGoogleLoggingIn}
        >
          {isGoogleLoggingIn ? (
            'Logging in..'
          ) : (
            <>
              <AiFillGoogleCircle /> Login with google
            </>
          )}
        </Button>
      </ButtonGroup>
    </Form>
  );
};

export default Login;
