// Official App Footer Component
export class OfficialApp {
  constructor() {
    this.element = null;
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
  }

  render() {
    return this.element;
  }
}
