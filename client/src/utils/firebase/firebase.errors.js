export function reThrowingError(error) {
  switch (error.code) {
    case 'auth/email-already-in-use':
      throw new Error('Email already in use');
    case 'auth/user-not-found':
      throw new Error('User not found');
    case 'auth/invalid-email':
      throw new Error('Email is not valid');
    case 'auth/wrong-password':
      throw new Error('Password is not valid');
    default:
      throw error;
  }
}
