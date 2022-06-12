import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button, Form } from 'react-bootstrap';
import FormGroup from 'components/form-group/form-group.component';

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
        className="mb-3"
        name="email"
        type="email"
        label="Email"
        placeholder={currentUserEmail}
        disabled
      />

      <FormGroup
        className="mb-3"
        name="password"
        type="password"
        label="Password"
        placeholder="********"
        value={password}
        disabled={!isChanging}
        onChange={() => { }}
      ></FormGroup>

      <Button
        type="submit"
        variant="outline-dark"
        onClick={!isChanging ? handleEnableChange : handleSubmit}
      >
        {!isChanging ? 'Update Informations' : 'Submit'}
      </Button>
    </Form>
  );
};

export default DashboardInformation;
