import Stepan from '/src/lib/stepan.js';

export default class TodoItem extends Stepan.Component {
  render() {
    const {isFinished, title} = this.props;

    return Stepan.createElement('li', { class: isFinished && 'completed' }, [
      Stepan.createElement('div', { class: 'view' }, [
        Stepan.createElement('input', {class: "toggle", type: "checkbox", checked: isFinished && 'checked'}),
        Stepan.createElement('label', {}, [title]),
        Stepan.createElement('button', {class: "destroy"}),
      ]),
      Stepan.createElement('input', { class: "edit", value: title })
    ]);
  }
}
