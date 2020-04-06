import Stepan from '/src/lib/stepan.js';

export default class TodoListToggleAll extends Stepan.Component {
  render() {
    return Stepan.createElement('div', {}, [
      Stepan.createElement('input', { id: "toggle-all", class: "toggle-all", type: "checkbox" }),
      Stepan.createElement('label', { for: "toggle-all" })
    ]);
  }
}
