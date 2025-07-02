// Header Layout Component
export class Header {
  constructor() {
    this.element = null;
    this.init();
  }

  init() {
    this.createElement();
    this.render();
  }

  createElement() {
    this.element = document.createElement('header');
    this.element.className = 'header';
    this.element.innerHTML = `
      <div class="header__top">
        <div class="top-message"></div>
        <div class="wrapper"></div>
      </div>
      <div class="header__bottom">
        <div class="slider"></div>
      </div>
    `;
  }

  render() {
    return this.element;
  }
}
