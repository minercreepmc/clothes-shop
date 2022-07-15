const UserUseCase = require('../../domain/user.usecase');

const httpCreateUser = async (req, res, next) => {
  try {
    const newUser = await UserUseCase.createUser(req.user);
    return res.status(201).json(newUser);
  } catch (errors) {
    return next(errors);
  }
};

const httpUpsertUser = async (req, res, next) => {
  try {
    const user = await UserUseCase.createAndUpdateUser(req.user);
    return res.status(200).json(user);
  } catch (errors) {
    return next(errors);
  }
};

const httpGetCurrentUser = async (req, res, next) => {
  try {
    const user = await UserUseCase.getCurrentUser(req.user);
    return res.status(200).json(user);
  } catch (errors) {
    return next(errors);
  }
};

module.exports = {
  httpCreateUser,
  httpUpsertUser,
  httpGetCurrentUser,
};
