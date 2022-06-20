import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

import FormInput from 'components/form-group/form-input/form-input.component';

import { signUpWithEmailAndPassword } from 'shares/utils/firebase/firebase.utils';
import { useForm } from 'react-hook-form';

const SignUp = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: { email: '', password: '', passwordConfirm: '' },
  });

  const onSubmit = async (data) => {
    const { email, password, passwordConfirm } = data;

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

  const onError = (error) => {
    console.warn(error);
    toast.error('Please fill in all required fields');
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <h1>Sign Up</h1>
      <Form.Text>You don't have an account?</Form.Text>
      <FormInput
        label="Email"
        placeholder="Enter email"
        type="email"
        name="email"
        rules={{ required: true }}
        control={control}
      />
      <FormInput
        label="Password"
        placeholder="Enter password"
        type="password"
        name="password"
        rules={{ required: true }}
        control={control}
      />
      <FormInput
        label="Confirm Password"
        placeholder="Enter confirm password"
        type="password"
        name="passwordConfirm"
        rules={{ required: true }}
        control={control}
      />
      <Button variant="dark" type="submit">
        Sign Up
      </Button>
    </Form>
  );
};

export default SignUp;
