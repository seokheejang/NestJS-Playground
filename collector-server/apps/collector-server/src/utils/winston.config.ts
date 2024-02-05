import * as fs from 'fs';
import * as path from 'path';
import * as winston from 'winston';
import * as winstonDaily from 'winston-daily-rotate-file';

const LOG_DIR = 'logs/';
const APPLICATION_NAME = 'smaple';
const APPLICATION_IP = 'localhost';
const APPLICATION_PID = '1';
// logs dir
const logDir: string = path.join(__dirname, LOG_DIR);

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

// Define log format
const logFormat = winston.format.printf(
  ({ timestamp, level, message }): any => {
    // message 가장 처음에 "[ ERR_BC > ],[ WARN_BC > ]"로 시작
    console.log('level', level, message);
    if (level === 'elk') {
      return `[INFO] ${timestamp} [${APPLICATION_NAME} ${APPLICATION_IP} ${'0'}] Process${APPLICATION_PID} [${'classMethod'}]${message}`;
    } else {
      return `${timestamp} ${level}: ${message}`;
    }
  },
);

/*
 * Log Level
 * error: 0, elk: 1, info: 2, http: 3, verbose: 4, debug: 5, silly: 6
 */
const customConfig = {
  levels: {
    error: 0,
    elk: 1,
    info: 2,
    http: 3,
    verbose: 4,
    debug: 5,
    silly: 6,
  },
  colors: {
    error: 'red',
    elk: 'yellow',
    info: 'green',
    http: 'blue',
    verbose: 'cyan',
    debug: 'magenta',
    silly: 'white',
  },
};
winston.addColors(customConfig.colors);

const logger = winston.createLogger({
  levels: customConfig.levels,
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY/MM/DD HH:mm:ss.sss',
    }),
    logFormat,
  ),

  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.splat(),
        winston.format.colorize(),
      ),
    }),
    // debug log setting
    new winstonDaily({
      level: 'debug',
      datePattern: 'YYYY-MM-DD',
      dirname: logDir + '/debug', // log file /logs/debug/*.log in save
      filename: `%DATE%.log`,
      maxFiles: 30, // 30 Days saved
      json: false,
      zippedArchive: true,
    }),
    // error log setting
    new winstonDaily({
      level: 'error',
      datePattern: 'YYYY-MM-DD',
      dirname: logDir + '/error', // log file /logs/error/*.log in save
      filename: `%DATE%.log`,
      maxFiles: 30, // 30 Days saved
      handleExceptions: true,
      json: false,
      zippedArchive: true,
    }),
    // elk log setting
    new winstonDaily({
      level: 'elk',
      datePattern: 'YYYY-MM-DD',
      dirname: logDir + '/elk', // log file /logs/elk/*.log in save
      filename: `${APPLICATION_NAME}-%DATE%.log`,
      maxFiles: 30, // 30 Days saved
      handleExceptions: true,
      json: false,
      zippedArchive: true,
    }),
  ],
});

const stream = {
  write: (message: string) => {
    logger.debug(message.substring(0, message.lastIndexOf('\n')));
  },
};

export { logger, stream };
