import faker from 'faker';

import models from '../../app/models/index';

/**
 * Generate an object which container attributes needed
 * to successfully create a post instance.
 *
 * @param  {Object} props Properties to use for the post.
 *
 * @return {Object}       An object to build the post from.
 */
const todoData = async (props = {}) => {
  const defaultProps = {
    title: faker.lorem.sentence(),
    isFinished: faker.random.boolean(),
  };

  return Object.assign({}, defaultProps, props);
};

/**
 * Generates a post instance from the properties provided.
 *
 * @param  {Object} props Properties to use for the post.
 *
 * @return {Object}       A post instance
 */
const todoFactory = async (props = {}) =>
  models.Todo.create(await todoData(props));

export { todoFactory, todoData };
