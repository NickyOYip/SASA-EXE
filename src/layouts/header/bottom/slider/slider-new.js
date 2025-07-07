// Slider Component - Data-driven slider using JSON configuration
import sliderData from './data/slider-data.json' assert { type: 'json' };

export class Slider {
  constructor(options = {}) {
    this.data = options.data || sliderData.sliderData;
    // Find the active slide from data, default to 0 if none found
    const activeIndex = this.data.slides.findIndex(slide => slide.isActive);
    this.currentSlide = activeIndex !== -1 ? activeIndex : 0;
    this.element = null;
    this.track = null;
    this.dots = [];
    this.intervalId = null;
    this.init();
  }

  init() {
    this.createElement();
    this.setupEventListeners();
    // Set initial position
    this.updateSlider();
    // Responsive: update on window resize
    window.addEventListener('resize', () => this.updateSlider());
    if (this.data.settings.autoPlay) {
      this.startAutoPlay();
    }
  }

  createElement() {
    this.element = document.createElement('div');
    this.element.className = 'carousel-container';

    const slickContainer = document.createElement('div');
    slickContainer.className = 'slick-slider carousel-container--content slick-initialized';
    slickContainer.dir = 'ltr';

    // Left arrow (prev)
    const prevA = document.createElement('a');
    prevA.className = 'sc-hilkcu sc-bQuRqn hRrlxJ eMKquP';
    prevA.innerHTML = '<i class="ico ico-chevron-left"></i>';
    prevA.setAttribute('role', 'button');
    prevA.setAttribute('tabindex', '0');
    prevA.setAttribute('aria-label', 'Previous slide');

    // Slider list container
    const slickList = document.createElement('div');
    slickList.className = 'slick-list';

    // Slider track
    this.track = document.createElement('div');
    this.track.className = 'slick-track';
    this.track.style.display = 'flex';

    // Clone slides for infinite effect
    const slides = this.data.slides;
    const cloneCount = 1; // for single-slide view, clone 1 at each end
    this.slideCount = slides.length;
    this.slideWidth = null; // will be set after mount
    this.clonesBefore = [];
    this.clonesAfter = [];
    // Clone last N slides to the front
    for (let i = slides.length - cloneCount; i < slides.length; i++) {
      const clone = this.createSlide(slides[i], i, true);
      this.clonesBefore.push(clone);
      this.track.appendChild(clone);
    }
    // Real slides
    this.realSlides = [];
    slides.forEach((slide, index) => {
      const slideElement = this.createSlide(slide, index, false);
      this.realSlides.push(slideElement);
      this.track.appendChild(slideElement);
    });
    // Clone first N slides to the end
    for (let i = 0; i < cloneCount; i++) {
      const clone = this.createSlide(slides[i], i, true);
      this.clonesAfter.push(clone);
      this.track.appendChild(clone);
    }

    slickList.appendChild(this.track);

    // Right arrow (next)
    const nextA = document.createElement('a');
    nextA.className = 'sc-hilkcu sc-bQuRqn jYMTSe eMKquP';
    nextA.innerHTML = '<i class="ico ico-chevron-right"></i>';
    nextA.setAttribute('role', 'button');
    nextA.setAttribute('tabindex', '0');
    nextA.setAttribute('aria-label', 'Next slide');

    // Dots
    let dotsContainer = null;
    if (this.data.settings.showDots) {
      dotsContainer = this.createDots();
      dotsContainer.style.display = 'block';
    }

    // Compose DOM in correct order
    slickContainer.appendChild(prevA);
    slickContainer.appendChild(slickList);
    slickContainer.appendChild(nextA);
    if (dotsContainer) slickContainer.appendChild(dotsContainer);
    this.element.appendChild(slickContainer);

    // Save for later
    this.slickList = slickList;
    this.prevBtn = prevA;
    this.nextBtn = nextA;
  }

