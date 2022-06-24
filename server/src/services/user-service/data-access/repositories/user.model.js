const { Schema, model } = require('mongoose');

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
  { timestamps: true },
);

module.exports = model('User', userSchema);
