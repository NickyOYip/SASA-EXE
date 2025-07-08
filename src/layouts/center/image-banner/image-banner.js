// Image Banner Component
export class ImageBanner {
  constructor() {
    this.element = null;
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
                    <a href="//www.sasa.com.hk/page/HotHeroItems" class="image-banner image-full-width">
                        <figure class="image-banner__frame"><img loading="lazy" class="image-banner__picture"
                                alt="PIP_Session_EN"
                                src="https://cms.cdn.91app.hk/images/original/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1734945050-q5dhgglxik_d_1280x220_1124x193_800x138_600x103_400x69.jpg"
                                srcset="https://cms.cdn.91app.hk/images/compress/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1734945050-q5dhgglxik_d_1280x220.webp  1280w,https://cms.cdn.91app.hk/images/compress/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1734945050-q5dhgglxik_d_1124x193.webp  1124w,https://cms.cdn.91app.hk/images/compress/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1734945050-q5dhgglxik_d_800x138.webp  800w,https://cms.cdn.91app.hk/images/compress/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1734945050-q5dhgglxik_d_600x103.webp  600w,https://cms.cdn.91app.hk/images/compress/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1734945050-q5dhgglxik_d_400x69.webp  400w"
                                style="width: 100%; display: block;"></figure>
                    </a></li>
            </ul>
        </div>
    </div>
</div>
    `;
  }

  render() {
    return this.element;
  }
}
