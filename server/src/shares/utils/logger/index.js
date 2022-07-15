const devLogger = require('./dev-logger.utils');
const prodLogger = require('./prod-logger.utils');

let logger = null;
if (process.env.NODE_ENV === 'development') {
  logger = devLogger;
} else {
  logger = prodLogger;
}

module.exports = logger;
