import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCurrentUser } from 'shares/store/user/user.selector';

import AuthForm from 'pages/auth-page/auth-page.component';
import AuthComplete from 'pages/auth-complete/auth-complete.component';
import ForgotPassword from 'pages/forgot-password/forgot-password.component';

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
