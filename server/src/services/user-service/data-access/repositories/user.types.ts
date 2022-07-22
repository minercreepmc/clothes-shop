import { MongooseDoc } from 'shares/utils/mongo/mongo.types';
export type Role = 'subscriber' | 'admin';
export interface IUser {
  email: string;
  displayName: string;
  accessToken: string;
  role: Role;
  status?: boolean;
  address?: string;
}

export interface IUserDocument extends IUser, MongooseDoc {}
