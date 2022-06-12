import { useState } from 'react';
import { Button, ButtonGroup, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import FormGroup from 'components/form-group/form-group.component';
import {
  loginUserWithEmailAndPassword,
  loginWithGooglePopUp,
} from 'shares/utils/firebase/firebase.utils';
import { AiFillGoogleCircle } from 'react-icons/ai';

import { httpUpsertUser } from 'shares/hooks/requests/users/user-requests.hook';

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
      const userCredential = await loginUserWithEmailAndPassword(
        email,
        password,
      );

      console.log(userCredential);
    } catch (errors) {
      toast.error(errors.message);
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setIsGoogleLoggingIn(true);
      const userCredential = await loginWithGooglePopUp();
      await httpUpsertUser(userCredential.user.accessToken);

      toast.success('Login Successful');
    } catch (errors) {
      console.error(errors);
      toast.error('Something went wrong');
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

      <br />
      <Link className="float-end" to="/auth/forgot-password">
        Forgot password?
      </Link>
    </Form>
  );
};

export default Login;
