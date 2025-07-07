// Center Layout Component
import { SlickSlider } from './slick-slider/slick-slider.js';
import { CarouselContainer } from './carousel-container/carousel-container.js';
import { SectionHeader } from './section-header/section-header.js';
import { Timer } from './timer/timer.js';
import { ProductContainerWrapper } from './product-container-wrapper/product-container-wrapper.js';
import { ColumnGridContainer } from './column-grid-container/column-grid-container.js';
import { ImageBanner } from './image-banner/image-banner.js';
import { BrandWrapper } from './brand-wrapper/brand-wrapper.js';

export class Center {
  constructor() {
    this.element = null;
    this.slickSlider = new SlickSlider();
    this.carouselContainer1 = new CarouselContainer();
    this.carouselContainer2 = new CarouselContainer();
    this.sectionHeader1 = new SectionHeader();
    this.sectionHeader2 = new SectionHeader();
    this.sectionHeader3 = new SectionHeader();
    this.sectionHeader4 = new SectionHeader();
    this.timer = new Timer();
    // Create multiple product container instances
    this.productContainer1 = new ProductContainerWrapper();
    this.productContainer2 = new ProductContainerWrapper();
    this.productContainer3 = new ProductContainerWrapper();
    this.productContainer4 = new ProductContainerWrapper();
    this.productContainer5 = new ProductContainerWrapper();
    this.productContainer6 = new ProductContainerWrapper();
    this.productContainer7 = new ProductContainerWrapper();

    this.columnGridContainer1 = new ColumnGridContainer();
    this.columnGridContainer2 = new ColumnGridContainer();
    this.columnGridContainer3 = new ColumnGridContainer();
    this.columnGridContainer4 = new ColumnGridContainer();

    // Create image banner instances
    this.imageBanner1 = new ImageBanner();
    this.imageBanner2 = new ImageBanner();
    this.imageBanner3 = new ImageBanner();
    this.imageBanner4 = new ImageBanner();
    this.imageBanner5 = new ImageBanner();
    this.imageBanner6 = new ImageBanner();
    this.imageBanner7 = new ImageBanner();
    this.imageBanner8 = new ImageBanner();
    this.imageBanner9 = new ImageBanner();
    this.imageBanner10 = new ImageBanner();
    this.imageBanner11 = new ImageBanner();
    this.imageBanner12 = new ImageBanner();
    this.imageBanner13 = new ImageBanner();

    // Create brand wrapper instances
    this.brandWrapper1 = new BrandWrapper();
    this.brandWrapper2 = new BrandWrapper();
    this.brandWrapper3 = new BrandWrapper();

    this.init();
  }

  init() {
    this.createElement();
  }

  createElement() {
    this.element = document.createElement('main');
    this.element.className = 'center';
    
    // Add the actual SlickSlider component
    this.element.appendChild(this.slickSlider.render());
    
    // Add carousel containers
    this.element.appendChild(this.carouselContainer1.render());
    this.element.appendChild(this.carouselContainer2.render());
    
    // Add section headers and other components
    this.element.appendChild(this.sectionHeader1.render());
    
    // Add timer component
    this.element.appendChild(this.timer.render());
    
    // Add product containers
    this.element.appendChild(this.productContainer1.render());
    this.element.appendChild(this.productContainer2.render());
    
    this.element.appendChild(this.sectionHeader2.render());
    
    this.element.appendChild(this.productContainer3.render());
    
    // Add image banner
    this.element.appendChild(this.imageBanner1.render());
    this.element.appendChild(this.columnGridContainer1.render());
    this.element.appendChild(this.columnGridContainer2.render());
    this.element.appendChild(this.columnGridContainer3.render());

    this.element.appendChild(this.sectionHeader3.render());
    
    this.element.appendChild(this.productContainer4.render());
    
    // Add image banner
    this.element.appendChild(this.imageBanner2.render());
    
    this.element.appendChild(this.productContainer5.render());
    this.element.appendChild(this.productContainer6.render());
    
    this.element.appendChild(this.sectionHeader4.render());
    
    // Add image banner
    this.element.appendChild(this.imageBanner3.render());
    
    // Add remaining product containers with image banners
    this.element.appendChild(this.productContainer7.render());
    
    this.element.appendChild(this.imageBanner4.render());
    this.element.appendChild(this.imageBanner5.render());
    this.element.appendChild(this.imageBanner6.render());
    this.element.appendChild(this.imageBanner7.render());
    this.element.appendChild(this.imageBanner8.render());
    this.element.appendChild(this.imageBanner9.render());
    this.element.appendChild(this.imageBanner10.render());
    this.element.appendChild(this.imageBanner11.render());
    
    
    this.element.appendChild(this.brandWrapper1.render());
    
    this.element.appendChild(this.imageBanner12.render());
    
    this.element.appendChild(this.brandWrapper2.render());
    
    this.element.appendChild(this.brandWrapper3.render());
    
    this.element.appendChild(this.columnGridContainer4.render());
    this.element.appendChild(this.imageBanner13.render());
  }

  render() {
    return this.element;
  }
}
