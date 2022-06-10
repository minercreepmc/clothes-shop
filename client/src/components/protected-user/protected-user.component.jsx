import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectCurrentUser } from 'store/user/user.selector';

const ProtectedUser = ({ children }) => {
  const user = useSelector(selectCurrentUser);

  return user?.accessToken ? children : <Navigate to="/auth" replace />;
};

export default ProtectedUser;
