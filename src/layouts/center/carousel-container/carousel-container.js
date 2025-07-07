// Carousel Container Component
export class CarouselContainer {
  constructor(options = {}) {
    this.element = null;
    this.slides = options.slides || this.getDefaultSlides();
    this.currentIndex = 0;
    this.autoPlay = true;
    this.autoPlayInterval = 4000;
    this.speed = 1500;
    this.autoPlayTimer = null;
    this.isTransitioning = false;
    this.slidesToShow = 3; // Show 3 slides at once
    this.centerMode = true; // Center the active slide
    this.init();
  }

  getDefaultSlides() {
    return [
      {
        href: "//www.sasa.com.hk/page/PayMe",
        alt: "BannerD-carousel-1",
        src: "https://cms.cdn.91app.hk/images/original/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751273399-scv57ne95n_d_1280x130_1124x114_800x81_600x61_400x41.jpg",
        srcset: "https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751273399-scv57ne95n_d_1280x130.webp 1280w"
      },
      {
        href: "//www.sasa.com.hk/page/ZAbank",
        alt: "BannerD-carousel-2",
        src: "https://cms.cdn.91app.hk/images/original/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1750309541-p7jydmkjbj_d_1280x130_1124x114_800x81_600x61_400x41.png",
        srcset: "https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1750309541-p7jydmkjbj_d_1280x130.webp 1280w"
      }
    ];
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
    this.element.className = 'carousel-container';
    this.element.innerHTML = `
      <div class="carousel-container">
        <div class="slick-slider carousel-container--content slick-initialized" dir="ltr">
          ${this.renderArrows()}
          <div class="slick-list">
            <div class="slick-track" style="opacity: 1;">
              ${this.renderSlides()}
            </div>
          </div>
          ${this.renderDots()}
        </div>
      </div>
    `;
    
    this.updateSliderPosition();
  }

  renderArrows() {
    return `
      <a class="sc-hilkcu hRrlxJ carousel-arrow carousel-arrow--prev" aria-label="Previous slide">
        <i class="ico ico-chevron-left"></i>
      </a>
      <a class="sc-hilkcu jYMTSe carousel-arrow carousel-arrow--next" aria-label="Next slide">
        <i class="ico ico-chevron-right"></i>
      </a>
    `;
  }

