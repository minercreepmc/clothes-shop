import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { httpCurrentAdmin } from 'shares/hooks/requests/users/user-requests.hook';
import { selectCurrentUser } from 'shares/store/user/user.selector';

const ProtectedAdmin = ({ children }) => {
  const currentUser = useSelector(selectCurrentUser);

  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const checkIsUserAdmin = async () => {
      if (currentUser?.accessToken) {
        try {
          await httpCurrentAdmin(currentUser.accessToken);
          setIsAuthorized(true);
        } catch (error) {
          console.log(error);
          setIsAuthorized(false);
        }
      }
    };

    checkIsUserAdmin();
  }, [currentUser]);

  return isAuthorized ? children : <div>Loading...</div>;
};

export default ProtectedAdmin;
