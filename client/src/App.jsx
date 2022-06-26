import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';

import { onAuthStateChangeListener } from 'shares/utils/firebase/firebase.utils';
import { setCurrentUser } from 'shares/store/user/user.action';

import { fetchCategoriesAsync } from 'shares/store/categories/categories.action';
import { fetchProductsAsync } from 'shares/store/products/products.action';
import { fetchSubCategoriesAsync } from 'shares/store/sub-categories/sub-categories.action';

import {
  httpGetCurrentUser,
  httpUpsertUser,
} from 'shares/hooks/requests/users/user-requests.hook';

import AppRoute from 'routes';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const dispatch = useDispatch();

  //TODO: Clean this
  useEffect(() => {
    dispatch(fetchCategoriesAsync());
    dispatch(fetchSubCategoriesAsync());
    dispatch(fetchProductsAsync());

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
      <AppRoute />
      <ToastContainer />
    </>
  );
};

export default App;
