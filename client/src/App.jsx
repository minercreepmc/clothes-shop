import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';

import Auth from 'routes/auth/auth.component';
import Home from 'routes/home/home.component';
import Navbar from 'routes/navbar/navbar.component';

import 'react-toastify/dist/ReactToastify.css';
import { onAuthStateChangeListener } from 'utils/firebase/firebase.utils';

import { setCurrentUser } from 'store/user/user.action';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChangeListener((user) => {
      if (user) {
        const { email, displayName, accessToken, role } = user;
        dispatch(setCurrentUser({ email, displayName, accessToken, role }));
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
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
