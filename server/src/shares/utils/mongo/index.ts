import mongoose from 'mongoose';
import { MongooseError } from './mongo.types';

mongoose.connection.on('error', (error) => {
  console.error(error);
});

export async function mongoConnect() {
  return mongoose.connect('mongodb://127.0.0.1:27017/clothes-shop-db');
}
export function prettierErrors(errors: MongooseError) {
  return Object.values(errors.errors).map((error) => ({
    name: error.name,
    field: error.path,
    message: error.message,
  }));
}
