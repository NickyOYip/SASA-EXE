// Main Application
import { Header } from './layouts/header/header.js';
import { Center } from './layouts/center/center.js';
import { Footer } from './layouts/footer/footer.js';
import { EasychatButton } from './components/easychat/easychat.js';

// Import CSS files
import './layouts/header/header.css';
import './layouts/center/center.css';
import './layouts/center/slick-slider/slick-slider.css';
import './layouts/center/carousel-container/carousel-container.css';
import './layouts/center/column-grid-container/column-grid-container.css';
import './layouts/center/image-banner/image-banner.css';
import './layouts/center/brand-wrapper/brand-wrapper.css';
import './layouts/center/section-header/section-header.css';
import './layouts/center/timer/timer.css';
import './layouts/center/product-container-wrapper/product-container-wrapper.css';
import './layouts/footer/footer.css';
import './components/easychat/easychat.css';
import './components/qrcode/qrcode.css';

export class App {
  constructor() {
    console.log('App constructor called');
    try {
      this.header = new Header();
      console.log('Header created successfully');
      this.center = new Center();
      console.log('Center created successfully');
      this.footer = new Footer();
      console.log('Footer created successfully');
      this.easychat = new EasychatButton();
      console.log('Easychat created successfully');
      this.init();
    } catch (error) {
      console.error('Error creating components:', error);
    }
  }

  init() {
    console.log('App init called');
    this.render();
  }

  render() {
    console.log('App render called');
    const app = document.getElementById('app');
    console.log('App element found:', app);
    
    // Clear existing content
    app.innerHTML = '';
    
    // Append layouts
    console.log('Appending header...');
    app.appendChild(this.header.render());
    console.log('Appending center...');
    app.appendChild(this.center.render());
    console.log('Appending footer...');
    app.appendChild(this.footer.render());
    
    // Append easychat button to body (not app div)
    console.log('Appending easychat...');
    document.body.appendChild(this.easychat.render());
    console.log('All components rendered');
  }
}
