import fs from 'fs';
import path from 'path';
import Router from 'koa-router';
import params from 'strong-params';
import convert from 'koa-convert';

const basename = path.basename(module.filename);
const router = new Router();

router.use(convert(params.koaMiddleware()));

/**
 * Dynamically add all routes defined inside this folder to koa-router Router
 */
fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach(file => {
    let route = require(path.join(__dirname, file));
    router.use(route.routes(), route.allowedMethods());
  });

export default router;
