const { CORS_ORIGINS } = process.env;

const allowMethods = ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'];
const allowHeaders = ['Content-Type', 'Authorization', 'Accept',
  'Access-Control-Allow-Origin', 'Access-Control-Allow-Credentials',
  'x-connection-key', 'x-secret-key', 'X-Requested-With'];
const exposeHeaders = 'Authorization';

const checkOriginAgainstWhitelist = ctx => {
  const requestOrigin = ctx.accept.headers.origin;

  if (!CORS_ORIGINS.split(',').includes(requestOrigin)) {
    return ctx.throw(403, 'The CORS policy for this site does not allow access from the specified Origin');
  }

  return requestOrigin;
};

export default {
  origin: checkOriginAgainstWhitelist,
  exposeHeaders,
  credentials: true,
  allowMethods,
  allowHeaders
};