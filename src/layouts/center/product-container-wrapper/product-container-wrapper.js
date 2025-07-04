// Product Container Wrapper Component
export class ProductContainerWrapper {
  constructor() {
    this.element = null;
    this.init();
  }

  init() {
    this.createElement();
  }

  createElement() {
    this.element = document.createElement('div');
    this.element.className = 'product-container--wrapper';
    this.element.innerHTML = `
      <div class="product-grid">
        <!-- Product items go here -->
      </div>
    `;
  }

  render() {
    return this.element;
  }
}
