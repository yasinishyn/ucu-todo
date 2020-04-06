import Stepan from '/src/lib/stepan.js';

import { TodoItem } from '/src/components/todoItem/index.js';

export default class TodoList extends Stepan.Component {
  render() {
    const todoItems = this.props.todos.map(todoObject => new TodoItem(todoObject));
    return Stepan.createElement('ul', { class: "todo-list" }, todoItems)
  }
}
