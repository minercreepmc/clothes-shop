const usersService = require('./users.service');

const httpCreateUser = async (req, res) => {
  try {
    const newUser = await usersService.createUser(req.user);
    return res.status(201).json(newUser);
  } catch (errors) {
    return res.status(400).json(errors);
  }
};

const httpUpsertUser = async (req, res) => {
  try {
    console.log(req.user);
    const user = await usersService.createAndUpdateUser(req.user);
    return res.status(200).json(user);
  } catch (errors) {
    return res.status(400).json(errors);
  }
};

const httpGetCurrentUser = async (req, res) => {
  try {
    const user = await usersService.getCurrentUser(req.user);
    return res.status(200).json(user);
  } catch (errors) {
    return res.status(400).json(errors);
  }
};

module.exports = {
  httpCreateUser,
  httpUpsertUser,
  httpGetCurrentUser,
};
