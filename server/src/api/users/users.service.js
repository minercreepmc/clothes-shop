const userRepo = require('./users.repository');
const { getSubStringFromTo } = require('#shares/utils/logics/logics.utils');

async function createAndUpdateUser(data) {
  const userData = {
    email: data.email,
    displayName: data.name || getSubStringFromTo(data.email, 0, '@'),
    address: data.address,
  };

  const user = await userRepo.upsertUser(userData);
  return user;
}

async function createUser(data) {
  const userData = {
    email: data.email,
    displayName: data.name || getSubStringFromTo(data.email, 0, '@'),
  };

  const newUser = await userRepo.createUser(userData);
  return newUser;
}

async function getCurrentUser(data) {
  const user = await userRepo.getUserByEmail(data.email);
  return user;
}

module.exports = {
  createUser,
  createAndUpdateUser,
  getCurrentUser,
};
