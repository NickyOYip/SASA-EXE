// Column Grid Container Component
export class ColumnGridContainer {
  constructor() {
    this.element = null;
    this.init();
  }

  init() {
    this.createElement();
  }

  createElement() {
    this.element = document.createElement('div');
    this.element.className = 'column-grid-container';
    this.element.innerHTML = `
    <div class="sc-hIVHpd hrRWgs">
    <div class="column-grid-container">
        <div class="column-grid-container__wrapper">
            <ul class="column-grid-container__content">
                <li class="column-grid-container__column"
                    style="width: calc(50% - 10px); position: relative; display: flex; margin-right: 20px; margin-bottom: 0px;">
                    <a href="//www.sasa.com.hk/v2/PromotionEngine/Detail/33527" class="image-banner image-full-width">
                        <figure class="image-banner__frame"><img loading="lazy" class="image-banner__picture"
                                alt="BannerE-1"
                                src="https://cms.cdn.91app.hk/images/original/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1750154158-b705rplwhn_d_600x170_400x113.jpg"
                                srcset="https://cms.cdn.91app.hk/images/compress/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1750154158-b705rplwhn_d_600x170.webp  600w,https://cms.cdn.91app.hk/images/compress/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1750154158-b705rplwhn_d_400x113.webp  400w"
                                style="width: 100%; display: block;"></figure>
                    </a></li>
                <li class="column-grid-container__column"
                    style="width: calc(50% - 10px); position: relative; display: flex; margin-right: 0px; margin-bottom: 0px;">
                    <a href="//www.sasa.com.hk/v2/PromotionEngine/Detail/33534" class="image-banner image-full-width">
                        <figure class="image-banner__frame"><img loading="lazy" class="image-banner__picture"
                                alt="BannerE-2"
                                src="https://cms.cdn.91app.hk/images/original/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1750760977-kmpcyrmzbw_d_600x170_400x113.jpg"
                                srcset="https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1750760977-kmpcyrmzbw_d_600x170.webp  600w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1750760977-kmpcyrmzbw_d_400x113.webp  400w"
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
