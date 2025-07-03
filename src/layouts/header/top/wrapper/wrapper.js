// Wrapper Component
import { Logo } from './logo/logo.js';
import { Nav } from './nav/nav.js';

// Import component styles
import './logo/logo.css';
import './nav/nav.css';
import './wrapper.css';

export class Wrapper {
  constructor() {
    this.element = null;
    this.logo = new Logo();
    this.nav = new Nav();
    this.init();
  }

  init() {
    this.createElement();
    this.mountComponents();
  }

  createElement() {
    this.element = document.createElement('div');
    this.element.className = 'headerA__wrapper';
    this.element.innerHTML = `
      <div class="headerA__inner-wrapper">
        <div class="logo-container"></div>
        <div class="nav-container"></div>
      </div>
    `;
  }

  mountComponents() {
    // Mount Logo component
    const logoContainer = this.element.querySelector('.logo-container');
    logoContainer.appendChild(this.logo.render());

    // Mount Nav component
    const navContainer = this.element.querySelector('.nav-container');
    navContainer.appendChild(this.nav.render());
  }

  render() {
    return this.element;
  }
}
