const BaseError = require('./base-error.utils');
const status = require('http-status');

class DalError extends BaseError {
  constructor(name, statusCode, description, isOperational = true) {
    super(name, statusCode, isOperational, description);
  }

  static _formatError(errors) {
    return Object.values(errors.errors).map((error) => ({
      name: error.name,
      field: error.path,
      message: error.message,
    }));
  }

  static unprocessableEntity(errors) {
    return {
      message: 'Validation Error',
      errors: new DalError(
        this._formatError(errors),
        status.UNPROCESSABLE_ENTITY,
        status[status.UNPROCESSABLE_ENTITY]
      ),
    };
  }
}

module.exports = DalError;
