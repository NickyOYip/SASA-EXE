// Top Message Component
export class TopMessage {
  constructor() {
    this.element = null;
    this.init();
  }

  init() {
    this.createElement();
  }

  createElement() {
    this.element = document.createElement('div');
    this.element.className = 'top-message';
    this.element.innerHTML = `
      <!-- Top message content goes here -->
    `;
  }

  render() {
    return this.element;
  }
}
