import { Schema, model } from 'mongoose';

import { IUserDocument } from './user.types';

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      index: true,
      unique: true,
    },
    displayName: {
      type: String,
      required: true,
    },
    accessToken: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: 'subscriber',
    },
    status: {
      type: Boolean,
      default: false,
    },
    address: String,
  },
  { timestamps: true }
);

export default model<IUserDocument>('User', userSchema);
