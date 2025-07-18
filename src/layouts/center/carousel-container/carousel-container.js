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
<div class="carousel-container">
    <div class="slick-slider carousel-container--content slick-initialized" dir="ltr"><a class="sc-hilkcu hRrlxJ"><i
                class="ico ico-chevron-left"></i></a>
        <div class="slick-list">
            <div class="slick-track" style="width: 3705px; opacity: 1; transform: translate3d(-1482px, 0px, 0px);">
                <div data-index="-1" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
                    style="width: 741px;">
                    <div>
                        <div class="mutiple-carousel-item" tabindex="-1" style="width: 100%; display: inline-block;"><a
                                href="//www.sasa.com.hk/page/ZAbank" class="image-banner">
                                <figure class="image-banner__frame"><img loading="lazy" class="image-banner__picture"
                                        alt="BannerD-carousel-3"
                                        src="https://cms.cdn.91app.hk/images/original/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1750309541-p7jydmkjbj_d_1280x130_1124x114_800x81_600x61_400x41.png"
                                        srcset="https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1750309541-p7jydmkjbj_d_1280x130.webp  1280w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1750309541-p7jydmkjbj_d_1124x114.webp  1124w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1750309541-p7jydmkjbj_d_800x81.webp  800w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1750309541-p7jydmkjbj_d_600x61.webp  600w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1750309541-p7jydmkjbj_d_400x41.webp  400w"
                                        style="width: 100%; display: block;"></figure>
                            </a></div>
                    </div>
                </div>
                <div data-index="0" class="slick-slide" tabindex="-1" aria-hidden="true"
                    style="outline: none; width: 741px;">
                    <div>
                        <div class="mutiple-carousel-item" tabindex="-1" style="width: 100%; display: inline-block;"><a
                                href="//www.sasa.com.hk/page/PayMe" class="image-banner">
                                <figure class="image-banner__frame"><img loading="lazy" class="image-banner__picture"
                                        alt="BannerD-carousel-2"
                                        src="https://cms.cdn.91app.hk/images/original/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751273399-scv57ne95n_d_1280x130_1124x114_800x81_600x61_400x41.jpg"
                                        srcset="https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751273399-scv57ne95n_d_1280x130.webp  1280w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751273399-scv57ne95n_d_1124x114.webp  1124w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751273399-scv57ne95n_d_800x81.webp  800w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751273399-scv57ne95n_d_600x61.webp  600w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751273399-scv57ne95n_d_400x41.webp  400w"
                                        style="width: 100%; display: block;"></figure>
                            </a></div>
                    </div>
                </div>
                <div data-index="1" class="slick-slide slick-active slick-current" tabindex="-1" aria-hidden="false"
                    style="outline: none; width: 741px;">
                    <div>
                        <div class="mutiple-carousel-item" tabindex="-1" style="width: 100%; display: inline-block;"><a
                                href="//www.sasa.com.hk/page/ZAbank" class="image-banner">
                                <figure class="image-banner__frame"><img loading="lazy" class="image-banner__picture"
                                        alt="BannerD-carousel-3"
                                        src="https://cms.cdn.91app.hk/images/original/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1750309541-p7jydmkjbj_d_1280x130_1124x114_800x81_600x61_400x41.png"
                                        srcset="https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1750309541-p7jydmkjbj_d_1280x130.webp  1280w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1750309541-p7jydmkjbj_d_1124x114.webp  1124w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1750309541-p7jydmkjbj_d_800x81.webp  800w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1750309541-p7jydmkjbj_d_600x61.webp  600w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1750309541-p7jydmkjbj_d_400x41.webp  400w"
                                        style="width: 100%; display: block;"></figure>
                            </a></div>
                    </div>
                </div>
                <div data-index="2" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
                    style="width: 741px;">
                    <div>
                        <div class="mutiple-carousel-item" tabindex="-1" style="width: 100%; display: inline-block;"><a
                                href="//www.sasa.com.hk/page/PayMe" class="image-banner">
                                <figure class="image-banner__frame"><img loading="lazy" class="image-banner__picture"
                                        alt="BannerD-carousel-2"
                                        src="https://cms.cdn.91app.hk/images/original/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751273399-scv57ne95n_d_1280x130_1124x114_800x81_600x61_400x41.jpg"
                                        srcset="https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751273399-scv57ne95n_d_1280x130.webp  1280w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751273399-scv57ne95n_d_1124x114.webp  1124w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751273399-scv57ne95n_d_800x81.webp  800w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751273399-scv57ne95n_d_600x61.webp  600w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751273399-scv57ne95n_d_400x41.webp  400w"
                                        style="width: 100%; display: block;"></figure>
                            </a></div>
                    </div>
                </div>
                <div data-index="3" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
                    style="width: 741px;">
                    <div>
                        <div class="mutiple-carousel-item" tabindex="-1" style="width: 100%; display: inline-block;"><a
                                href="//www.sasa.com.hk/page/ZAbank" class="image-banner">
                                <figure class="image-banner__frame"><img loading="lazy" class="image-banner__picture"
                                        alt="BannerD-carousel-3"
                                        src="https://cms.cdn.91app.hk/images/original/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1750309541-p7jydmkjbj_d_1280x130_1124x114_800x81_600x61_400x41.png"
                                        srcset="https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1750309541-p7jydmkjbj_d_1280x130.webp  1280w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1750309541-p7jydmkjbj_d_1124x114.webp  1124w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1750309541-p7jydmkjbj_d_800x81.webp  800w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1750309541-p7jydmkjbj_d_600x61.webp  600w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1750309541-p7jydmkjbj_d_400x41.webp  400w"
                                        style="width: 100%; display: block;"></figure>
                            </a></div>
                    </div>
                </div>
            </div>
        </div><a class="sc-hilkcu jYMTSe"><i class="ico ico-chevron-right"></i></a>
        <ul class="slick-dots" style="display: block;">
            <li class=""><button>1</button></li>
            <li class="slick-active"><button>2</button></li>
        </ul>
    </div>
</div>
    `;
  }

  render() {
    return this.element;
  }
}
