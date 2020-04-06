import Stepan from '/src/lib/stepan.js';

import {
  TodoListHead,
  TodoListToggleAll,
  TodoList
} from './components/todoList/index.js';

import { Footer } from './components/footer/index.js';

class App extends Stepan.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };
  }

  getInitialState() {
    fetch("http://localhost:3000/api/v1/todos")
      .then((response) => {
        return response.json()
      })
      .then(response => {
        this.setState({todos: response.data})
      })
  }

  render() {
    return Stepan.createElement('div', {}, [
      new TodoListHead(),
      Stepan.createElement('section', { class: 'main' }, [
        new TodoListToggleAll(),
        new TodoList({todos: this.state.todos}),
        new Footer({todos: this.state.todos}),
      ])
    ])
  }
}

Stepan.renderDOM(document.getElementById('todoapp'), new App())

