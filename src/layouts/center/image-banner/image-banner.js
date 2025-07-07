// Image Banner Component
export class ImageBanner {
  constructor(options = {}) {
    this.element = null;
    this.link = options.link || "//www.sasa.com.hk/page/HotHeroItems";
    this.imageUrl = options.imageUrl || "https://cms.cdn.91app.hk/images/original/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1734945050-q5dhgglxik_d_1280x220_1124x193_800x138_600x103_400x69.jpg";
    this.alt = options.alt || "Banner Image";
    this.srcset = options.srcset || "https://cms.cdn.91app.hk/images/compress/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1734945050-q5dhgglxik_d_1280x220.webp  1280w,https://cms.cdn.91app.hk/images/compress/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1734945050-q5dhgglxik_d_1124x193.webp  1124w,https://cms.cdn.91app.hk/images/compress/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1734945050-q5dhgglxik_d_800x138.webp  800w,https://cms.cdn.91app.hk/images/compress/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1734945050-q5dhgglxik_d_600x103.webp  600w,https://cms.cdn.91app.hk/images/compress/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1734945050-q5dhgglxik_d_400x69.webp  400w";
    this.init();
  }

  init() {
    this.createElement();
  }

  createElement() {
    this.element = document.createElement('div');
    this.element.className = 'image-banner';
    this.element.innerHTML = `
      <div class="sc-hIVHpd hrRWgs">
    <div class="column-grid-container">
        <div class="column-grid-container__wrapper">
            <ul class="column-grid-container__content">
                <li class="column-grid-container__column"
                    style="width: calc(100% + 0px); position: relative; display: flex; margin-right: 0px; margin-bottom: 0px;">
                    <a href="${this.link}" class="image-banner image-full-width">
                        <figure class="image-banner__frame"><img loading="lazy" class="image-banner__picture"
                                alt="${this.alt}"
                                src="${this.imageUrl}"
                                srcset="${this.srcset}"
                                style="width: 100%; display: block;"></figure>
                    </a></li>
            </ul>
        </div>
    </div>
</div>
    `;
  }

  // Method to update banner content
  updateBanner(options = {}) {
    if (options.link) this.link = options.link;
    if (options.imageUrl) this.imageUrl = options.imageUrl;
    if (options.alt) this.alt = options.alt;
    if (options.srcset) this.srcset = options.srcset;
    
    // Recreate the element with new content
    this.createElement();
  }

  // Helper method to generate srcset from base URL
  static generateSrcset(baseUrl, sizes = ['1280x220', '1124x193', '800x138', '600x103', '400x69']) {
    return sizes.map((size, index) => {
      const width = size.split('x')[0];
      const webpUrl = baseUrl.replace(/\.(jpg|jpeg|png)$/, '.webp').replace(/_d_[^.]+\./, `_d_${size}.`);
      return `${webpUrl} ${width}w`;
    }).join(',');
  }

  render() {
    return this.element;
  }
}
