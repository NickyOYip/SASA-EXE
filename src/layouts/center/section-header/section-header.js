// Section Header Component
export class SectionHeader {
  constructor() {
    this.element = null;
    this.init();
  }

  init() {
    this.createElement();
  }

  createElement() {
    this.element = document.createElement('div');
    this.element.className = 'section-header';
    this.element.innerHTML = `
      <h2>Section Title</h2>
    `;
  }

  render() {
    return this.element;
  }
}
