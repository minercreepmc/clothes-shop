import userModel from './user.model';
import { IUser } from './user.types';

export async function createUser(user: IUser) {
  const newUser = await userModel.create(user);

  return newUser;
}

export async function upsertUser(user: IUser) {
  const newUser = await userModel.findOneAndUpdate(
    { email: user.email },
    { $set: { ...user } },
    { upsert: true, new: true }
  );

  return newUser;
}

export async function getUserByEmail(
  email: string
) {
  const user = await userModel.findOne({ email });

  return user;
}

export async function isUserExist(filter: object) {
  const userExist = await userModel.exists(filter);

  return userExist;
}

export async function isDisplayNameExist(displayName: string) {
  const userExist = await userModel.exists({ displayName });

  return userExist;
}
