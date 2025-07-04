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
      
    `;
  }

  render() {
    return this.element;
  }
}
