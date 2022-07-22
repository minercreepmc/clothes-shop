import { Schema, model } from 'mongoose';


import { ICategoryDocument } from './category.types';

const categorySchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'Name is required'],
      minlength: [2, 'Name is too short'],
      maxlength: [32, 'Name is too long'],
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    subCategoriesId: [{ type: Schema.Types.ObjectId }],
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
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

  const SubCategoryModel = model('SubCategory');

  await SubCategoryModel.remove({ _id: { $in: subCategoriesId } });
});

export default model<ICategoryDocument>('Category', categorySchema, 'category');
