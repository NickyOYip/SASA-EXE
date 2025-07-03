// Header Layout Component
import { Top } from './top/top.js';
import { Bottom } from './bottom/bottom.js';
import { Toolbox } from '../../components/toolbox/toolbox.js';

// Import component styles
import './top/top.css';
import './bottom/bottom.css';
import '../../components/toolbox/toolbox.css';

export class Header {
  constructor() {
    this.element = null;
    this.headerTop = new Top();
    this.headerBottom = new Bottom();
    this.toolbox = new Toolbox();
    this.init();
  }

  init() {
    this.createElement();
    this.mountComponents();
  }

  createElement() {
    this.element = document.createElement('header');
    this.element.className = 'header';
    this.element.innerHTML = `
      <div class="header-top-container"></div>
      <div class="header-bottom-container"></div>
      <div class="header-toolbox-container"></div>
    `;
  }

  mountComponents() {
    // Mount Header Top component
    const headerTopContainer = this.element.querySelector('.header-top-container');
    headerTopContainer.appendChild(this.headerTop.render());

    // Mount Header Bottom component
    const headerBottomContainer = this.element.querySelector('.header-bottom-container');
    headerBottomContainer.appendChild(this.headerBottom.render());

    // Mount Toolbox component
    const headerToolboxContainer = this.element.querySelector('.header-toolbox-container');
    headerToolboxContainer.appendChild(this.toolbox.render());
  }

  render() {
    return this.element;
  }
}
