// Footer Bottom Component
export class Bottom {
  constructor() {
    this.element = null;
    this.init();
  }

  init() {
    this.createElement();
  }

  createElement() {
    this.element = document.createElement('div');
    this.element.className = 'footer-bottom';
    this.element.innerHTML = `
        <small class="copyright">© 2025 by Sa Sa Dot Com Limited</small>
        <small class="browser-support">This website is best viewed in Google Chrome, Firefox, or Edge or above.</small>
    `;
  }

  render() {
    return this.element;
  }
}
