const status = require('http-status');
const BaseError = require('./base-error.utils');

class ApiError extends BaseError {
  constructor(name, statusCode, description, isOperational = true) {
    super(name, statusCode, isOperational, description);
  }

  static badRequest(message) {
    return new ApiError(
      message,
      status.BAD_REQUEST,
      status[status.BAD_REQUEST],
    );
  }

  static notFound(message) {
    return new ApiError(message, status.NOT_FOUND, status[status.NOT_FOUND]);
  }
}

module.exports = ApiError;
