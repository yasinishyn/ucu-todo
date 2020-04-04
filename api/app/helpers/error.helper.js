import logger from '../services/logger.service';

const messages = {
  400: 'Error has occurred',
  401: 'Not Authorized',
  403: 'Forbidden',
  404: 'Not Found',
  410: 'Deleted safely',
  429: 'Too many requests',
  500: 'Internal Server Error'
};

/**
 * Raise HTTP error
 *
 * @param {Number} code status code
 * @param  {Object} ctx koa context
 * @return {Object} ctx.body
 */
const raiseError = (ctx, code, error = null) => {
  if (error) logger.error(error);

  ctx.status = code;
  ctx.body = {
    status: 'error',
    message: messages[code]
  };
};

export default raiseError;