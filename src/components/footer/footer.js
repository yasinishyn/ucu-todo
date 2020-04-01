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
    const count = Stepan.createElement('span', rootElement, {class: 'todo-count', innerText: `${todos.length} items left`});
    
    const filters = Stepan.createElement('ul', rootElement, { class: 'filters' });

    const all = Stepan.createElement('li', filters)
    const allLink = Stepan.createElement('a', all, {href: "#/", class: "selected", innerText: 'All'})
    allLink.addEventListener('click', event => {
        document.querySelector('a.selected').classList.remove('selected');
        document.querySelector('a[href="#/"]').classList.add('selected');
        document.querySelectorAll('li.completed').forEach(el => el.style.display='block');
        document.querySelectorAll('li.false').forEach(el => el.style.display='block');
    })

    const active = Stepan.createElement('li', filters)
    const activeLink = Stepan.createElement('a', active, {href: "#/active", class: "", innerText: 'Active'});
    activeLink.addEventListener('click', () => {
        document.querySelector('a.selected').classList.remove('selected');
        document.querySelector('a[href="#/active"]').classList.add('selected');
        document.querySelectorAll('li.completed').forEach(el => el.style.display='none');
        document.querySelectorAll('li.false').forEach(el => el.style.display='block');
    })

    const completed = Stepan.createElement('li', filters)
    const completedLink = Stepan.createElement('a', completed, {href: "#/completed", class: "", innerText: 'Completed'})
    completedLink.addEventListener('click', () => {
        document.querySelector('a.selected').classList.remove('selected');
        document.querySelector('a[href="#/completed"]').classList.add('selected');
        document.querySelectorAll('li.completed').forEach(el => el.style.display='block');
        document.querySelectorAll('li.false').forEach(el => el.style.display='none');
    })
    return rootElement;
  }
}
