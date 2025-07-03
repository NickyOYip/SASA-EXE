// Footer Top Component
import { About } from './about/about.js';
import { Facebook } from './facebook/facebook.js';
import { OfficialApp } from './official-app/official-app.js';

// Import component styles
import './about/about.css';
import './facebook/facebook.css';
import './official-app/official-app.css';

export class Top {
  constructor() {
    this.element = null;
    this.about = new About();
    this.facebook = new Facebook();
    this.officialApp = new OfficialApp();
    this.init();
  }

  init() {
    this.createElement();
    this.mountComponents();
  }

  createElement() {
    this.element = document.createElement('div');
    this.element.className = 'footer-top';
    this.element.innerHTML = `
      <div class="footer-top-content">
        <div class="footer-container">
          <div class="facebook-container"></div>
          <div class="about-container"></div>
          <div class="official-app-container"></div>
        </div>
      </div>
    `;
  }

  mountComponents() {
    // Mount About component
    const aboutContainer = this.element.querySelector('.about-container');
    aboutContainer.appendChild(this.about.render());

    // Mount Facebook component
    const facebookContainer = this.element.querySelector('.facebook-container');
    facebookContainer.appendChild(this.facebook.render());

    // Mount Official App component
    const officialAppContainer = this.element.querySelector('.official-app-container');
    officialAppContainer.appendChild(this.officialApp.render());
  }

  render() {
    return this.element;
  }
}
