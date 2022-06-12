import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { httpCurrentAdmin } from 'hooks/requests.hook';
import { selectCurrentUser } from 'store/user/user.selector';

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
