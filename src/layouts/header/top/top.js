// Header Top Component
import { TopMessage } from './top-message/top-message.js';
import { Wrapper } from './wrapper/wrapper.js';

// Import component styles
import './top-message/top-message.css';
import './wrapper/wrapper.css';
import './top.css';

export class Top {
  constructor() {
    this.element = null;
    this.topMessage = new TopMessage();
    this.wrapper = new Wrapper();
    this.init();
  }

  init() {
    this.createElement();
    this.mountComponents();
  }

  createElement() {
    this.element = document.createElement('div');
    this.element.className = 'headerA__top headerA__top--fix';
    this.element.style.backgroundColor = 'rgb(255, 255, 255)';
    this.element.innerHTML = `
      <div class="top-message-container"></div>
      <div class="wrapper-container"></div>
    `;
  }

  mountComponents() {
    // Mount TopMessage component
    const topMessageContainer = this.element.querySelector('.top-message-container');
    topMessageContainer.appendChild(this.topMessage.render());

    // Mount Wrapper component
    const wrapperContainer = this.element.querySelector('.wrapper-container');
    wrapperContainer.appendChild(this.wrapper.render());
  }

  render() {
    return this.element;
  }
}
