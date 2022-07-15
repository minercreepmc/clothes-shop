const { createLogger, transports } = require('winston');
const { devLogFormat } = require('./logger-format.utils');

function buildDevLogger() {
  return createLogger({
    format: devLogFormat,
    transports: [new transports.Console()],
  });
}

module.exports = buildDevLogger();
