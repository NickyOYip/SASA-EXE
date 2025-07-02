// Center Layout Component
export class Center {
  constructor() {
    this.element = null;
    this.init();
  }

  init() {
    this.createElement();
  }

  createElement() {
    this.element = document.createElement('main');
    this.element.className = 'center';
    this.element.innerHTML = `
      <div class="slick-slider"></div>
      <div class="carousel-container"></div>
      <div class="carousel-container"></div>
      <div class="section-header"></div>
      <div class="timer"></div>
      <div class="product-container--wrapper"></div>
      <div class="product-container--wrapper"></div>
      <div class="section-header"></div>
      <div class="product-container--wrapper"></div>
      <div class="image-banner"></div>
      <div class="section-header"></div>
      <div class="product-container--wrapper"></div>
      <div class="image-banner"></div>
      <div class="product-container--wrapper"></div>
      <div class="product-container--wrapper"></div>
      <div class="section-header"></div>
      <div class="slick-track"></div>
      <div class="column-grid-container"></div>
      <div class="column-grid-container"></div>
      <div class="column-grid-container"></div>
      <div class="column-grid-container"></div>
      <div class="column-grid-container"></div>
      <div class="column-grid-container"></div>
      <div class="column-grid-container"></div>
      <div class="image-banner"></div>
      <div class="product-container--wrapper"></div>
      <div class="image-banner"></div>
      <div class="product-container--wrapper"></div>
      <div class="image-banner"></div>
      <div class="product-container--wrapper"></div>
      <div class="image-banner"></div>
      <div class="product-container--wrapper"></div>
      <div class="image-banner"></div>
      <div class="product-container--wrapper"></div>
      <div class="image-banner"></div>
      <div class="product-container--wrapper"></div>
      <div class="image-banner"></div>
      <div class="product-container--wrapper"></div>
      <div class="image-banner"></div>
      <div class="product-container--wrapper"></div>
      <div class="image-banner"></div>
      <div class="product-container--wrapper"></div>
      <div class="brand--wrapper"></div>
      <div class="image-banner"></div>
      <div class="product-container--wrapper"></div>
      <div class="brand--wrapper"></div>
      <div class="image-banner"></div>
      <div class="product-container--wrapper"></div>
      <div class="brand--wrapper"></div>
      <div class="image-banner"></div>
      <div class="product-container--wrapper"></div>
      <div class="column-grid-container"></div>
      <div class="image-banner"></div>
      <div class="image-banner"></div>
    `;
  }

  render() {
    return this.element;
  }
}
