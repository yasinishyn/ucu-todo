import Stepan from '/src/lib/stepan.js';

export default class Footer extends Stepan.Component {
  render() {
    return Stepan.createElement('footer', { class: 'footer' }, [
      Stepan.createElement('span', {class: 'todo-count'}, [`${this.props.todos.length} items left`]),
      Stepan.createElement('ul', { class: 'filters' }, [
        Stepan.createElement('li', {}, [
          Stepan.createElement('a', {href: "#/", class: "selected"}, ['All'])
        ]),
        Stepan.createElement('li', {}, [
          Stepan.createElement('a', {href: "#/active", class: ""}, ['Active'])
        ]),
        Stepan.createElement('li', {}, [
          Stepan.createElement('a', {href: "#/completed", class: ""}, ['Completed'])
        ])
      ])
    ]);
  }
}
