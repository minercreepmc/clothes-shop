import { MongooseError } from 'shares/utils/mongo/mongo.types';
import { Description } from './errors.types';

import BaseError from './base-error.utils';
import status from 'http-status';

import { prettierErrors } from 'shares/utils/mongo';

export default class DalError extends BaseError {
  constructor(name: string, statusCode: number, description: string, isOperational = true) {
    super(name, statusCode, isOperational, description);
  }

  static _formatError(errors: MongooseError) {
    return prettierErrors(errors);
  }

  // TODO: Deal with this method type 
  static unprocessableEntity(errors: MongooseError) {
    return {
      message: 'Validation Error',
      errors: new DalError(
        this._formatError(errors) as any,
        status.UNPROCESSABLE_ENTITY,
        status[status.UNPROCESSABLE_ENTITY] as string
      ),
    };
  }
}
