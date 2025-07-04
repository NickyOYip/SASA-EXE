// Carousel Container Component
export class CarouselContainer {
  constructor() {
    this.element = null;
    this.init();
  }

  init() {
    this.createElement();
  }

  createElement() {
    this.element = document.createElement('div');
    this.element.className = 'carousel-container';
    this.element.innerHTML = `
<div class="sc-hIVHpd hrRWgs">
    <div class="carousel-container">
        <div class="slick-slider carousel-container--content slick-initialized">
            <div class="slick-list">
                <div class="slick-track" style="width: 1180px; opacity: 1; transform: translate3d(0px, 0px, 0px);">
                    <div data-index="0" class="slick-slide slick-active slick-current" tabindex="-1" aria-hidden="false"
                        style="outline: none; width: 1180px;">
                        <div>
                            <div class="mutiple-carousel-item" tabindex="-1"
                                style="width: 100%; display: inline-block;"><a
                                    href="//www.sasa.com.hk/page/CommentsnReviews" class="image-banner">
                                    <figure class="image-banner__frame"><img loading="lazy"
                                            class="image-banner__picture" alt="BannerD-carousel-2"
                                            src="https://cms.cdn.91app.hk/images/original/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751006403-f7wbj3ziye_d_1280x130_1124x114_800x81_600x61_400x41.jpg"
                                            srcset="https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751006403-f7wbj3ziye_d_1280x130.webp  1280w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751006403-f7wbj3ziye_d_1124x114.webp  1124w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751006403-f7wbj3ziye_d_800x81.webp  800w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751006403-f7wbj3ziye_d_600x61.webp  600w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751006403-f7wbj3ziye_d_400x41.webp  400w"
                                            style="width: 100%; display: block;"></figure>
                                </a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `;
  }

  render() {
    return this.element;
  }
}
