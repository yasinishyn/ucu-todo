import todoSchema from './schemas/todo.schema';

function TodoModel(sequelize, DataTypes) {
  const Todo = sequelize.define('Todo', todoSchema(DataTypes), {});

  Todo.allowedAttributes = () => [
    'id',
    'isFinished',
    'title',
    'createdAt',
    'updatedAt',
  ];

  return Todo;
}

export default TodoModel;
