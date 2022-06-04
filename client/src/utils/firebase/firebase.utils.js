import { initializeApp } from 'firebase/app';
import {
  getAuth,
  sendSignInLinkToEmail,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  isSignInWithEmailLink,
  sendEmailVerification,
  signInWithEmailLink,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
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

  const { user } = await createUserWithEmailAndPassword(auth, email, password);

  await sendEmailVerification(user);

  return user;
};

export const verifyEmail = async (email) => {
  const emailLink = window.location.href;

  if (isSignInWithEmailLink(auth, emailLink)) {
    return await signInWithEmailLink(auth, email, emailLink);
  }
};

export const onAuthStateChangeListener = (callback) => {
  return onAuthStateChanged(auth, callback);
};

export const loginUser = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const loginWithGooglePopUp = async () => {
  const googleProvider = new GoogleAuthProvider();
  return signInWithPopup(auth, googleProvider);
};

export const logOutUser = async () => {
  return signOut(auth);
};
