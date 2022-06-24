const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
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
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

categorySchema.virtual('subcategories', {
  ref: 'SubCategory',
  localField: '_id',
  foreignField: 'categoryId',
});

module.exports = mongoose.model('Category', categorySchema, 'category');
