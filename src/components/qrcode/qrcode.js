// QR Code Component
import QRCode from 'qrcode';

export class QRCodeComponent {
  constructor(options = {}) {
    this.element = null;
    this.data = options.data || 'https://www.sasa.com.hk';
    this.size = options.size || 128;
    this.color = options.color || {
      dark: '#000000',
      light: '#FFFFFF'
    };
    this.errorCorrectionLevel = options.errorCorrectionLevel || 'M';
    this.margin = options.margin || 1;
    this.init();
  }

  init() {
    this.createElement();
    this.generateQRCode();
  }

  createElement() {
    this.element = document.createElement('div');
    this.element.className = 'qr-code-image';
    
    this.canvas = document.createElement('canvas');
    this.canvas.width = 160;
    this.canvas.height = 160;
    this.canvas.style.width = `${this.size}px`;
    this.canvas.style.height = `${this.size}px`;
    
    this.element.appendChild(this.canvas);
  }

  async generateQRCode() {
    try {
      await QRCode.toCanvas(this.canvas, this.data, {
        width: this.size,
        height: this.size,
        color: this.color,
        errorCorrectionLevel: this.errorCorrectionLevel,
        margin: this.margin
      });
    } catch (error) {
      console.error('Error generating QR code:', error);
      // Fallback: show text if QR code generation fails
      this.showFallback();
    }
  }

  showFallback() {
    this.element.innerHTML = `
      <div style="
        width: ${this.size}px;
        height: ${this.size}px;
        border: 2px solid #ccc;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        text-align: center;
        padding: 8px;
        box-sizing: border-box;
      ">
        QR Code<br>
        <small>${this.data}</small>
      </div>
    `;
  }

  // Method to update QR code data
  updateData(newData) {
    this.data = newData;
    this.generateQRCode();
  }

  // Method to update QR code options
  updateOptions(options) {
    if (options.size) this.size = options.size;
    if (options.color) this.color = { ...this.color, ...options.color };
    if (options.errorCorrectionLevel) this.errorCorrectionLevel = options.errorCorrectionLevel;
    if (options.margin) this.margin = options.margin;
    
    this.generateQRCode();
  }

  render() {
    return this.element;
  }
}
