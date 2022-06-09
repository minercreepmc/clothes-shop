import { useSelector } from 'react-redux';

import { Button } from 'react-bootstrap';
import FormGroup from 'components/form-group/form-group.component';
import { selectCurrentUserEmail } from 'store/user/user.selector';

const DashboardInformation = () => {
  const currentUserEmail = useSelector(selectCurrentUserEmail);

  return (
    <>
      <FormGroup
        className="mb-3"
        type="email"
        label="Email"
        placeholder={currentUserEmail}
        disabled
      />

      <FormGroup
        className="mb-3"
        type="password"
        label="Password"
        placeholder="********"
        disabled
      />

      <Button variant="dark">Change password</Button>
    </>
  );
};

export default DashboardInformation;
