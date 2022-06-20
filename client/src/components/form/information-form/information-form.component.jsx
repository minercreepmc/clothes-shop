import { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import FormInput from 'components/form-group/form-input/form-input.component';
import PrimaryButton from 'components/button/primary-button/primary-button.component';

import { DashboardContext } from 'shares/contexts/dashboard.context';

import { selectCurrentUser } from 'shares/store/user/user.selector';

import { updateUserPassword } from 'shares/utils/firebase/firebase.utils';
import { toast } from 'react-toastify';

const InformationForm = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: { email: '', password: '' },
  });

  const {
    isInformationChanging,
    setIsInformationChanging,
    setIsModalPasswordShow,
  } = useContext(DashboardContext);

  const { email } = useSelector(selectCurrentUser);

  const handleEnableChange = (e) => {
    e.preventDefault();

    setIsModalPasswordShow(true);
  };

  const onSubmit = async (data) => {
    const { password } = data;

    try {
      await updateUserPassword(password);

      setIsInformationChanging(false);
      toast.success('Successfully updated informations');
    } catch (error) {
      toast.error(error.message);
    }
  };

  const onError = (errors) => {
    console.warn(errors);
    toast.error(errors);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormInput
        name="email"
        type="email"
        label="Email"
        id="email"
        placeholder={email}
        defaultValue=""
        control={control}
        disabled
      />

      <FormInput
        name="password"
        type="password"
        label="Password"
        id="password"
        placeholder="********"
        defaultValue=""
        rules={{ required: 'Please provide password' }}
        control={control}
        disabled={!isInformationChanging}
      />

      <PrimaryButton
        type="submit"
        variant="outline-secondary"
        onClick={!isInformationChanging ? handleEnableChange : handleSubmit}
      >
        {!isInformationChanging ? 'Update Informations' : 'Submit'}
      </PrimaryButton>
    </Form>
  );
};

export default InformationForm;
