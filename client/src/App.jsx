import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';

import { onAuthStateChangeListener } from 'shares/utils/firebase/firebase.utils';
import {
  fetchCurrentUserAsync,
  setCurrentUser,
} from 'shares/store/user/user.action';

import { fetchCategoriesAsync } from 'shares/store/categories/categories.action';
import { fetchProductsAsync } from 'shares/store/products/products.action';
import { fetchSubCategoriesAsync } from 'shares/store/sub-categories/sub-categories.action';

import { httpUpsertUser } from 'shares/hooks/requests/users/user-requests.hook';

import AppRoute from 'routes';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //TODO: Clean this
  useEffect(() => {
    dispatch(fetchCategoriesAsync());
    dispatch(fetchSubCategoriesAsync());
    dispatch(fetchProductsAsync());

    onAuthStateChangeListener(async (userMetadata) => {
      if (userMetadata) {
        await httpUpsertUser(userMetadata.accessToken);
        dispatch(fetchCurrentUserAsync(userMetadata.accessToken));
      } else {
        dispatch(setCurrentUser(null));
        navigate('/auth');
      }
    });
  }, [dispatch, navigate]);

  return (
    <>
      <AppRoute />
      <ToastContainer />
    </>
  );
};

export default App;
