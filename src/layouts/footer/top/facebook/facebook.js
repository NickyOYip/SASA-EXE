// Facebook Footer Component
export class Facebook {
  constructor() {
    this.element = null;
    this.init();
  }

  init() {
    this.createElement();
  }

  createElement() {
    this.element = document.createElement('div');
    this.element.className = 'footer-column footer-column--2';
    this.element.innerHTML = `
      <div style="margin-top: 16px;">
        <ul class="social-ul">
          <li style="display: inline-block; margin-right: 6px;">
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/sasahongkong/"><i class="sc-esBxZp elXWLk ico ico-facebook"></i></a>
          </li>
          <li style="display: inline-block; margin-right: 6px;">
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/sasahk_official/"><i class="sc-esBxZp etnHwm ico ico-instagram"></i></a>
          </li>
        </ul>
      </div>
    `;
  }

  render() {
    return this.element;
  }
}
