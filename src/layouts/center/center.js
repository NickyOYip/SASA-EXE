// Center Layout Component
import { SlickSlider } from './slick-slider/slick-slider.js';
import { CarouselContainer } from './carousel-container/carousel-container.js';
import { SectionHeader } from './section-header/section-header.js';
import { Timer } from './timer/timer.js';
import { ProductContainerWrapper } from './product-container-wrapper/product-container-wrapper.js';
import { Banner } from './banner/banner.js';

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
    this.timer1 = new Timer();
    this.timer2 = new Timer();
    this.banner = new Banner();

    // Create multiple product container instances
    this.productContainer1 = new ProductContainerWrapper();
    this.productContainer2 = new ProductContainerWrapper();
    this.productContainer3 = new ProductContainerWrapper();
    this.productContainer4 = new ProductContainerWrapper();
    this.productContainer5 = new ProductContainerWrapper();
    this.productContainer6 = new ProductContainerWrapper();
    this.productContainer7 = new ProductContainerWrapper();
    this.productContainer8 = new ProductContainerWrapper();
    this.productContainer9 = new ProductContainerWrapper();
    this.productContainer10 = new ProductContainerWrapper();
    this.productContainer11 = new ProductContainerWrapper();
    this.productContainer12 = new ProductContainerWrapper();
    this.productContainer13 = new ProductContainerWrapper();
    this.productContainer14 = new ProductContainerWrapper();
    this.productContainer15 = new ProductContainerWrapper();
    this.productContainer16 = new ProductContainerWrapper();
    this.productContainer17 = new ProductContainerWrapper();
    this.productContainer18 = new ProductContainerWrapper();
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
    this.element.appendChild(this.timer1.render());
    
    // Add the banner below the main slider
    this.element.appendChild(this.banner.render());

    
    this.element.appendChild(this.timer2.render());

    // Add product containers
    this.element.appendChild(this.productContainer1.render());
    this.element.appendChild(this.productContainer2.render());
    
    this.element.appendChild(this.sectionHeader2.render());
    
    this.element.appendChild(this.productContainer3.render());
    
    const moreContent = document.createElement('div');
    moreContent.innerHTML = `
      <div class="image-banner"></div>
    `;
    this.element.appendChild(moreContent);
    
    this.element.appendChild(this.sectionHeader3.render());
    
    this.element.appendChild(this.productContainer4.render());
    
    const evenMoreContent = document.createElement('div');
    evenMoreContent.innerHTML = `
      <div class="image-banner"></div>
    `;
    this.element.appendChild(evenMoreContent);
    
    this.element.appendChild(this.productContainer5.render());
    this.element.appendChild(this.productContainer6.render());
    
    this.element.appendChild(this.sectionHeader4.render());
    
    const finalContent = document.createElement('div');
    finalContent.innerHTML = `
      <div class="slick-track"></div>
      <div class="column-grid-container"></div>
      <div class="column-grid-container"></div>
      <div class="column-grid-container"></div>
      <div class="column-grid-container"></div>
      <div class="column-grid-container"></div>
      <div class="column-grid-container"></div>
      <div class="column-grid-container"></div>
      <div class="image-banner"></div>
    `;
    this.element.appendChild(finalContent);
    
    // Add remaining product containers with image banners
    this.element.appendChild(this.productContainer7.render());
    
    const imageBanner1 = document.createElement('div');
    imageBanner1.innerHTML = '<div class="image-banner"></div>';
    this.element.appendChild(imageBanner1);
    
    this.element.appendChild(this.productContainer8.render());
    
    const imageBanner2 = document.createElement('div');
    imageBanner2.innerHTML = '<div class="image-banner"></div>';
    this.element.appendChild(imageBanner2);
    
    this.element.appendChild(this.productContainer9.render());
    
    const imageBanner3 = document.createElement('div');
    imageBanner3.innerHTML = '<div class="image-banner"></div>';
    this.element.appendChild(imageBanner3);
    
    this.element.appendChild(this.productContainer10.render());
    
    const imageBanner4 = document.createElement('div');
    imageBanner4.innerHTML = '<div class="image-banner"></div>';
    this.element.appendChild(imageBanner4);
    
    this.element.appendChild(this.productContainer11.render());
    
    const imageBanner5 = document.createElement('div');
    imageBanner5.innerHTML = '<div class="image-banner"></div>';
    this.element.appendChild(imageBanner5);
    
    this.element.appendChild(this.productContainer12.render());
    
    const imageBanner6 = document.createElement('div');
    imageBanner6.innerHTML = '<div class="image-banner"></div>';
    this.element.appendChild(imageBanner6);
    
    this.element.appendChild(this.productContainer13.render());
    
    const imageBanner7 = document.createElement('div');
    imageBanner7.innerHTML = '<div class="image-banner"></div>';
    this.element.appendChild(imageBanner7);
    
    this.element.appendChild(this.productContainer14.render());
    
    const imageBanner8 = document.createElement('div');
    imageBanner8.innerHTML = '<div class="image-banner"></div>';
    this.element.appendChild(imageBanner8);
    
    this.element.appendChild(this.productContainer15.render());
    
    const brandWrapper1 = document.createElement('div');
    brandWrapper1.innerHTML = '<div class="brand--wrapper"></div>';
    this.element.appendChild(brandWrapper1);
    
    const imageBanner9 = document.createElement('div');
    imageBanner9.innerHTML = '<div class="image-banner"></div>';
    this.element.appendChild(imageBanner9);
    
    this.element.appendChild(this.productContainer16.render());
    
    const brandWrapper2 = document.createElement('div');
    brandWrapper2.innerHTML = '<div class="brand--wrapper"></div>';
    this.element.appendChild(brandWrapper2);
    
    const imageBanner10 = document.createElement('div');
    imageBanner10.innerHTML = '<div class="image-banner"></div>';
    this.element.appendChild(imageBanner10);
    
    this.element.appendChild(this.productContainer17.render());
    
    const brandWrapper3 = document.createElement('div');
    brandWrapper3.innerHTML = '<div class="brand--wrapper"></div>';
    this.element.appendChild(brandWrapper3);
    
    const imageBanner11 = document.createElement('div');
    imageBanner11.innerHTML = '<div class="image-banner"></div>';
    this.element.appendChild(imageBanner11);
    
    this.element.appendChild(this.productContainer18.render());
    
    const finalElements = document.createElement('div');
    finalElements.innerHTML = `
      <div class="column-grid-container"></div>
      <div class="image-banner"></div>
      <div class="image-banner"></div>
    `;
    this.element.appendChild(finalElements);
  }

  render() {
    return this.element;
  }
}
