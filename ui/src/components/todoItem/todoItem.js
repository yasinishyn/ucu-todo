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

export default class TodoItem extends Stepan.Component {
  render({isDone, title}) { // render will always accept data to render
    const rootElement = Stepan.createElement('li', this.parent, { class: isDone && 'completed' });
    const todoViewContainer = Stepan.createElement('div', rootElement, { class: 'view' });

    // TODO: Input must be checked if todo item is done
    Stepan.createElement('input', todoViewContainer, {class: "toggle", type: "checkbox"});

    Stepan.createElement('label', todoViewContainer, {innerText: title});
    Stepan.createElement('button', todoViewContainer, {class: "destroy"});
    Stepan.createElement('input', todoViewContainer, { class: "edit", value: title });

    return rootElement
  }
}
