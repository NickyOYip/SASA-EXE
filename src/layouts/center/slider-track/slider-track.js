// Slider Track Component
export class SliderTrack {
  constructor(options = {}) {
    this.element = null;
    this.slides = options.slides || [];
    this.currentIndex = options.currentIndex || 0;
    this.autoPlay = options.autoPlay || false;
    this.autoPlayInterval = options.autoPlayInterval || 3000;
    this.showDots = options.showDots || true;
    this.showArrows = options.showArrows || true;
    this.init();
  }

  init() {
    this.createElement();
    this.setupEventListeners();
    if (this.autoPlay) {
      this.startAutoPlay();
    }
  }

  createElement() {
    this.element = document.createElement('div');
    this.element.className = 'slider-track';
    this.element.innerHTML = `
      <div class="slider-track__container">
        <div class="slider-track__wrapper">
          <div class="slider-track__slides">
            ${this.renderSlides()}
          </div>
        </div>
        ${this.showArrows ? this.renderArrows() : ''}
        ${this.showDots ? this.renderDots() : ''}
      </div>
    `;
  }

  renderSlides() {
    if (this.slides.length === 0) {
      return `
        <div class="slider-track__slide slider-track__slide--active">
          <div class="slider-track__content">
            <p>No slides available</p>
          </div>
        </div>
      `;
    }

    return this.slides.map((slide, index) => `
      <div class="slider-track__slide ${index === this.currentIndex ? 'slider-track__slide--active' : ''}" data-index="${index}">
        <div class="slider-track__content">
          ${slide.content || ''}
        </div>
      </div>
    `).join('');
  }

  renderArrows() {
    return `
      <button class="slider-track__arrow slider-track__arrow--prev" aria-label="Previous slide">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <button class="slider-track__arrow slider-track__arrow--next" aria-label="Next slide">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    `;
  }

  renderDots() {
    if (this.slides.length <= 1) return '';
    
    return `
      <div class="slider-track__dots">
        ${this.slides.map((_, index) => `
          <button class="slider-track__dot ${index === this.currentIndex ? 'slider-track__dot--active' : ''}" 
                  data-index="${index}" 
                  aria-label="Go to slide ${index + 1}">
          </button>
        `).join('')}
      </div>
    `;
  }

  setupEventListeners() {
    if (!this.element) return;

    // Arrow navigation
    const prevArrow = this.element.querySelector('.slider-track__arrow--prev');
    const nextArrow = this.element.querySelector('.slider-track__arrow--next');
    
    if (prevArrow) {
      prevArrow.addEventListener('click', () => this.goToPrevious());
    }
    
    if (nextArrow) {
      nextArrow.addEventListener('click', () => this.goToNext());
    }

    // Dot navigation
    const dots = this.element.querySelectorAll('.slider-track__dot');
    dots.forEach(dot => {
      dot.addEventListener('click', (e) => {
        const index = parseInt(e.target.dataset.index);
        this.goToSlide(index);
      });
    });

    // Keyboard navigation
    this.element.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        this.goToPrevious();
      } else if (e.key === 'ArrowRight') {
        this.goToNext();
      }
    });

    // Pause autoplay on hover
    if (this.autoPlay) {
      this.element.addEventListener('mouseenter', () => this.pauseAutoPlay());
      this.element.addEventListener('mouseleave', () => this.startAutoPlay());
    }
  }

  goToSlide(index) {
    if (index < 0 || index >= this.slides.length) return;
    
    this.currentIndex = index;
    this.updateSlider();
  }

  goToNext() {
    const nextIndex = (this.currentIndex + 1) % this.slides.length;
    this.goToSlide(nextIndex);
  }

  goToPrevious() {
    const prevIndex = this.currentIndex === 0 ? this.slides.length - 1 : this.currentIndex - 1;
    this.goToSlide(prevIndex);
  }

  updateSlider() {
    // Update active slide
    const slides = this.element.querySelectorAll('.slider-track__slide');
    slides.forEach((slide, index) => {
      slide.classList.toggle('slider-track__slide--active', index === this.currentIndex);
    });

    // Update active dot
    const dots = this.element.querySelectorAll('.slider-track__dot');
    dots.forEach((dot, index) => {
      dot.classList.toggle('slider-track__dot--active', index === this.currentIndex);
    });

    // Update slider position
    const slidesContainer = this.element.querySelector('.slider-track__slides');
    if (slidesContainer) {
      const translateX = -this.currentIndex * 100;
      slidesContainer.style.transform = `translateX(${translateX}%)`;
    }
  }

  startAutoPlay() {
    if (!this.autoPlay || this.slides.length <= 1) return;
    
    this.clearAutoPlay();
    this.autoPlayTimer = setInterval(() => {
      this.goToNext();
    }, this.autoPlayInterval);
  }

  pauseAutoPlay() {
    this.clearAutoPlay();
  }

  clearAutoPlay() {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
      this.autoPlayTimer = null;
    }
  }

  // Public methods for external control
  addSlide(slide) {
    this.slides.push(slide);
    this.createElement();
    this.setupEventListeners();
  }

  removeSlide(index) {
    if (index >= 0 && index < this.slides.length) {
      this.slides.splice(index, 1);
      if (this.currentIndex >= this.slides.length) {
        this.currentIndex = Math.max(0, this.slides.length - 1);
      }
      this.createElement();
      this.setupEventListeners();
    }
  }

  updateSlideContent(index, newContent) {
    if (index >= 0 && index < this.slides.length) {
      this.slides[index].content = newContent;
      this.createElement();
      this.setupEventListeners();
    }
  }

  destroy() {
    this.clearAutoPlay();
    if (this.element && this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
    }
  }

  render() {
    return this.element;
  }
}
