// Easychat Floating Button Component
export class EasychatButton {
  constructor() {
    this.element = null;
    this.init();
  }

  init() {
    this.createElement();
  }

  createElement() {
    this.element = document.createElement('a');
    this.element.href = 'javascript:;';
    this.element.id = 'easychat-floating-button-left';
    this.element.className = 'omnichat-icon-wrapper plugin-animation easychat-float-botton-show nine-one-icon-style small-plugin';
    this.element.style.background = 'rgb(237, 0, 128)';
    
    this.element.innerHTML = `
      <div class="omnichat-icon-eyes omnichat-icon-eyes--left"></div>
      <div class="omnichat-icon-eyes omnichat-icon-eyes--right"></div>
      <div class="omnichat-icon-mouth"></div>
    `;
  }

  render() {
    return this.element;
  }
}
