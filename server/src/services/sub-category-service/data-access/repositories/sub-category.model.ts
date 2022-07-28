import mongoose from 'mongoose';
import { ISubCategoryDocument } from './sub-category.types';
const { ObjectId } = mongoose.Schema.Types;

const subCategorySchema = new mongoose.Schema(
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

export default mongoose.model<ISubCategoryDocument>(
  'SubCategory',
  subCategorySchema,
  'subCategories',
);
