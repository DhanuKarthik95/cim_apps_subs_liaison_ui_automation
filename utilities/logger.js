const winston = require('winston');
const winstonDailyRotateFile = require('winston-daily-rotate-file')

const myformat = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD' }),
  winston.format.prettyPrint(),
  winston.format.align(),
  winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
);

const logger = winston.createLogger({
  format: myformat,
  transports: [
    new winstonDailyRotateFile({
      filename: './log/log-%DATE%.log',
      level: 'debug',
      maxSize: '5m'
    }),
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize({
          all: true
        })),
      level: 'debug'
    })
  ]
});

module.exports = logger;
