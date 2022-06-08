const userRepo = require('./users.repository');
const { checkUser } = require('./users.validator');
const { getSubStringFromTo } = require('#utils/logics/logics.utils');

async function createAndUpdateUser(data) {
  const { body, headers } = data;

  const userData = {
    email: body?.email,
    displayName: body?.displayName || getSubStringFromTo(data.email, 0, '@'),
    address: body?.address,
    accessToken: headers.accessToken,
  };

  const { success, errors } = checkUser(userData);
  if (!success) {
    throw errors;
  }

  const user = await userRepo.upsertUser(userData);
  return user;
}

async function createUser(data) {
  const { success, errors } = checkUser(data);
  if (!success) {
    throw errors;
  }

  const userData = {
    email: data.email,
    displayName: data.displayName || getSubStringFromTo(data.email, 0, '@'),
    address: data.address,
  };

  const newUser = await userRepo.createUser(userData);
  return newUser;
}

async function getCurrentUser(data) {
  const { success, errors } = checkUser(data);
  if (!success) {
    throw errors;
  }

  const user = await userRepo.getUserByEmail(data.email);
  return user;
}

module.exports = {
  createUser,
  createAndUpdateUser,
  getCurrentUser,
};
