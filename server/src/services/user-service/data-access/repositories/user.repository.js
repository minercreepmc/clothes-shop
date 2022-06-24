const userModel = require('./user.model');

async function createUser(user) {
  const newUser = await userModel.create({ ...user });

  return newUser;
}

async function upsertUser(user) {
  const newUser = await userModel.findOneAndUpdate(
    { email: user.email },
    { $set: { ...user } },
    { upsert: true, new: true },
  );

  return newUser;
}

async function getUserByEmail(email) {
  const user = await userModel.findOne({ email });

  return user;
}

async function isUserExist(filter) {
  const userExist = await userModel.exists({ ...filter });

  return userExist;
}

async function isDisplayNameExist(displayName) {
  const userExist = await userModel.exists({ displayName });

  return userExist;
}

module.exports = {
  createUser,
  upsertUser,
  getUserByEmail,
  isUserExist,
  isDisplayNameExist,
};
