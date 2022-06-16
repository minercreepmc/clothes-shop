const { Schema, model, ObjectId } = require('mongoose');

const subCategorySchema = new Schema(
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
    categoryId: {
      type: ObjectId,
      ref: 'Category',
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = model('SubCategories', subCategorySchema, 'subCategories');
