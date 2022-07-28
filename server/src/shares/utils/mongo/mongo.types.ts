import { Types, Document, Error } from 'mongoose';

export interface ObjectId extends Types.ObjectId { }
export interface MongooseDoc extends Document { }
export interface ValidationError extends Error.ValidationError { }
export interface CastError extends Error.CastError { }
export interface MongooseError extends ValidationError { }
export interface MongooseFormatedError {
  name: ValidationError | CastError;
  field: string;
  message: string;
}
