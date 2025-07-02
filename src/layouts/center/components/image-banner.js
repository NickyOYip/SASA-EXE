// Image Banner Component
export class ImageBanner {
  constructor() {
    this.element = null;
    this.init();
  }

  init() {
    this.createElement();
  }

  createElement() {
    this.element = document.createElement('div');
    this.element.className = 'image-banner';
    this.element.innerHTML = `
      <img src="" alt="Banner Image" class="banner-image">
    `;
  }

  render() {
    return this.element;
  }
}
