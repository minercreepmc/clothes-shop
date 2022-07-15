const status = require('http-status');
const logger = require('#utils/logger');

function logError(err, req, res, next) {
  logger.error(err);
  next(err);
}

function returnError(err, req, res, next) {
  return res
    .status(err.statusCode || status.INTERNAL_SERVER_ERROR)
    .send({ message: err.name });
}

module.exports = {
  logError,
  returnError,
};
