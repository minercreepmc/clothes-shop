import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';

import { onAuthStateChangeListener } from 'shares/utils/firebase/firebase.utils';
import { setCurrentUser } from 'shares/store/user/user.action';
import { setCategories, setSubCategories } from 'shares/store/shop/shop.action';
import {
  httpGetCurrentUser,
  httpUpsertUser,
} from 'shares/hooks/requests/users/user-requests.hook';
import { httpGetCategories } from 'shares/hooks/requests/categories/category-requests.hook';
import { httpGetSubCategories } from 'shares/hooks/requests/sub-categories/sub-categories.hook';

import AppRoute from 'routes';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadCategories() {
      const categories = await httpGetCategories();
      dispatch(setCategories(categories));
    }

    async function loadSubCategories() {
      const subCategories = await httpGetSubCategories();
      console.log(subCategories);
      dispatch(setSubCategories(subCategories));
    }

    loadCategories();
    loadSubCategories();

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
