import { type } from "os";

/**
 * Logs output to console or other destination
 *
 * @param  {...any} args arguments to log
 * @returns {void}
 */

const logger = {};

logger.log = (...args) => console.log(Date(Date.now()), args);
logger.warn = (...args) => console.warn(Date(Date.now()), args);
logger.info = (...args) => console.info(Date(Date.now()), args);

logger.error = (...args) => {
  console.error(Date(Date.now()), args);
  console.error('Trace:');
  console.trace(...args);

  args.forEach(el => {
    // if (typeof el === 'object') {
    //   console.error(...Object.values(el));
    // } else {
      console.error(el);
    // }
  });
};

export default logger;