// Will render
// <header class="header">
//   <h1>UCU Todo</h1>
//   <input class="new-todo" placeholder="What needs to be done?" value="">
// </header>

import Stepan from '/src/lib/stepan.js';

export default class TodoListHead extends Stepan.Component {
  render() { // render will always accept data to render
    const rootElement = Stepan.createElement('header', this.parent, {class: 'header'});
      Stepan.createElement('h1', rootElement, { innerText: 'UCU Todo' });
      Stepan.createElement('input', rootElement, { class: "new-todo", placeholder: "What needs to be done?", value: ""});

    return rootElement;
  }
}
