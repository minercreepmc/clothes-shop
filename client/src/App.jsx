import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';

import Auth from 'routes/auth/auth.component';
import Home from 'routes/home/home.component';
import Navbar from 'routes/navbar/navbar.component';
import UserDashboard from 'routes/user-dashboard/user-dashboard.component';
import NotFound from 'routes/notfound/notfound.component';
import ProtectedUser from 'components/protected-user/protected-user.component';

import 'react-toastify/dist/ReactToastify.css';
import { onAuthStateChangeListener } from 'utils/firebase/firebase.utils';
import { setCurrentUser } from 'store/user/user.action';

import { httpGetCurrentUser, httpUpsertUser } from 'hooks/requests.hook';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChangeListener(async (userMetadata) => {
      if (userMetadata) {
        await httpUpsertUser(userMetadata.accessToken);
        const user = await httpGetCurrentUser(userMetadata.accessToken);
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
      <Routes>
        <Route element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="auth/*" element={<Auth />} />
          <Route
            path="dashboard/*"
            element={
              <ProtectedUser>
                <UserDashboard />
              </ProtectedUser>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
