import logger from '../app/services/logger.service';

require('./env').configure();

let development = require('./development');
let test = require('./test');
let production = require('./production');

let env = process.env.NODE_ENV || 'development';

logger.info(`Starting process in ${env} mode. On port ${process.env.PORT}`);

let configs = {
  development,
  test,
  production
};

let defaultConfig = {
  env
};

let config = {...defaultConfig, ...configs[env]};

module.exports = config;