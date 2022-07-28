import { Document, SortOrder } from "mongoose";
import { ObjectId } from "shares/utils/mongo/mongo.types";


export enum Color {
  'Black', 'Brown', 'Silver', 'White', 'Blue', 'Red'
}

export enum Brand {
  'Hermes', 'Prada', 'Chanel', 'Ralph Lauren', 'Burberry'
}

export interface IProduct {
  title: string;
  slug: string;
  description: string;
  price: number;
  discount?: number;
  categoryId: string | ObjectId;
  subCategoriesId: { _id: string }[] | { _id: ObjectId }[];
  quantity: number,
  sold?: number,
  images: string[],
  shipping: boolean,
  color: Color,
  brand: Brand
};

export interface IProductDocument extends IProduct, Document { };

// export interface IProductParams {
//   _id?: string | ObjectId;
//   slug?: string;
// }

export interface IProductParams {
  _id?: string | ObjectId;
  slug?: string;
}

export type IProductSort = string | { [key: string]: SortOrder };

interface _IProductQuery {
  limit: number;
  sort: IProductSort
  priceFrom: number;
  categoryId?: string | ObjectId;
  subCategoryId?: string | ObjectId;
  descriptionTruncate?: number;
}

export interface IProductQueryWithSkip extends _IProductQuery {
  skip: number;
  page?: never;
}

export interface IProductQueryWithPage extends _IProductQuery {
  skip?: never;
  page: number;
}

export interface IProductFilter extends IProductParams, IProductQueryWithSkip { };



