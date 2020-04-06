import Stepan from '/src/lib/stepan.js';

export default class TodoListHead extends Stepan.Component {
  render() {
    return Stepan.createElement('header', {class: 'header'}, [
      Stepan.createElement('h1', { }, ['UCU Todo']),
      Stepan.createElement('input', { class: "new-todo", placeholder: "What needs to be done?", value: ""})
    ]);
  }
}
