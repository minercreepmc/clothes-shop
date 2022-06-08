const usersModel = require('./users.model');

async function createUser(user) {
  const newUser = await usersModel.create({ ...user });

  return newUser;
}

async function upsertUser(user) {
  const newUser = await usersModel.findOneAndUpdate(
    { email: user.email },
    { $set: { ...user } },
    { upsert: true, new: true },
  );

  return newUser;
}

async function getUserByEmail(email) {
  const user = await usersModel.findOne({ email });

  return user;
}

async function isUserExist(filter) {
  const userExist = await usersModel.exists({ ...filter });

  return userExist;
}

async function isDisplayNameExist(displayName) {
  const userExist = await usersModel.exists({ displayName });

  return userExist;
}

module.exports = {
  createUser,
  upsertUser,
  getUserByEmail,
  isUserExist,
  isDisplayNameExist,
};
