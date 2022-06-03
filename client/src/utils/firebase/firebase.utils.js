import { initializeApp } from 'firebase/app';
import {
  getAuth,
  sendSignInLinkToEmail,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC-NoYWpYi5Qk6L26NK8iWDIfRzsAcOHMw',
  authDomain: 'clothes-shop-users-db-77d65.firebaseapp.com',
  projectId: 'clothes-shop-users-db-77d65',
  storageBucket: 'clothes-shop-users-db-77d65.appspot.com',
  messagingSenderId: '831625397643',
  appId: '1:831625397643:web:9eeb92d6e60e53aa171b8e',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const signUpWithEmail = async (email) => {
  const actionCodeSettings = {
    url: 'http://localhost:3000/auth/complete',
    handleCodeInApp: true,
  };
  await sendSignInLinkToEmail(auth, email, actionCodeSettings);
};

export const signUpWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    // TODO: fancy this
    alert('Missing email and password');
    return;
  }

  const user = await createUserWithEmailAndPassword(auth, email, password);
  await user.sendEmailVerification();
};
