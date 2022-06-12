const { Schema, model } = require('mongoose');

const categorySchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: 'Name is required',
      minlength: [2, 'Name is too short'],
      maxlength: [32, 'Name is too long'],
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
  },
  { timestamps: true },
);

module.exports = model('Category', categorySchema);
