import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';

import { onAuthStateChangeListener } from 'shares/utils/firebase/firebase.utils';
import { setCurrentUser } from 'shares/store/user/user.action';

import { setCategories } from 'shares/store/categories/categories.action';
import { setProducts } from 'shares/store/products/products.action';
import { setSubCategories } from 'shares/store/sub-categories/sub-categories.action';

import {
  httpGetCurrentUser,
  httpUpsertUser,
} from 'shares/hooks/requests/users/user-requests.hook';
import { httpGetCategories } from 'shares/hooks/requests/categories/category-requests.hook';
import { httpGetSubCategories } from 'shares/hooks/requests/sub-categories/sub-categories.hook';

import AppRoute from 'routes';
import 'react-toastify/dist/ReactToastify.css';
import { httpGetProducts } from 'shares/hooks/requests/products/products.hook';

const App = () => {
  const dispatch = useDispatch();

  //TODO: Clean this
  useEffect(() => {
    async function loadCategories() {
      const categories = await httpGetCategories();
      dispatch(setCategories(categories));
    }

    async function loadSubCategories() {
      const subCategories = await httpGetSubCategories();
      dispatch(setSubCategories(subCategories));
    }
    async function loadProducts() {
      const products = await httpGetProducts();
      dispatch(setProducts(products));
    }

    async function loadShopData() {
      await loadCategories();
      await loadSubCategories();
      await loadProducts();
    }

    loadShopData();

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
