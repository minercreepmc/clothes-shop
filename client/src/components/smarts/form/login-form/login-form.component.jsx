import { useState } from 'react';
import { Button, ButtonGroup, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import FormInput from 'components/reusables/form-group/form-input/form-input.component';
import {
  loginUserWithEmailAndPassword,
  loginWithGooglePopUp,
} from 'shares/utils/firebase/firebase.utils';
import { AiFillGoogleCircle } from 'react-icons/ai';

import { httpUpsertUser } from 'shares/hooks/requests/users/user-requests.hook';

const INITIAL_USER_STATE = { email: '', password: '' };

const LoginForm = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isGoogleLoggingIn, setIsGoogleLoggingIn] = useState(false);
  const [user, setUser] = useState(INITIAL_USER_STATE);

  const { email, password } = user;
  const handleSubmit = async (e) => {
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

      setUser(INITIAL_USER_STATE);

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

  const handleGeneralChange = (e) => {
    const { value, name } = e.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <Form onSubmit={handleSubmit} onChange={handleGeneralChange}>
      <h1>Login</h1>
      <Form.Text>Already have an account!!</Form.Text>
      <FormInput
        name="email"
        id="email-login"
        label="Email address"
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={() => { }}
      />

      <FormInput
        name="password"
        id="password-login"
        label="Password"
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={() => { }}
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

export default LoginForm;
