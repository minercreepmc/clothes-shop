import { Types, Document, Error } from 'mongoose';

export interface ObjectId extends Types.ObjectId { }
export interface MongooseDoc extends Document { }
export interface MongooseError extends Error.ValidationError { }
