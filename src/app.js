// Main Application
import { Header } from './layouts/header/header.js';
import { Center } from './layouts/center/center.js';
import { Footer } from './layouts/footer/footer.js';

// Import CSS files
import './layouts/header/header.css';
import './layouts/center/center.css';
import './layouts/footer/footer.css';

export class App {
  constructor() {
    this.header = new Header();
    this.center = new Center();
    this.footer = new Footer();
    this.init();
  }

  init() {
    this.render();
  }

  render() {
    const app = document.getElementById('app');
    
    // Clear existing content
    app.innerHTML = '';
    
    // Append layouts
    app.appendChild(this.header.render());
    app.appendChild(this.center.render());
    app.appendChild(this.footer.render());
  }
}
