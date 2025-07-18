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
      <a data-qe-id="top_message" href="//www.sasa.com.hk/page/PayMe" class="top-message__link">
        <span class="top-message__content">
          Grab up to $100 in PayMe App flash vouchers! 💰
          <i class="ico ico-chevron-right" style="text-decoration: none;vertical-align: middle;margin-left: 8px;font-size: 16px;font-weight: 600;"></i>
        </span>
      </a>
    `;
  }

  render() {
    return this.element;
  }
}
