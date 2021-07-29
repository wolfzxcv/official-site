/** In order to do some custom things on server side
 *  We have to Custom Server
 *  See https://nextjs.org/docs/advanced-features/custom-server
 */

const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const LOGGER_PATH = require('path').join(
  process.cwd(),
  'node_modules',
  'next/dist/build/output/log'
);

const nextLogger = require(LOGGER_PATH);

const buildJsonLogger = (prefix) => {
  return (...args) => {
    const message = args.length === 1 ? args[0] : args;
    logger.log({ message, level: prefix });
    console.log(prefix, message);
  };
};

Object.entries(nextLogger).forEach(([key, value]) => {
  if (typeof value === 'function') {
    nextLogger[key] = buildJsonLogger(key);
  }
});

const winston = require('winston');
const customLevels = { ...winston.config.syslog.levels, wait: 8, event: 9 };
const customFormat = winston.format.combine(
  winston.format.timestamp({ format: 'MM-DD-YYYY HH:mm:ss' }),
  winston.format.align(),
  winston.format.printf(
    (msg) => `${msg.level}: ${[msg.timestamp]}: ${msg.message}`
  )
);

const logger = winston.createLogger({
  level: 'event',
  levels: customLevels,
  format: customFormat,
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({
      filename: 'info.log'
    })
  ]
});

const app = next({ dev: true });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true);

    handle(req, res, parsedUrl);
  }).listen(3000, (err) => {
    if (err) {
      logger.log({ message: err, level: 'error' });

      throw err;
    } else {
      logger.info({ message: 'server started!!' });
    }

    console.log('> Ready on http://localhost:3000');
  });
});