  createSlide(slide, index, isClone = false) {
    const slideDiv = document.createElement('div');
    let tabIndexValue = -1;
    if (isClone) {
      // Use a unique negative tabindex for clones to avoid conflicts
      tabIndexValue = -100000 - index;
    }
    slideDiv.className = `slick-slide${isClone ? ' slick-cloned' : ''}${slide.isActive && !isClone ? ' slick-active slick-current' : ''}`;
    slideDiv.setAttribute('data-index', index);
    slideDiv.style.width = '100%';
    slideDiv.style.minWidth = '1280px';
    slideDiv.style.flexShrink = '0';
    slideDiv.setAttribute('tabindex', tabIndexValue);
    slideDiv.setAttribute('aria-hidden', slide.isActive && !isClone ? 'false' : 'true');
    const innerDiv = document.createElement('div');
    const carouselItem = document.createElement('div');
    carouselItem.className = 'mutiple-carousel-item';
    carouselItem.setAttribute('tabindex', tabIndexValue);
    carouselItem.style.cssText = 'width: 100%; min-width: 1280px; display: inline-block;';
    const link = document.createElement('a');
    link.href = slide.href;
    link.className = 'image-banner';
    const figure = document.createElement('figure');
    figure.className = 'image-banner__frame';
    const img = document.createElement('img');
    img.loading = 'lazy';
    img.className = 'image-banner__picture';
    img.alt = slide.alt;
    img.src = slide.image.src;
    // Build srcset string
    const srcsetString = slide.image.srcset
      .map(src => `${src.url} ${src.width}`)
      .join(', ');
    img.srcset = srcsetString;
    img.style.cssText = 'width: 100%; min-width: 1280px; display: block; object-fit: cover;';
    figure.appendChild(img);
    link.appendChild(figure);
    carouselItem.appendChild(link);
    innerDiv.appendChild(carouselItem);
    slideDiv.appendChild(innerDiv);
    return slideDiv;
  }

  createDots() {
    const dotsContainer = document.createElement('ul');
    dotsContainer.className = 'slick-dots';
    dotsContainer.style.display = 'block';

    this.data.slides.forEach((slide, index) => {
      const dot = document.createElement('li');
      if (slide.isActive) {
        dot.className = 'slick-active';
      }

      const button = document.createElement('button');
      button.textContent = index + 1;
      button.setAttribute('aria-label', `Go to slide ${index + 1}`);

      dot.appendChild(button);
      dotsContainer.appendChild(dot);
      this.dots.push(dot);
    });

    return dotsContainer;
  }

  setupEventListeners() {
    // Previous button
    this.prevBtn.addEventListener('click', () => this.prevSlide());

    // Next button  
    this.nextBtn.addEventListener('click', () => this.nextSlide());

    // Dot navigation
    this.dots.forEach((dot, index) => {
      dot.addEventListener('click', () => this.goToSlide(index));
    });

    // Pause autoplay on hover
    this.element.addEventListener('mouseenter', () => this.stopAutoPlay());
    this.element.addEventListener('mouseleave', () => {
      if (this.data.settings.autoPlay) {
        this.startAutoPlay();
      }
    });
  }

  updateSlider(jump = false) {
    // Always recalculate slideWidth for responsive behavior
    this.slideWidth = this.slickList.offsetWidth;
    // Set all slide widths
    this.track.querySelectorAll('.slick-slide').forEach(slide => {
      slide.style.width = this.slideWidth + 'px';
    });
    // Infinite: offset by cloneCount
    const cloneCount = 1;
    let slideTo = this.currentSlide + cloneCount;
    const slides = Array.from(this.track.querySelectorAll('.slick-slide'));
    const translateX = -slideTo * this.slideWidth;
    this.track.style.transition = jump ? 'none' : 'transform 1500ms cubic-bezier(0.77,0,0.175,1)';
    this.track.style.transform = `translateX(${translateX}px)`;
    // Update active slide classes and aria-hidden
    slides.forEach((slide, index) => {
      slide.classList.remove('slick-active', 'slick-current');
      slide.setAttribute('aria-hidden', 'true');
    });
    if (slides[slideTo]) {
      slides[slideTo].classList.add('slick-active', 'slick-current');
      slides[slideTo].setAttribute('aria-hidden', 'false');
      // Debug: log which slide is visible
      // console.debug('Visible slide index:', slideTo, slides[slideTo]);
    }
    // Update active dot
    this.dots.forEach((dot, index) => {
      dot.classList.toggle('slick-active', index === this.currentSlide);
    });
    // If at clone, jump to real slide after transition
    if (!jump) {
      setTimeout(() => {
        if (this.currentSlide === -1) {
          this.currentSlide = this.slideCount - 1;
          this.updateSlider(true);
        } else if (this.currentSlide === this.slideCount) {
          this.currentSlide = 0;
          this.updateSlider(true);
        }
      }, 1550);
    }
  }

  nextSlide() {
    this.currentSlide++;
    if (this.currentSlide > this.slideCount) this.currentSlide = this.slideCount;
    this.updateSlider();
  }

  prevSlide() {
    this.currentSlide--;
    if (this.currentSlide < -1) this.currentSlide = -1;
    this.updateSlider();
  }

  goToSlide(index) {
    this.currentSlide = index;
    this.updateSlider();
  }

  startAutoPlay() {
    this.stopAutoPlay();
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, this.data.settings.autoPlayInterval || 5000);
  }

  stopAutoPlay() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  destroy() {
    this.stopAutoPlay();
    if (this.element) {
      this.element.remove();
    }
  }

  render() {
    return this.element;
  }
}
