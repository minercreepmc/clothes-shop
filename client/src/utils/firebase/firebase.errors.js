export async function handleError(error) {
  switch (error.code) {
    case 'auth/email-already-in-use':
      throw new Error('Email already in use');
    case 'auth/user-not-found':
      throw new Error('Email does not exist');
    case 'auth/invalid-email':
      throw new Error('Email is not valid');
    default:
      throw error;
  }
}
