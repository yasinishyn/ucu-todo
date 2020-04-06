
const isEvent = key => key.startsWith('on');

export default class Stepan {
  static createElement(element, attributes = {}, children = []) {
    // TODO: check if this is a valid tag name
    const newElement = document.createElement(element);

    for (let attribute in attributes) {
      // need to handle events
      if (isEvent(attribute)) {
        newElement.addEventListener(attribute.replace('on', ''), attributes[attribute])
        continue;
      }

      // need to handle mono attriburtes checked...
      if (attribute === 'checked' && !attributes[attribute]) continue;

      newElement.setAttribute(attribute, attributes[attribute]);
    }

    children.forEach(node => {
      if (typeof node === 'string') {
        newElement.appendChild(document.createTextNode(node));
      } else if (Object.getPrototypeOf(Object.getPrototypeOf(node)).constructor.name === 'Component') {
        newElement.appendChild(node.mount())
      } else {
        newElement.appendChild(node)
      }
    })

    return newElement;
  }

  static renderDOM(container, component) {
    container.innerHTML = '';
    container.appendChild(component.mount())
  }

  static Component = class {
    constructor(props = {}) {
      this.props = props;
      this.state = {};
      this._pendingState = null; // to check if state is changed
      this._currentElement = null; // to replace the component

      if ( typeof this.getInitialState === 'function' ) {
        this.getInitialState();
      }
    }

    updateComponent() {
      const prevState = this.state;

      // will have to be optimised
      if (this._pendingState !== prevState) {
        this.state = this._pendingState;
      }

      this._pendingState = null;
      this._currentElement.replaceWith(this.mount())
    }

    mount() {
      this._currentElement = this.render();
      return this._currentElement;
    }

    setState(partionNewState) {
      console.log(partionNewState);
      this._pendingState = Object.assign({}, this.state, partionNewState)
      // todo check if state was updated
      this.updateComponent()
    }
  }
}
