import { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import FormInput from 'components/reusables/form-group/form-input/form-input.component';
import PrimaryButton from 'components/reusables/button/primary-button/primary-button.component';

import { DashboardContext } from 'shares/contexts/dashboard.context';
import { DashboardInformationContext } from 'shares/contexts/dashboard-information.context';

import { selectCurrentUser } from 'shares/store/user/user.selector';

import { updateUserPassword } from 'shares/utils/firebase/firebase.utils';
import { toast } from 'react-toastify';

const InformationForm = () => {
  const { password, setPassword } = useContext(DashboardInformationContext);

  const {
    isInformationChanging,
    setIsInformationChanging,
    setIsModalPasswordShow,
  } = useContext(DashboardContext);

  const { email } = useSelector(selectCurrentUser);

  const handleEnableChange = () => {
    setIsModalPasswordShow(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password === '') {
      toast.error('Please fill in password');
      return;
    }

    try {
      await updateUserPassword(password);

      setIsInformationChanging(false);
      toast.success('Successfully updated informations');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormInput
        name="email"
        type="email"
        label="Email"
        id="email"
        value={email}
        disabled
      />

      <FormInput
        name="password"
        type="password"
        label="Password"
        id="password"
        placeholder="********"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
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
