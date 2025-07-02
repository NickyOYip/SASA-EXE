# Project Structure Documentation

## 📁 Folder Structure

```
src/
├── layouts/                    # Main layout containers
│   ├── header/                 # Header layout
│   │   ├── header.js          # Header main component
│   │   ├── header.css         # Header styles
│   │   └── components/        # Header sub-components
│   │       ├── top/           # Header top section
│   │       │   ├── top-message.js
│   │       │   ├── top-message.css
│   │       │   ├── wrapper.js
│   │       │   └── wrapper.css
│   │       └── bottom/        # Header bottom section
│   │           ├── slider.js
│   │           └── slider.css
│   ├── center/                # Main content layout
│   │   ├── center.js          # Center main component
│   │   ├── center.css         # Center styles
│   │   └── components/        # Center sub-components
│   │       ├── slick-slider.js
│   │       ├── carousel-container.js
│   │       ├── section-header.js
│   │       ├── timer.js
│   │       ├── product-container-wrapper.js
│   │       ├── image-banner.js
│   │       ├── column-grid-container.js
│   │       └── brand-wrapper.js
│   └── footer/                # Footer layout
│       ├── footer.js          # Footer main component
│       ├── footer.css         # Footer styles
│       └── components/        # Footer sub-components
└── app.js                     # Main application entry point
```

## 🏗️ Component Architecture

### Layout Structure
- **Header**: Contains top message, wrapper, and slider
- **Center**: Main content area with multiple sections
- **Footer**: Bottom section of the page

### Component Hierarchy
```
App
├── Header
│   ├── Top
│   │   ├── TopMessage
│   │   └── Wrapper
│   └── Bottom
│       └── Slider
├── Center
│   ├── SlickSlider
│   ├── CarouselContainer (x2)
│   ├── SectionHeader (multiple)
│   ├── Timer
│   ├── ProductContainerWrapper (multiple)
│   ├── ImageBanner (multiple)
│   ├── ColumnGridContainer (multiple)
│   └── BrandWrapper (multiple)
└── Footer
```

## 🎯 Usage

### Import Components
```javascript
import { Header } from './layouts/header/header.js';
import { Center } from './layouts/center/center.js';
import { Footer } from './layouts/footer/footer.js';
```

### Initialize Components
```javascript
const header = new Header();
const center = new Center();
const footer = new Footer();
```

### Add to DOM
```javascript
document.body.appendChild(header.render());
document.body.appendChild(center.render());
document.body.appendChild(footer.render());
```

## 📝 Component Template

Each component follows this structure:
```javascript
export class ComponentName {
  constructor() {
    this.element = null;
    this.init();
  }

  init() {
    this.createElement();
  }

  createElement() {
    this.element = document.createElement('div');
    this.element.className = 'component-name';
    this.element.innerHTML = `
      <!-- Component HTML -->
    `;
  }

  render() {
    return this.element;
  }
}
```

## 🎨 Styling

- Each component has its own CSS file
- Use BEM naming convention for CSS classes
- Import CSS files in the main app.js or component files

## 🚀 Getting Started

1. Run `npm run dev` to start development server
2. Edit components in their respective folders
3. Add custom styles to component CSS files
4. Import and use components in app.js
