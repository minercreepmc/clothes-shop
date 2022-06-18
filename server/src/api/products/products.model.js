const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: 'Title is required',
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
      required: 'Description is required',
      maxlength: [2000, 'Description cannot be longer than 2000 characters'],
      text: true,
    },
    price: {
      type: Number,
      required: 'Price is required',
      trim: true,
      maxlength: [32, 'Price cannot be longer than 32 characters'],
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
  },
  { timestamps: true },
);

module.exports = mongoose.model('Product', productSchema);
