import Stepan from '/src/lib/stepan.js';
import { API_URL } from '/src/constants/index.js'

export default class TodoItem extends Stepan.Component {
  constructor(props) {
    super(props);

    this.state = props
  }

  toggleFinished() {
    const {id, isFinished} = this.state;
    fetch(`${API_URL}/todos/${id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({todo: { isFinished: !isFinished }})
    })
    .then(res => res.json())
    .then(res => this.setState(res.data));
  }

  render() {
    const {id, isFinished, title, removeItem} = this.state;

    return Stepan.createElement('li', { class: isFinished && 'completed' }, [
      Stepan.createElement('div', { class: 'view' }, [
        Stepan.createElement('input', {
          class: "toggle",
          type: "checkbox",
          checked: isFinished && 'checked',
          onchange: this.toggleFinished.bind(this)
        }),
        Stepan.createElement('label', {}, [title]),
        Stepan.createElement('button', {
          class: "destroy",
          onclick: () => removeItem(id)
        }),
      ]),
      Stepan.createElement('input', { class: "edit", value: title })
    ]);
  }
}
