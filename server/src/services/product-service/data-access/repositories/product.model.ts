import mongoose from 'mongoose';
import { IProductDocument } from './product.types';
const { ObjectId } = mongoose.Schema.Types;

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, 'Title is required'],
      maxlength: [32, 'Title cannot be longer than 32 characters'],
      text: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      maxlength: [2000, 'Description cannot be longer than 2000 characters'],
      text: true,
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      trim: true,
      maxlength: [32, 'Price cannot be longer than 32 characters'],
    },
    discount: {
      type: Number,
      max: [100, 'Maximum of discount is 100%'],
      min: [1, 'Minimum of discount is 1%'],
    },
    categoryId: {
      type: ObjectId,
      ref: 'Category',
    },
    subCategoriesId: [
      {
        type: ObjectId,
        ref: 'SubCategory',
      },
    ],
    quantity: Number,
    sold: {
      type: Number,
      default: 0,
    },
    images: {
      type: Array,
    },
    shipping: {
      type: String,
      enum: ['Yes', 'No'],
    },
    color: {
      type: String,
      enum: ['Black', 'Brown', 'Silver', 'White', 'Blue', 'Red'],
    },
    brand: {
      type: String,
      enum: ['Hermes', 'Prada', 'Chanel', 'Ralph Lauren', 'Burberry'],
    },
    variant: [
      {
        color: {
          type: String,
          enum: ['Black', 'Brown', 'Silver', 'White', 'Blue', 'Red'],
        },
        size: {
          type: String,
          enum: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        },
        quantity: Number,
      },
    ],
  },
  {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

productSchema.virtual('categories', {
  ref: 'Category',
  localField: 'categoryId',
  foreignField: '_id',
});

productSchema.virtual('subcategories', {
  ref: 'SubCategory',
  localField: 'subCategoriesId',
  foreignField: '_id',
});

export default mongoose.model<IProductDocument>('Product', productSchema);
