import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button, Form } from 'react-bootstrap';
import FormGroup from 'components/form-group/form-group.component';

import { selectCurrentUserEmail } from 'store/user/user.selector';
import { selectModalPasswordShow } from 'store/modal/modal.selector';
import { setShowModalPassword } from 'store/modal/modal.action';

import { updateUserPassword } from 'utils/firebase/firebase.utils';

const userInformationTemplate = {
  password: '',
};

const DashboardInformation = () => {
  const dispatch = useDispatch();

  const currentUserEmail = useSelector(selectCurrentUserEmail);
  const modalPasswordShow = useSelector(selectModalPasswordShow);

  const [userInfo, setUserInfo] = useState(userInformationTemplate);

  const { password } = userInfo;

  const handleEnableChange = (e) => {
    e.preventDefault();

    dispatch(setShowModalPassword(!modalPasswordShow));
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
        disabled
        onChange={() => { }}
      ></FormGroup>

      <Button type="submit" variant="outline-dark" onClick={handleEnableChange}>
        Update Informations
      </Button>
    </Form>
  );
};

export default DashboardInformation;
