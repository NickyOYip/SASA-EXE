// Header Bottom Component
import { Slider } from './slider/slider-new.js';

// Import component styles
import './slider/slider.css';
import './bottom.css';

export class Bottom {
  constructor() {
    this.element = null;
    this.slider = new Slider();
    this.init();
  }

  init() {
    this.createElement();
    this.mountComponents();
  }

  createElement() {
    this.element = document.createElement('div');
    this.element.className = 'header__bottom';
    this.element.innerHTML = `
      <div class="slider-container"></div>
    `;
  }

  mountComponents() {
    // Mount Slider component
    const sliderContainer = this.element.querySelector('.slider-container');
    sliderContainer.appendChild(this.slider.render());
  }

  render() {
    return this.element;
  }
}
