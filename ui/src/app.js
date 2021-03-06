import Stepan from '/src/lib/stepan.js';
import { API_URL } from '/src/constants/index.js'

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
      allFinished: false,
      todos: []
    };
  }

  getInitialState() {
    fetch(`${API_URL}/todos`)
      .then((response) => {
        return response.json()
      })
      .then(response => {
        this.setState({todos: response.data})
      })
  }

  toggleAll() {
    const promises = this.state.todos.map(todo => 
      fetch(`${API_URL}/todos/${todo.id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({todo: {isFinished: !this.state.allFinished}})
      })
    );

    Promise.all(promises).then(res =>res.map( res2 => res2.json()))
      .then(resPromises => {
        Promise.all(resPromises)
          .then(result => result.map(res => res.data))
          .then(result => this.setState({todos: result, allFinished: !this.state.allFinished}))
      })
  }

  createTodo({target}) {
    const { value } = target;
    if (value.replace(/\s/g, '').length === 0) return;

    fetch(`${API_URL}/todos`, {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({todo: {title: value}})
    })
    .then(res => res.json())
    .then(res => this.setState({todos: [...this.state.todos, res.data]}))
  }

  render() {
    return Stepan.createElement('div', {}, [
      new TodoListHead({
        createTodo: this.createTodo.bind(this)
      }),
      Stepan.createElement('section', { class: 'main' }, [
        new TodoListToggleAll({toggleAll: this.toggleAll.bind(this)}),
        new TodoList({todos: this.state.todos}),
        new Footer({todos: this.state.todos}),
      ])
    ])
  }
}

Stepan.renderDOM(document.getElementById('todoapp'), new App())

