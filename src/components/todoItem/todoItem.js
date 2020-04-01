// Will render
// <li class="">
//   <div class="view">
//     <input class="toggle" type="checkbox">
//     <label>TODO 1</label>
//     <button class="destroy"></button>
//   </div>
//   <input class="edit" value="TODO 1">
// </li>

import Stepan from '/src/lib/stepan.js';
import { todos } from '/src/app.js';
import { TodoList } from '/src/components/todoList/index.js';

export default class TodoItem extends Stepan.Component {
  render({isDone, title}) { // render will always accept data to render
    const rootElement = Stepan.createElement('li', this.parent, { class: isDone && 'completed' });
    const todoViewContainer = Stepan.createElement('div', rootElement, { class: 'view' });

    const toggleInput = Stepan.createElement('input', todoViewContainer, {class: "toggle", type: "checkbox"});
    if (rootElement.classList.contains('completed')){
        toggleInput.checked = true;        
    }
    toggleInput.addEventListener('change', event => {
        if (toggleInput.checked){
            todos[Array.prototype.indexOf.call(this.parent.children, rootElement)].isDone = true;
            rootElement.classList.remove('false');
            rootElement.classList.add('completed');
        } else {
            todos[Array.prototype.indexOf.call(this.parent.children, rootElement)].isDone = false;
            rootElement.classList.remove('completed');
            rootElement.classList.add('false');
        }
    })

    const label = Stepan.createElement('label', todoViewContainer, {innerText: title});

    const destroyButton = Stepan.createElement('button', todoViewContainer, {class: "destroy"});
    destroyButton.addEventListener('click', event => {
        todos.splice(Array.prototype.indexOf.call(this.parent.children, rootElement), 1);
        document.querySelector('span.todo-count').innerText = `${todos.length} items left`;
        new TodoList(document.querySelector('section.main')).render(todos);
    })

    const textInput = Stepan.createElement('input', rootElement, { class: "edit", value: title });
    textInput.addEventListener('keyup', event=>{
        if (event.key === 'Enter'){
            rootElement.classList.remove('editing');
            todos[Array.prototype.indexOf.call(this.parent.children, rootElement)].title = textInput.value;
            label.innerText = textInput.value
        }
    })
    document.addEventListener('click', event=>{
        if (event.target != textInput && rootElement.classList.contains('editing')){
            rootElement.classList.remove('editing');
            todos[Array.prototype.indexOf.call(this.parent.children, rootElement)].title = textInput.value;
            label.innerText = textInput.value
        }
    })
    label.addEventListener('dblclick', event => {
        rootElement.classList.add('editing');
    })

    return rootElement
  }
}


// when removing     document.querySelector('span.todo-count').innerText = `${todos.length} items left`;