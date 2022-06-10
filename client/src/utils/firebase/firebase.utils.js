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
  sendPasswordResetEmail,
  GoogleAuthProvider,
  updateProfile,
  updatePassword,
  EmailAuthProvider,
  reauthenticateWithCredential,
} from 'firebase/auth';

import {
  firebaseConfig,
  settingsSignUpRedirect,
  settingsSignUpEmailPassword,
  settingsResetPasswordRedirect,
} from './firebase.configs';

import { handleError } from './firebase.errors';

initializeApp(firebaseConfig);
const auth = getAuth();

export const signUpWithEmail = async (email) => {
  await sendSignInLinkToEmail(auth, email, settingsSignUpRedirect);
};

export const signUpWithEmailAndPassword = async (email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    await sendEmailVerification(user, settingsSignUpEmailPassword);

    return user;
  } catch (error) {
    handleError(error);
  }
};

export const updateUserProfile = async ({ displayName }) => {
  return updateProfile(auth.currentUser, {
    displayName,
  });
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

export const loginUserWithEmailAndPassword = async (email, password) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    handleError(error);
  }
};

export const loginWithGooglePopUp = () => {
  const googleProvider = new GoogleAuthProvider();
  return signInWithPopup(auth, googleProvider);
};

export const logOutUser = async () => {
  return signOut(auth);
};

export const getCurrentUser = () => {
  return auth.currentUser;
};

export const updateUserPassword = async (newPassword) => {
  const currentUser = getCurrentUser();
  return await updatePassword(currentUser, newPassword);
};

export const resetPasswordWithEmailLink = async (email) => {
  try {
    return await sendPasswordResetEmail(
      auth,
      email,
      settingsResetPasswordRedirect,
    );
  } catch (error) {
    handleError(error);
  }
};

export const reAuthenticateWithPassword = async (password) => {
  const currentUser = getCurrentUser();
  const credential = EmailAuthProvider.credential(currentUser.email, password);
  console.log(credential);

  return await reauthenticateWithCredential(currentUser, credential);
};
