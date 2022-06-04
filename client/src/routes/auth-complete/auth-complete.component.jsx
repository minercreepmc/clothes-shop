import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { verifyEmail } from 'utils/firebase/firebase.utils';

const AuthComplete = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const verifyEmailAndRedirect = async () => {
      try {
        const email = window.localStorage.getItem('emailToVerify');
        const userCredential = await verifyEmail(email);
        window.localStorage.removeItem('emailToVerify');
      } catch (errors) {
        console.error(errors);
      }

      navigate('/');
    };
    verifyEmailAndRedirect();
  }, [navigate]);

  return <div>You will be redirected to home</div>;
};

export default AuthComplete;
