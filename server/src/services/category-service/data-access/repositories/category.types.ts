import { ObjectId, MongooseDoc } from 'shares/utils/mongo/mongo.types';

export interface ICategory {
  name: string;
  slug: string;
  subCategoriesId?: ObjectId[];
}

export interface ICategoryDocument extends ICategory, MongooseDoc { }

export interface ICategoryQuery {
  subCategories?: boolean;
  products?: boolean;
}

export interface ICategoryFilter {
  _id?: ObjectId | string;
  slug?: string;
}
