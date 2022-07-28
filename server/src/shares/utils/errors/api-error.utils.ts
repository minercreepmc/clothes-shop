import status from 'http-status';
import BaseError from './base-error.utils';

export default class ApiError extends BaseError {
  constructor(name: string, statusCode: number, description: string, isOperational = true) {
    super(name, statusCode, isOperational, description);
  }

  static badRequest(message: string) {
    return new ApiError(
      message,
      status.BAD_REQUEST,
      status[status.BAD_REQUEST] as string,
    );
  }

  static notFound(message: string) {
    return new ApiError(message, status.NOT_FOUND, status[status.NOT_FOUND] as string);
  }
}
