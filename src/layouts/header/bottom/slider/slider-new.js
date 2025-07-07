// Slider Component - Data-driven slider using JSON configuration
import sliderData from './data/slider-data.json' assert { type: 'json' };

export class Slider {
  constructor(options = {}) {
    this.data = options.data || sliderData.sliderData;
    this.currentSlide = 0;
    this.element = null;
    this.track = null;
    this.dots = [];
    this.intervalId = null;
    this.init();
  }

  init() {
    this.createElement();
    this.setupEventListeners();
    if (this.data.settings.autoPlay) {
      this.startAutoPlay();
    }
  }

  createElement() {
    this.element = document.createElement('div');
    this.element.className = 'slider sasa-slider';
    
    const container = document.createElement('div');
    container.className = 'carousel-container';
    
    const slickContainer = document.createElement('div');
    slickContainer.className = 'slick-slider carousel-container--content slick-initialized';
    slickContainer.dir = 'ltr';
    
    // Previous button
    const prevBtn = document.createElement('button');
    prevBtn.className = 'slick-prev slick-arrow';
    prevBtn.innerHTML = '<i class="ico ico-chevron-left" style="font-size: 24px;line-height: 50px;"></i>';
    prevBtn.setAttribute('aria-label', 'Previous slide');
    prevBtn.style.position = 'absolute';
    prevBtn.style.left = '10px';
    prevBtn.style.top = '50%';
    prevBtn.style.transform = 'translateY(-50%)';
    prevBtn.style.zIndex = '10';
    prevBtn.style.background = 'rgba(255, 255, 255, 0.85)';
    prevBtn.style.border = 'none';
    prevBtn.style.color = 'white';
    prevBtn.style.padding = '10px';
    prevBtn.style.borderRadius = '50%';
    prevBtn.style.cursor = 'pointer';
    prevBtn.style.width = '50px';
    prevBtn.style.height = '50px';
    prevBtn.style.display = 'flex';
    prevBtn.style.alignItems = 'center';
    prevBtn.style.justifyContent = 'center';

    // Slider list container
    const slickList = document.createElement('div');
    slickList.className = 'slick-list';
    slickList.style.position = 'relative';
    slickList.style.overflow = 'hidden';
    
    // Slider track
    this.track = document.createElement('div');
    this.track.className = 'slick-track';
    this.track.style.width = `${this.data.slides.length * 100}%`;
    this.track.style.opacity = '1';
    this.track.style.transition = 'transform 1500ms ease';
    this.track.style.display = 'flex';

    
    // Create slides
    this.data.slides.forEach((slide, index) => {
      const slideElement = this.createSlide(slide, index);
      this.track.appendChild(slideElement);
    });
    
    slickList.appendChild(this.track);
    
    // Next button
    const nextBtn = document.createElement('button');
    nextBtn.className = 'slick-next slick-arrow';
    nextBtn.innerHTML = '<i class="ico ico-chevron-right"></i>';
    nextBtn.setAttribute('aria-label', 'Next slide');
    nextBtn.style.position = 'absolute';
    nextBtn.style.right = '10px';
    nextBtn.style.top = '50%';
    nextBtn.style.transform = 'translateY(-50%)';
    nextBtn.style.zIndex = '10';
    nextBtn.style.background = 'rgb(255, 255, 255, 0.85)';
    nextBtn.style.border = 'none';
    nextBtn.style.color = 'white';
    nextBtn.style.padding = '10px';
    nextBtn.style.borderRadius = '50%';
    nextBtn.style.cursor = 'pointer';
    nextBtn.style.width = '50px';
    nextBtn.style.height = '50px';
    nextBtn.style.display = 'flex';
    nextBtn.style.alignItems = 'center';
    nextBtn.style.justifyContent = 'center';
    
    // Dots/pagination
    const dotsContainer = this.createDots();
    dotsContainer.style.position = 'absolute';
    dotsContainer.style.bottom = '20px';
    dotsContainer.style.left = '50%';
    dotsContainer.style.transform = 'translateX(-50%)';
    dotsContainer.style.zIndex = '10';
    dotsContainer.style.margin = '0';
    dotsContainer.style.padding = '0';
    
    // Assemble the slider
    slickList.appendChild(this.track);
    slickList.appendChild(prevBtn);
    slickList.appendChild(nextBtn);
    slickList.appendChild(dotsContainer);
    
    slickContainer.appendChild(slickList);
    
    container.appendChild(slickContainer);
    this.element.appendChild(container);
    
    // Store references for event handling
    this.prevBtn = prevBtn;
    this.nextBtn = nextBtn;
  }
  
  createSlide(slide, index) {
    const slideDiv = document.createElement('div');
    slideDiv.className = `slick-slide ${slide.isActive ? 'slick-active slick-current' : ''}`;
    slideDiv.setAttribute('data-index', index);
    slideDiv.style.width = `${100 / this.data.slides.length}%`;
    slideDiv.style.flexShrink = '0';
    slideDiv.setAttribute('tabindex', '-1');
    slideDiv.setAttribute('aria-hidden', slide.isActive ? 'false' : 'true');
    
    const innerDiv = document.createElement('div');
    
    const carouselItem = document.createElement('div');
    carouselItem.className = 'mutiple-carousel-item';
    carouselItem.setAttribute('tabindex', '-1');
    carouselItem.style.cssText = 'width: 100%; display: inline-block;';
    
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
    img.style.cssText = 'width: 100%; display: block;';
    
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
  
  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.data.slides.length;
    this.updateSlider();
  }
  
  prevSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.data.slides.length - 1 : this.currentSlide - 1;
    this.updateSlider();
  }
  
  goToSlide(index) {
    this.currentSlide = index;
    this.updateSlider();
  }
  
  updateSlider() {
    const translateX = -this.currentSlide * 100/8;
    this.track.style.transform = `translateX(${translateX}%)`;
    
    // Update active slide classes
    this.track.querySelectorAll('.slick-slide').forEach((slide, index) => {
      slide.classList.toggle('slick-active', index === this.currentSlide);
      slide.classList.toggle('slick-current', index === this.currentSlide);
      slide.setAttribute('aria-hidden', index === this.currentSlide ? 'false' : 'true');
    });
    
    // Update active dot
    this.dots.forEach((dot, index) => {
      dot.classList.toggle('slick-active', index === this.currentSlide);
    });
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
