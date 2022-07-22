import { MongooseDoc } from 'shares/utils/mongo/mongo.types';
export type Role = 'subscriber' | 'admin';
export interface IUser {
  email: string;
  displayName: string;
  role?: Role;
  accessToken?: string;
  status?: boolean;
  address?: string;
}

export interface IUserDocument extends IUser, MongooseDoc { }
