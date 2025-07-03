// Footer Layout Component
import { Top } from './top/top.js';
import { Bottom } from './bottom/bottom.js';

// Import component styles
import './top/top.css';
import './bottom/bottom.css';

export class Footer {
  constructor() {
    this.element = null;
    this.top = new Top();
    this.bottom = new Bottom();
    this.init();
  }

  init() {
    this.createElement();
    this.mountComponents();
  }

  createElement() {
    this.element = document.createElement('footer');
    this.element.className = 'footer';
    this.element.innerHTML = `
      <div class="footer-content">
        <div class="top-container"></div>
        <div class="bottom-container"></div>
      </div>
    `;
  }

  mountComponents() {
    // Mount Top component
    const topContainer = this.element.querySelector('.top-container');
    topContainer.appendChild(this.top.render());

    // Mount Bottom component
    const bottomContainer = this.element.querySelector('.bottom-container');
    bottomContainer.appendChild(this.bottom.render());
  }

  render() {
    return this.element;
  }
}
