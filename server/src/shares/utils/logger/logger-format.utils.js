const { format } = require('winston');

const { combine, label, timestamp, printf, colorize, errors, json } = format;

const myFormat = printf(({ level, message, timestamp, stack }) => {
  return `${timestamp} ${level}: ${stack || message}`;
});

const devLogFormat = combine(
  //label({ label: 'right meow!' }),
  colorize(),
  timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  errors({ stack: true }),
  myFormat
);

const prodLogFormat = combine(timestamp(), errors({ stack: true }), json());

module.exports = { devLogFormat, prodLogFormat };
