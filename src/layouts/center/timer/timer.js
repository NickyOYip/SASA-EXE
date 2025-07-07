// Timer Component
export class Timer {
  constructor(endDate = null) {
    this.element = null;
    this.intervalId = null;
    // Set default end date to 24 hours from now if not provided
    this.endDate = endDate || new Date(Date.now() + 24 * 60 * 60 * 1000);
    this.init();
  }

  init() {
    this.createElement();
    this.startTimer();
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

  startTimer() {
    // Update immediately
    this.updateTimer();
    
    // Update every second
    this.intervalId = setInterval(() => {
      this.updateTimer();
    }, 1000);
  }

  updateTimer() {
    const now = new Date().getTime();
    const distance = this.endDate.getTime() - now;

    // If countdown is finished
    if (distance < 0) {
      this.clearTimer();
      this.setTimeValues(0, 0, 0, 0);
      return;
    }

    // Calculate time values
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    this.setTimeValues(days, hours, minutes, seconds);
  }

  setTimeValues(days, hours, minutes, seconds) {
    // Format numbers to always have 2 digits
    const daysStr = days.toString().padStart(2, '0');
    const hoursStr = hours.toString().padStart(2, '0');
    const minutesStr = minutes.toString().padStart(2, '0');
    const secondsStr = seconds.toString().padStart(2, '0');

    // Update days
    this.updateDigits('day', daysStr);
    // Update hours
    this.updateDigits('hour', hoursStr);
    // Update minutes
    this.updateDigits('minute', minutesStr);
    // Update seconds
    this.updateDigits('second', secondsStr);
  }

  updateDigits(type, value) {
    const digit0 = this.element.querySelector(`#${type}-0`);
    const digit1 = this.element.querySelector(`#${type}-1`);
    const preparedDigit0 = this.element.querySelector(`#prepared-${type}-0`);
    const preparedDigit1 = this.element.querySelector(`#prepared-${type}-1`);

    if (digit0 && digit1 && preparedDigit0 && preparedDigit1) {
      // Add animation to first digit (slides down from above)
      if (digit0.textContent !== value[0]) {
        digit0.classList.add('timer__digits--fade-in');
        setTimeout(() => {
          digit0.classList.remove('timer__digits--fade-in');
        }, 400);
      }
      
      // Add different animation to second digit (slides up from below)
      if (digit1.textContent !== value[1]) {
        digit1.classList.add('timer__digits--fade-in-alt');
        setTimeout(() => {
          digit1.classList.remove('timer__digits--fade-in-alt');
        }, 400);
      }
      
      // Update current digits
      digit0.textContent = value[0];
      digit1.textContent = value[1];
      
      // Update prepared digits (for animation effect)
      preparedDigit0.textContent = value[0];
      preparedDigit1.textContent = value[1];
    }
  }

  clearTimer() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  // Method to set custom end date
  setEndDate(endDate) {
    this.endDate = endDate;
    if (this.intervalId) {
      this.clearTimer();
      this.startTimer();
    }
  }

  // Cleanup when component is destroyed
  destroy() {
    this.clearTimer();
  }

  render() {
    return this.element;
  }
}
