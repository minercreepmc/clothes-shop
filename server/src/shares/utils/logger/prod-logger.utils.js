const { createLogger, transports } = require('winston');
const { prodLogFormat } = require('./logger-format.utils');

function buildProdLogger() {
  return createLogger({
    format: prodLogFormat,
    transports: [new transports.Console()],
  });
}

module.exports = buildProdLogger();
