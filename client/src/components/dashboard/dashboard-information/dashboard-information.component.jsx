import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button, Form } from 'react-bootstrap';
import FormGroup from 'components/form-group/form-input/form-input.component';

import { selectCurrentUserEmail } from 'shares/store/user/user.selector';
import {
  selectIsChanging,
  selectModalPasswordShow,
} from 'shares/store/dashboard/dashboard.selector';
import {
  setIsChanging,
  setShowModalPassword,
} from 'shares/store/dashboard/dashboard.action';

import { updateUserPassword } from 'shares/utils/firebase/firebase.utils';
import { toast } from 'react-toastify';
import PrimaryButton from 'components/button/primary-button/primary-button.component';

const userInformationTemplate = {
  password: '',
};

const DashboardInformation = () => {
  const dispatch = useDispatch();

  const currentUserEmail = useSelector(selectCurrentUserEmail);
  const modalPasswordShow = useSelector(selectModalPasswordShow);
  const isChanging = useSelector(selectIsChanging);

  const [userInfo, setUserInfo] = useState(userInformationTemplate);

  const { password } = userInfo;

  const handleEnableChange = (e) => {
    e.preventDefault();

    dispatch(setShowModalPassword(!modalPasswordShow));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateUserPassword(userInfo.password);

      dispatch(setIsChanging(false));
      toast.success('Successfully updated informations');
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleChange = (e) => {
    const input = e.target;
    setUserInfo({ ...userInfo, [input.name]: input.value });
  };

  return (
    <Form onChange={handleChange}>
      <FormGroup
        name="email"
        type="email"
        label="Email"
        placeholder={currentUserEmail}
        disabled
      />

      <FormGroup
        name="password"
        type="password"
        label="Password"
        placeholder="********"
        value={password}
        disabled={!isChanging}
        onChange={() => { }}
      ></FormGroup>

      <PrimaryButton
        type="submit"
        variant="outline-secondary"
        onClick={!isChanging ? handleEnableChange : handleSubmit}
      >
        {!isChanging ? 'Update Informations' : 'Submit'}
      </PrimaryButton>
    </Form>
  );
};

export default DashboardInformation;
