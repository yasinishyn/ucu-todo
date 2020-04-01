import Stepan from './lib/stepan.js';

import {
  TodoListHead,
  TodoListToggleAll,
  TodoList
} from './components/todoList/index.js';

import { Footer } from './components/footer/index.js';

export let todos = [];

class App extends Stepan.Component {
  render(todos =  []) {

    const rootElement = this.parent;
    rootElement.innerHTML = "";
    const divContainer = Stepan.createElement('div', rootElement);

    // TodoListHead-----------------
    new TodoListHead(divContainer).render(todos);

    const sectionMain = Stepan.createElement('section', divContainer, { class: 'main' });
    // TodoList-----------------
    new TodoList(sectionMain).render(todos);

    // Footer-----------------
    new Footer(divContainer).render(todos)

    return rootElement
  }
}

var a = new App(document.getElementById('todoapp'))
a.render(todos)

