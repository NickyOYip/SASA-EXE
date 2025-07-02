// Wrapper Component
export class Wrapper {
  constructor() {
    this.element = null;
    this.init();
  }

  init() {
    this.createElement();
  }

  createElement() {
    this.element = document.createElement('div');
    this.element.className = 'wrapper';
    this.element.innerHTML = `
      <!-- Wrapper content goes here -->
    `;
  }

  render() {
    return this.element;
  }
}
