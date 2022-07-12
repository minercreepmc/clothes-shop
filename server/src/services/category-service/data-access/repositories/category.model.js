const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

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
    subCategoriesId: [{ type: ObjectId }],
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

categorySchema.virtual('products', {
  ref: 'Product',
  localField: '_id',
  foreignField: 'categoryId',
});

categorySchema.post('findOneAndDelete', async (doc) => {
  const { subCategoriesId } = doc;

  const SubCategoryModel = mongoose.model('SubCategory');

  await SubCategoryModel.remove({ _id: { $in: subCategoriesId } });
});

module.exports = mongoose.model('Category', categorySchema, 'category');
