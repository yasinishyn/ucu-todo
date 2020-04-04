import models from '../models/index';
import raiseError from '../helpers/error.helper';

/**
 * path: /todos/
 *
 * method: GET
 *
 * Fetches all todos
 * Auth: Public
 *
 * @return {Object} ctx.body
 */
const all = async ctx => {
  const todos = await models.Todo.findAll({
    attributes: models.Todo.allowedAttributes(),
  });

  ctx.body = {
    status: 'success',
    data: todos,
  };
};

/**
 * path: /todos/:id
 *
 * method: GET
 *
 * Fetches one todo record
 * Auth: Public
 *
 * @param  {String} ctx.params.id id of the record
 *
 * @return {Object} ctx.body
 */
const show = async ctx => {
  const { id } = ctx.params;

  const todo = await models.Todo.findOne({
    where: { id },
  });

  if (!todo) {
    raiseError(ctx, 404);
  } else {
    ctx.body = {
      status: 'success',
      data: todo,
    };
  }
};

/**
 * path: /todos/
 *
 * method: POST
 *
 * Creates a new todo
 *
 * Auth: Protected
 * Role: any
 *
 * @param  {Object} ctx.state.todoParams allowed todo params
 *
 * @return {Object} ctx.body
 */
const create = async ctx => {
  const { todoParams } = ctx.state;
  try {
    const todo = await models.Todo.create(todoParams);
    ctx.body = {
      status: 'success',
      data: todo,
    };
  } catch (error) {
    raiseError(ctx, 400, error);
  }
};

/**
 * path: /todos/:id
 *
 * method: PUT
 *
 * Updates existing todo
 *
 * Auth: Protected
 * Role: any
 *
 * @param  {String} ctx.params.id id of the record
 *
 * @param  {Object} ctx.state.todoParams allowed todo params
 *
 * @return {Object} ctx.body
 */
const update = async ctx => {
  const { id } = ctx.params;

  let todo = await models.Todo.findOne({ where: { id } });
  try {
    todo = await todo.update(ctx.state.todoParams);
    ctx.body = {
      status: 'success',
      data: todo,
    };
  } catch (error) {
    raiseError(ctx, 400, error);
  }
};

/**
 * path: /todos/:id
 *
 * method: DELETE
 *
 * Deletes existing todo
 *
 * Auth: Protected
 * Role: any
 *
 * @param  {String} ctx.params.id id of the record
 *
 * @return {Object} ctx.body
 */
const del = async ctx => {
  const { id } = ctx.params;

  const todo = await models.Todo.findOne({ where: { id } });
  try {
    await todo.destroy();
    ctx.body = {
      status: 'success',
      data: todo,
    };
  } catch (error) {
    raiseError(ctx, 400, error);
  }
};

export default {
  all,
  show,
  create,
  update,
  del
};