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
      <div class="sc-hIVHpd hrRWgs">
    <div data-qe-id="section_header" class="sc-bXZogI kVcmsV">
        <h1 class="sc-ikSaTU cUNIuX">Jetso</h1>
    </div>
    <div class="timer">
        <div class="timer__block" style="color: rgb(237, 0, 128); background-color: rgb(242, 242, 242);">
            <div class="timer__block--head-border" style="background-color: rgb(242, 242, 242);"></div>
            <div class="timer__digits"><span id="prepared-day-0" class="timer__digits__prepared-digit">0</span><span
                    id="prepared-day-1" class="timer__digits__prepared-digit">2</span><span id="day-0"
                    class="timer__digits__digit">0</span><span id="day-1" class="timer__digits__digit">2</span></div>
            <span style="background-color: rgb(242, 242, 242);">Days</span>
        </div>
        <div class="timer__block" style="color: rgb(237, 0, 128); background-color: rgb(242, 242, 242);">
            <div class="timer__block--head-border" style="background-color: rgb(242, 242, 242);"></div>
            <div class="timer__digits"><span id="prepared-hour-0" class="timer__digits__prepared-digit">0</span><span
                    id="prepared-hour-1" class="timer__digits__prepared-digit">7</span><span id="hour-0"
                    class="timer__digits__digit">0</span><span id="hour-1" class="timer__digits__digit">7</span></div>
            <span style="background-color: rgb(242, 242, 242);">Hours</span>
        </div>
        <div class="timer__block" style="color: rgb(237, 0, 128); background-color: rgb(242, 242, 242);">
            <div class="timer__block--head-border" style="background-color: rgb(242, 242, 242);"></div>
            <div class="timer__digits"><span id="prepared-minute-0" class="timer__digits__prepared-digit">0</span><span
                    id="prepared-minute-1" class="timer__digits__prepared-digit">3</span><span id="minute-0"
                    class="timer__digits__digit">0</span><span id="minute-1" class="timer__digits__digit">3</span></div>
            <span style="background-color: rgb(242, 242, 242);">Minutes</span>
        </div>
        <div class="timer__block" style="color: rgb(237, 0, 128); background-color: rgb(242, 242, 242);">
            <div class="timer__block--head-border" style="background-color: rgb(242, 242, 242);"></div>
            <div class="timer__digits"><span id="prepared-second-0" class="timer__digits__prepared-digit">3</span><span
                    id="prepared-second-1" class="timer__digits__prepared-digit">1</span><span id="second-0"
                    class="timer__digits__digit">3</span><span id="second-1" class="timer__digits__digit">2</span></div>
            <span style="background-color: rgb(242, 242, 242);">Seconds</span>
        </div>
    </div>
</div>
    `;
  }

  render() {
    return this.element;
  }
}
