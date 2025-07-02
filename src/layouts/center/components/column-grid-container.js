// Column Grid Container Component
export class ColumnGridContainer {
  constructor() {
    this.element = null;
    this.init();
  }

  init() {
    this.createElement();
  }

  createElement() {
    this.element = document.createElement('div');
    this.element.className = 'column-grid-container';
    this.element.innerHTML = `
      <div class="grid-item">Column 1</div>
      <div class="grid-item">Column 2</div>
      <div class="grid-item">Column 3</div>
    `;
  }

  render() {
    return this.element;
  }
}
