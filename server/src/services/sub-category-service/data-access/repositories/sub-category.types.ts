import { Document } from "mongoose";
import { ObjectId } from "shares/utils/mongo/mongo.types";

export interface ISubCategory {
  name: string;
  slug: string;
  categoryId: string | ObjectId;
};

export interface ISubCategoryDocument extends ISubCategory, Document { };

export interface ISubCategoryParams {
  _id?: string | ObjectId;
  slug?: string;
};

export interface ISubCategoryQuery {
  categoryId?: string | ObjectId;
}

export interface ISubCategoryFilter extends ISubCategoryParams, ISubCategoryQuery { };


