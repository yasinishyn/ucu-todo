import Stepan from '/src/lib/stepan.js';

import { TodoItem } from '/src/components/todoItem/index.js';

export default class TodoList extends Stepan.Component {
  constructor(props) {
    super(props);

    this.state = props;
  }

  removeItem(id) {
    fetch(`http://localhost:3000/api/v1/todos/${id}`, {
      method: 'DELETE'
    })
    .then(_res => this.setState({todos: this.state.todos.filter(el => el.id !== id)}))
  }

  render() {
    const todoItems = this.state.todos.map(todoObject =>
      new TodoItem({...todoObject, removeItem: this.removeItem.bind(this)})
    );
    return Stepan.createElement('ul', { class: "todo-list" }, todoItems)
  }
}
