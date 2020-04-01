export default class Stepan {
  static createElement(element, parent, attributes = {}) {
    
    const newElement = document.createElement(element);
    if (newElement.toString() == "[object HTMLUnknownElement]") {
      throw new StepanError("Element is invalid tag name");
    }

    const { innerHTML, innerText } = attributes;

    for (let attribute in attributes) {
      if (['innerHTML', 'innerText'].includes(attribute)) {
        continue;
      }

      newElement.setAttribute(attribute, attributes[attribute]);
    }

    innerHTML && (newElement.innerHTML = innerHTML);
    innerText && (newElement.innerText = innerText);

    parent.appendChild(newElement);
    
    return newElement;
  }

  static Component = class {
    constructor(parent) {

      if (parent != null){
        this.parent = parent;
      } else {
        throw new StepanError("Parent is null or undefined");
      }
    }

    // TODO (Bonus): Ensure that every component returns a top-level root element
  }

}

class StepanError extends Error {
  constructor(message) {
    super(message);
    this.name = "StepanError";
  }
}
