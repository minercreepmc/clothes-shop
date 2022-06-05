import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCurrentUser } from 'store/user/user.selector';
import AuthForm from 'components/auth-form/auth-form.component';
import AuthComplete from 'routes/auth-complete/auth-complete.component';
import ForgotPassword from 'components/forgot-password/forgot-password.component';

const Auth = () => {
  const currentUser = useSelector(selectCurrentUser);

  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate('/');
    }
  }, [currentUser, navigate]);

  return (
    <Routes>
      <Route index element={<AuthForm />} />
      <Route path="complete" element={<AuthComplete />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
};

export default Auth;
