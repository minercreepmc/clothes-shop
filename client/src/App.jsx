import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { AiOutlineArrowUp } from 'react-icons/ai';
import ScrollTop from 'react-scrolltop-button';

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

import { APP_COLOR } from 'shares/themes';
const theme = {
  colors: APP_COLOR,
};
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
        // TODO: Fix this
      }
    });
  }, [dispatch, navigate]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppRoute />
      </ThemeProvider>
      <ToastContainer />
      <ScrollTop
        text="Back to Top"
        distance={100}
        breakpoint={768}
        style={{ backgroundColor: 'red' }}
        className="scroll-your-role"
        speed={1000}
        target={75}
        icon={<AiOutlineArrowUp />}
      />
    </>
  );
};

export default App;
