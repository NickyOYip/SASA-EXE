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

    // Create image banner instances with custom options
    this.imageBanner1 = new ImageBanner({
      link: "//www.sasa.com.hk/page/SpecialOffers",
      imageUrl: "https://cms.cdn.91app.hk/images/original/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1734945050-q5dhgglxik_d_1280x220_1124x193_800x138_600x103_400x69.jpg",
      alt: "Special Offers Banner"
    });
    this.imageBanner2 = new ImageBanner({
      link: "//www.sasa.com.hk/page/NewArrivals",
      imageUrl: "https://cms.cdn.91app.hk/images/original/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751006403-f7wbj3ziye_d_1280x130_1124x114_800x81_600x61_400x41.jpg",
      alt: "New Arrivals Banner"
    });
    this.imageBanner3 = new ImageBanner({
      link: "//www.sasa.com.hk/page/BestSellers",
      alt: "Best Sellers Banner"
    });
    // Use default options for remaining banners
    this.imageBanner4 = new ImageBanner();
    this.imageBanner5 = new ImageBanner();
    this.imageBanner6 = new ImageBanner();
    this.imageBanner7 = new ImageBanner();


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
    
    
    this.element.appendChild(this.brandWrapper1.render());
    
    
    this.element.appendChild(this.brandWrapper2.render());
    
    this.element.appendChild(this.brandWrapper3.render());
    
    this.element.appendChild(this.columnGridContainer4.render());
  }

  render() {
    return this.element;
  }
}
