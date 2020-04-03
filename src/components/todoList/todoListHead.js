// Will render
// <header class="header">
//   <h1>UCU Todo</h1>
//   <input class="new-todo" placeholder="What needs to be done?" value="">
// </header>

import Stepan from '/src/lib/stepan.js';

import { TodoList } from '/src/components/todoList/index.js';

export default class TodoListHead extends Stepan.Component {
  render(todos) { // render will always accept data to render

    const rootElement = Stepan.createElement('header', this.parent, {class: 'header'});
    Stepan.createElement('h1', rootElement, { innerText: 'UCU Todo' });
    const input = Stepan.createElement('input', rootElement, { class: "new-todo", placeholder: "What needs to be done?", value: ""});
    
	const toggleInput = Stepan.createElement('input', rootElement, { id: "toggle-all", class: "toggle-all", type: "checkbox" });
    Stepan.createElement('label', rootElement, { for: "toggle-all" });
    toggleInput.addEventListener('change', event=>{
    	if (toggleInput.checked){
    		todos.forEach(todoObject => todoObject.isDone = true)
    	} else {
    		todos.forEach(todoObject => todoObject.isDone = false)
    	}
    	new TodoList(document.querySelector('section.main')).render(todos);
    })

    input.addEventListener('keyup', event => {
    	if (event.key === 'Enter' && input.value != ''){
    		todos.push({isDone: false, title: input.value})
    		input.value = '';
			document.querySelector('span.todo-count').innerText = `${todos.length} items left`;    		
			new TodoList(document.querySelector('section.main')).render(todos);
    	}
    })
    return rootElement;
  }
}
