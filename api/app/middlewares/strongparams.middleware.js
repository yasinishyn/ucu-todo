import models from '../models/index';

/**
  * Strong params
  *
  * @param  {Object} ctx koa context
  * @param  {Callback} next executes next middleware
  * @return {void}
  */
const params = modelName => async(ctx, next) => {
  const paramName = modelName.charAt(0).toLowerCase() + modelName.slice(1);
  ctx.state[`${paramName}Params`] = ctx.parameters
    .require(paramName)
    .permit(...models[modelName].allowedAttributes())
    .value();
  await next();
};

export default {
  params
};