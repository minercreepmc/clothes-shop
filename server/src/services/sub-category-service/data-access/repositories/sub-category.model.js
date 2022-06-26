const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

const subCategorySchema = new mongoose.Schema(
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

subCategorySchema.post('save', async (doc) => {
  const { _id, categoryId } = doc;
  const CategoryModel = mongoose.model('Category');
  try {
    await CategoryModel.findOneAndUpdate(
      { _id: categoryId },
      { $push: { subCategoriesId: _id } },
    );
  } catch (errors) {
    console.error(errors);
  }
});

module.exports = mongoose.model(
  'SubCategory',
  subCategorySchema,
  'subCategories',
);
