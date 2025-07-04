// Timer Component
export class Timer {
  constructor() {
    this.element = null;
    this.init();
  }

  init() {
    this.createElement();
  }

  createElement() {
    this.element = document.createElement('div');
    this.element.className = 'timer';
    this.element.innerHTML = `
      <div class="timer-display">00:00:00</div>
    `;
  }

  render() {
    return this.element;
  }
}
