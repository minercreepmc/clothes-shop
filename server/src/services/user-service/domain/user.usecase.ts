import * as userRepo from '../data-access/repositories/user.repository';
import { IUser, IUserDocument } from '../data-access/repositories/user.types';
import { getSubStringFromTo } from 'shares/utils/logics/logics.utils';

/**
 * Update and creata user if not exist
 *
 * @async
 * @param {IUser} data - Data to create/update
 * @returns {Promise<IUserDocument>} 
 */
export async function createAndUpdateUser(data: IUser): Promise<IUserDocument> {
  const userData = {
    email: data.email,
    displayName: data.displayName || getSubStringFromTo(data.email, 0, '@'),
    address: data.address,
  };

  const user = await userRepo.upsertUser(userData);
  return user;
}

/**
 * Create user
 *
 * @async
 * @param {IUser} data - Data to create user
 * @returns {Promise<IUserDocument>} Return new user
 */
export async function createUser(data: IUser): Promise<IUserDocument> {
  const userData = {
    email: data.email,
    displayName: data.displayName || getSubStringFromTo(data.email, 0, '@'),
  };

  const newUser = await userRepo.createUser(userData);
  return newUser;
}

/**
 * Get current active user
 *
 * @async
 * @param {IUser} email - Email data to get user
 * @returns {Promise<IUserDocument | null>} [TODO:description]
 */
export async function getCurrentUserByEmail(email: string): Promise<IUserDocument | null> {
  const user = await userRepo.getUserByEmail(email);
  return user;
}

