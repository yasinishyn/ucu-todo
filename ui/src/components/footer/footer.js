// Will render
// <footer class="footer">
//   <span class="todo-count"6 items left</span>
//   <ul class="filters">
//     <li><a href="#/" class="selected">All</a></li><span> </span>
//     <li><a href="#/active" class="">Active</a></li><span> </span>
//     <li><a href="#/completed" class="">Completed</a></li>
//   </ul>
// </footer>

import Stepan from '/src/lib/stepan.js';

export default class Footer extends Stepan.Component {
  render(todos) { // render will always accept data to render
    const rootElement = Stepan.createElement('footer', this.parent, { class: 'footer' });
    Stepan.createElement('span', rootElement, {class: 'todo-count', innerText: `${todos.length} items left`});

    const filters = Stepan.createElement('ul', rootElement, { class: 'filters' });

    const all = Stepan.createElement('li', filters)
    Stepan.createElement('a', all, {href: "#/", class: "selected", innerText: 'All'})

    const active = Stepan.createElement('li', filters)
    Stepan.createElement('a', active, {href: "#/active", class: "", innerText: 'Active'});

    const completed = Stepan.createElement('li', filters)
    Stepan.createElement('a', completed, {href: "#/completed", class: "", innerText: 'Completed'})

    return rootElement;
  }
}
