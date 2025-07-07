// Official App Footer Component
import { QRCodeComponent } from '../../../../components/qrcode/qrcode.js';

export class OfficialApp {
  constructor() {
    this.element = null;
    this.qrCodeApp = new QRCodeComponent({
      data: 'https://www.sasa.com.hk/app',
      size: 128
    });
    this.init();
  }

  init() {
    this.createElement();
  }

  createElement() {
    this.element = document.createElement('div');
    this.element.className = 'footer-column footer-column--3';
    this.element.innerHTML = `
      <div class="sc-dcrKPa eZGyEZ">
        <div class="sc-dmLtQE fnpSre">
          Official App
        </div>
        <div>
          <section>
            <div class="qr-code-image">
              <canvas height="160" width="160" "></canvas>
            </div>
          </section>
          <div class="download-app-menu-icon">
            <a class="download-app-menu-link" href="https://play.google.com/store/apps/details?id=hk.com.nineyi.shop.s000017" target="_blank" rel="noopener noreferrer">
              <i class="sc-TlkDZ jyXyZl"></i>
            </a>
            <a class="download-app-menu-link" href="https://itunes.apple.com/hk/app/id1551748743" target="_blank" rel="noopener noreferrer">
              <i class="sc-TlkDZ cShwyD"></i>
            </a>
          </div>
        </div>
    `;
    
    // Replace canvas with QR code component
    this.initQRCode();
  }

  initQRCode() {
    const qrContainer = this.element.querySelector('.qr-code-image');
    if (qrContainer) {
      // Remove existing canvas
      const existingCanvas = qrContainer.querySelector('canvas');
      if (existingCanvas) {
        existingCanvas.remove();
      }
      
      // Add QR code component
      qrContainer.appendChild(this.qrCodeApp.render());
    }
  }

  render() {
    return this.element;
  }
}
