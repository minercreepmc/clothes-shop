import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';

import { onAuthStateChangeListener } from 'shares/utils/firebase/firebase.utils';
import { setCurrentUser } from 'shares/store/user/user.action';
import {
  httpGetCurrentUser,
  httpUpsertUser,
} from 'shares/hooks/requests/users/user-requests.hook';

import AppRoute from 'routes';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChangeListener(async (userMetadata) => {
      if (userMetadata) {
        await httpUpsertUser(userMetadata.accessToken);
        const user = await httpGetCurrentUser(userMetadata.accessToken);
        console.log(user);
        dispatch(
          setCurrentUser({ ...user, accessToken: userMetadata.accessToken }),
        );
      } else {
        dispatch(setCurrentUser(null));
      }
    });
  }, [dispatch]);

  return (
    <>
      <AppRoute />
      <ToastContainer />
    </>
  );
};

export default App;