  renderSlides() {
    if (this.slides.length === 0) {
      return '<div class="slick-slide"><div>No slides available</div></div>';
    }

    // Create a loop with enough slides for smooth shifting
    // Pattern: [...slides, ...slides, ...slides] = 6 total slides for smooth infinite loop
    const extendedSlides = [...this.slides, ...this.slides, ...this.slides];
    
    return extendedSlides.map((slide, index) => {
      const originalIndex = index % this.slides.length;
      
      return `
        <div data-index="${originalIndex}" 
             class="slick-slide ${index === this.slides.length + this.currentIndex ? 'slick-active slick-current' : ''}" 
             tabindex="-1" 
             aria-hidden="${index !== this.slides.length + this.currentIndex}"
             style="outline: none; width: ${100 / extendedSlides.length}%;">
          <div>
            <div class="mutiple-carousel-item" tabindex="-1" style="width: 100%; display: inline-block;">
              <a href="${slide.href}" class="image-banner">
                <figure class="image-banner__frame">
                  <img loading="lazy" 
                       class="image-banner__picture"
                       alt="${slide.alt}"
                       src="${slide.src}"
                       srcset="${slide.srcset}"
                       style="width: 100%; display: block;">
                    </figure>
                </a>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  renderDots() {
    if (this.slides.length <= 1) return '';
    
    return `
      <ul class="slick-dots" style="display: block;">
        ${this.slides.map((_, index) => `
          <li class="${index === this.currentIndex ? 'slick-active' : ''}">
            <button data-index="${index}" aria-label="Go to slide ${index + 1}">
              ${index + 1}
            </button>
          </li>
        `).join('')}
      </ul>
    `;
  }

  render() {
    return this.element;
  }

  setupEventListeners() {
    if (!this.element) return;

    // Arrow navigation
    const prevArrow = this.element.querySelector('.carousel-arrow--prev');
    const nextArrow = this.element.querySelector('.carousel-arrow--next');
    
    if (prevArrow) {
      prevArrow.addEventListener('click', (e) => {
        e.preventDefault();
        this.goToPrevious();
      });
    }
    
    if (nextArrow) {
      nextArrow.addEventListener('click', (e) => {
        e.preventDefault();
        this.goToNext();
      });
    }

    // Dot navigation
    const dots = this.element.querySelectorAll('.slick-dots button');
    dots.forEach(dot => {
      dot.addEventListener('click', (e) => {
        e.preventDefault();
        const index = parseInt(e.target.dataset.index);
        this.goToSlide(index);
      });
    });

    // Pause autoplay on hover
    if (this.autoPlay) {
      this.element.addEventListener('mouseenter', () => this.pauseAutoPlay());
      this.element.addEventListener('mouseleave', () => this.startAutoPlay());
    }
  }

  updateSliderPosition() {
    const slickTrack = this.element.querySelector('.slick-track');
    if (!slickTrack) return;

    // With 6 slides (2 original x 3 copies), each slide is 16.666% wide
    // Start at middle section (position 2, 3) to allow smooth forward/backward movement
    const totalSlides = this.slides.length * 3; // 6 slides total
    const slideWidth = 100 / totalSlides; // 16.666% per slide
    const centerOffset = this.slides.length; // Start at middle section
    const translateX = -((centerOffset + this.currentIndex) * slideWidth);
    
    // Apply styles
    slickTrack.style.width = `${totalSlides * 100}%`;
    slickTrack.style.transform = `translate3d(${translateX}%, 0px, 0px)`;
    slickTrack.style.transition = this.isTransitioning ? `transform ${this.speed}ms ease` : 'none';
  }

  goToSlide(index) {
    if (this.isTransitioning) return;
    if (index < 0 || index >= this.slides.length) return;
    
    this.currentIndex = index;
    this.isTransitioning = true;
    this.updateSlider();
    
    setTimeout(() => {
      this.isTransitioning = false;
    }, this.speed);
  }

  goToNext() {
    if (this.isTransitioning) return;
    
    this.currentIndex++;
    
    // If we've moved beyond the original slides, reset to beginning after animation
    if (this.currentIndex >= this.slides.length) {
      this.isTransitioning = true;
      this.updateSlider();
      
      // After transition, instantly reset to the beginning position
      setTimeout(() => {
        this.currentIndex = 0;
        this.isTransitioning = false;
        this.updateSliderPosition(); // Update position without transition
        this.updateActiveDot();
        this.updateActiveSlide();
      }, this.speed);
    } else {
      this.isTransitioning = true;
      this.updateSlider();
      
      setTimeout(() => {
        this.isTransitioning = false;
      }, this.speed);
    }
  }

  goToPrevious() {
    if (this.isTransitioning) return;
    
    if (this.currentIndex === 0) {
      // Jump to the end instantly, then animate
      this.currentIndex = this.slides.length - 1;
      this.isTransitioning = false;
      this.updateSliderPosition(); // Set position without transition
      
      // Small delay to ensure position is set, then animate
      setTimeout(() => {
        this.isTransitioning = true;
        this.updateSlider();
        
        setTimeout(() => {
          this.isTransitioning = false;
        }, this.speed);
      }, 50);
    } else {
      this.currentIndex--;
      this.isTransitioning = true;
      this.updateSlider();
      
      setTimeout(() => {
        this.isTransitioning = false;
      }, this.speed);
    }
  }

  updateSlider() {
    this.updateSliderPosition();
    this.updateActiveDot();
    this.updateActiveSlide();
    // Remove reRenderSlides to avoid instant DOM changes
  }

  updateActiveDot() {
    const dots = this.element.querySelectorAll('.slick-dots li');
    dots.forEach((dot, index) => {
      dot.classList.toggle('slick-active', index === this.currentIndex);
    });
  }

  updateActiveSlide() {
    const slides = this.element.querySelectorAll('.slick-slide');
    slides.forEach((slide, index) => {
      const isActive = index === this.currentIndex;
      
      slide.classList.toggle('slick-active', isActive);
      slide.classList.toggle('slick-current', isActive);
      slide.setAttribute('aria-hidden', !isActive);
    });
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

  destroy() {
    this.clearAutoPlay();
    if (this.element && this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
    }
  }
}
