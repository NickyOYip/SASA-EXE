// Slider Component
export class Slider {
  constructor() {
    this.element = null;
    this.init();
  }

  init() {
    this.createElement();
  }

  createElement() {
    this.element = document.createElement('div');
    this.element.className = 'slider';
    this.element.innerHTML = `
      <div class="carousel-container-header">
    <div class="slick-slider carousel-container-header--content slick-initialized" dir="ltr"><a
            class="sc-hilkcu sc-bQuRqn hRrlxJ eMKquP"><i class="ico ico-chevron-left"></i></a>
        <div class="slick-list">
            <div class="slick-track"
                style="width: 21760px; opacity: 1; transform: translate3d(-3840px, 0px, 0px); transition: -webkit-transform 1000ms;">
                <div data-index="-1" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
                    style="width: 1280px;">
                    <div>
                        <div class="mutiple-carousel-item" tabindex="-1" style="width: 100%; display: inline-block;"><a
                                href="//www.sasa.com.hk/page/PIPFragrance" class="image-banner">
                                <figure class="image-banner__frame"><img loading="lazy" class="image-banner__picture"
                                        alt="FragrancePIP_Promo1_EN"
                                        src="https://cms.cdn.91app.hk/images/original/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1722823531-fvnk6n29be_d_1920x640_1280x427_1124x375_800x267_600x200_400x133.jpg"
                                        srcset="https://cms.cdn.91app.hk/images/compress/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1722823531-fvnk6n29be_d_1920x640.webp  1920w,https://cms.cdn.91app.hk/images/compress/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1722823531-fvnk6n29be_d_1280x427.webp  1280w,https://cms.cdn.91app.hk/images/compress/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1722823531-fvnk6n29be_d_1124x375.webp  1124w,https://cms.cdn.91app.hk/images/compress/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1722823531-fvnk6n29be_d_800x267.webp  800w,https://cms.cdn.91app.hk/images/compress/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1722823531-fvnk6n29be_d_600x200.webp  600w,https://cms.cdn.91app.hk/images/compress/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1722823531-fvnk6n29be_d_400x133.webp  400w"
                                        style="width: 100%; display: block;"></figure>
                            </a></div>
                    </div>
                </div>
                <div data-index="0" class="slick-slide" tabindex="-1" aria-hidden="true"
                    style="outline: none; width: 1280px;">
                    <div>
                        <div class="mutiple-carousel-item" tabindex="-1" style="width: 100%; display: inline-block;"><a
                                href="//www.sasa.com.hk/page/Mask" class="image-banner">
                                <figure class="image-banner__frame"><img loading="lazy" class="image-banner__picture"
                                        alt="Mask"
                                        src="https://cms.cdn.91app.hk/images/original/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751599427-p90h7a7v4b_d_1920x640_1280x427_1124x375_800x267_600x200_400x133.jpg"
                                        srcset="https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751599427-p90h7a7v4b_d_1920x640.webp  1920w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751599427-p90h7a7v4b_d_1280x427.webp  1280w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751599427-p90h7a7v4b_d_1124x375.webp  1124w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751599427-p90h7a7v4b_d_800x267.webp  800w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751599427-p90h7a7v4b_d_600x200.webp  600w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751599427-p90h7a7v4b_d_400x133.webp  400w"
                                        style="width: 100%; display: block;"></figure>
                            </a></div>
                    </div>
                </div>
                <div data-index="1" class="slick-slide" tabindex="-1" aria-hidden="true"
                    style="outline: none; width: 1280px;">
                    <div>
                        <div class="mutiple-carousel-item" tabindex="-1" style="width: 100%; display: inline-block;"><a
                                href="//www.sasa.com.hk/page/SK20" class="image-banner">
                                <figure class="image-banner__frame"><img loading="lazy" class="image-banner__picture"
                                        alt="HeaderA-carousel-2"
                                        src="https://cms.cdn.91app.hk/images/original/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1749295828-nfssg4yysx_d_1920x640_1280x427_1124x375_800x267_600x200_400x133.jpg"
                                        srcset="https://cms.cdn.91app.hk/images/compress/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1749295828-nfssg4yysx_d_1920x640.webp  1920w,https://cms.cdn.91app.hk/images/compress/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1749295828-nfssg4yysx_d_1280x427.webp  1280w,https://cms.cdn.91app.hk/images/compress/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1749295828-nfssg4yysx_d_1124x375.webp  1124w,https://cms.cdn.91app.hk/images/compress/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1749295828-nfssg4yysx_d_800x267.webp  800w,https://cms.cdn.91app.hk/images/compress/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1749295828-nfssg4yysx_d_600x200.webp  600w,https://cms.cdn.91app.hk/images/compress/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1749295828-nfssg4yysx_d_400x133.webp  400w"
                                        style="width: 100%; display: block;"></figure>
                            </a></div>
                    </div>
                </div>
                <div data-index="2" class="slick-slide slick-active slick-current" tabindex="-1" aria-hidden="false"
                    style="outline: none; width: 1280px;">
                    <div>
                        <div class="mutiple-carousel-item" tabindex="-1" style="width: 100%; display: inline-block;"><a
                                href="//www.sasa.com.hk/V2/Brand/yutakanaseikatsu" class="image-banner">
                                <figure class="image-banner__frame"><img loading="lazy" class="image-banner__picture"
                                        alt="HeaderA-carousel-3"
                                        src="https://cms.cdn.91app.hk/images/original/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751598740-cbfx07l7z4_d_1920x640_1280x427_1124x375_800x267_600x200_400x133.jpg"
                                        srcset="https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751598740-cbfx07l7z4_d_1920x640.webp  1920w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751598740-cbfx07l7z4_d_1280x427.webp  1280w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751598740-cbfx07l7z4_d_1124x375.webp  1124w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751598740-cbfx07l7z4_d_800x267.webp  800w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751598740-cbfx07l7z4_d_600x200.webp  600w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751598740-cbfx07l7z4_d_400x133.webp  400w"
                                        style="width: 100%; display: block;"></figure>
                            </a></div>
                    </div>
                </div>
                <div data-index="3" class="slick-slide" tabindex="-1" aria-hidden="true"
                    style="outline: none; width: 1280px;">
                    <div>
                        <div class="mutiple-carousel-item" tabindex="-1" style="width: 100%; display: inline-block;"><a
                                href="//www.sasa.com.hk/page/VT" class="image-banner">
                                <figure class="image-banner__frame"><img loading="lazy" class="image-banner__picture"
                                        alt="HeaderA-carousel-4"
                                        src="https://cms.cdn.91app.hk/images/original/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751274660-teehyfbzli_d_1920x640_1280x427_1124x375_800x267_600x200_400x133.jpg"
                                        srcset="https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751274660-teehyfbzli_d_1920x640.webp  1920w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751274660-teehyfbzli_d_1280x427.webp  1280w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751274660-teehyfbzli_d_1124x375.webp  1124w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751274660-teehyfbzli_d_800x267.webp  800w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751274660-teehyfbzli_d_600x200.webp  600w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751274660-teehyfbzli_d_400x133.webp  400w"
                                        style="width: 100%; display: block;"></figure>
                            </a></div>
                    </div>
                </div>
                <div data-index="4" class="slick-slide" tabindex="-1" aria-hidden="true"
                    style="outline: none; width: 1280px;">
                    <div>
                        <div class="mutiple-carousel-item" tabindex="-1" style="width: 100%; display: inline-block;"><a
                                href="//www.sasa.com.hk/page/Eoyunggam" class="image-banner">
                                <figure class="image-banner__frame"><img loading="lazy" class="image-banner__picture"
                                        alt="HeaderA-carousel-5"
                                        src="https://cms.cdn.91app.hk/images/original/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751529104-qq0uh6s3a3_d_1920x640_1280x427_1124x375_800x267_600x200_400x133.jpg"
                                        srcset="https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751529104-qq0uh6s3a3_d_1920x640.webp  1920w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751529104-qq0uh6s3a3_d_1280x427.webp  1280w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751529104-qq0uh6s3a3_d_1124x375.webp  1124w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751529104-qq0uh6s3a3_d_800x267.webp  800w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751529104-qq0uh6s3a3_d_600x200.webp  600w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751529104-qq0uh6s3a3_d_400x133.webp  400w"
                                        style="width: 100%; display: block;"></figure>
                            </a></div>
                    </div>
                </div>
                <div data-index="5" class="slick-slide" tabindex="-1" aria-hidden="true"
                    style="outline: none; width: 1280px;">
                    <div>
                        <div class="mutiple-carousel-item" tabindex="-1" style="width: 100%; display: inline-block;"><a
                                href="//www.sasa.com.hk/page/Maybelline" class="image-banner">
                                <figure class="image-banner__frame"><img loading="lazy" class="image-banner__picture"
                                        alt="HeaderA-carousel-6"
                                        src="https://cms.cdn.91app.hk/images/original/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1746176356-062zfncvus_d_1920x640_1280x427_1124x375_800x267_600x200_400x133.jpg"
                                        srcset="https://cms.cdn.91app.hk/images/compress/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1746176356-062zfncvus_d_1920x640.webp  1920w,https://cms.cdn.91app.hk/images/compress/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1746176356-062zfncvus_d_1280x427.webp  1280w,https://cms.cdn.91app.hk/images/compress/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1746176356-062zfncvus_d_1124x375.webp  1124w,https://cms.cdn.91app.hk/images/compress/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1746176356-062zfncvus_d_800x267.webp  800w,https://cms.cdn.91app.hk/images/compress/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1746176356-062zfncvus_d_600x200.webp  600w,https://cms.cdn.91app.hk/images/compress/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1746176356-062zfncvus_d_400x133.webp  400w"
                                        style="width: 100%; display: block;"></figure>
                            </a></div>
                    </div>
                </div>
                <div data-index="6" class="slick-slide" tabindex="-1" aria-hidden="true"
                    style="outline: none; width: 1280px;">
                    <div>
                        <div class="mutiple-carousel-item" tabindex="-1" style="width: 100%; display: inline-block;"><a
                                href="//www.sasa.com.hk/page/Cobolife" class="image-banner">
                                <figure class="image-banner__frame"><img loading="lazy" class="image-banner__picture"
                                        alt="HeaderA-carousel-7"
                                        src="https://cms.cdn.91app.hk/images/original/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751281390-iv6w26co61_d_1920x640_1280x427_1124x375_800x267_600x200_400x133.jpg"
                                        srcset="https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751281390-iv6w26co61_d_1920x640.webp  1920w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751281390-iv6w26co61_d_1280x427.webp  1280w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751281390-iv6w26co61_d_1124x375.webp  1124w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751281390-iv6w26co61_d_800x267.webp  800w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751281390-iv6w26co61_d_600x200.webp  600w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751281390-iv6w26co61_d_400x133.webp  400w"
                                        style="width: 100%; display: block;"></figure>
                            </a></div>
                    </div>
                </div>
                <div data-index="7" class="slick-slide" tabindex="-1" aria-hidden="true"
                    style="outline: none; width: 1280px;">
                    <div>
                        <div class="mutiple-carousel-item" tabindex="-1" style="width: 100%; display: inline-block;"><a
                                href="//www.sasa.com.hk/page/PIPFragrance" class="image-banner">
                                <figure class="image-banner__frame"><img loading="lazy" class="image-banner__picture"
                                        alt="FragrancePIP_Promo1_EN"
                                        src="https://cms.cdn.91app.hk/images/original/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1722823531-fvnk6n29be_d_1920x640_1280x427_1124x375_800x267_600x200_400x133.jpg"
                                        srcset="https://cms.cdn.91app.hk/images/compress/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1722823531-fvnk6n29be_d_1920x640.webp  1920w,https://cms.cdn.91app.hk/images/compress/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1722823531-fvnk6n29be_d_1280x427.webp  1280w,https://cms.cdn.91app.hk/images/compress/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1722823531-fvnk6n29be_d_1124x375.webp  1124w,https://cms.cdn.91app.hk/images/compress/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1722823531-fvnk6n29be_d_800x267.webp  800w,https://cms.cdn.91app.hk/images/compress/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1722823531-fvnk6n29be_d_600x200.webp  600w,https://cms.cdn.91app.hk/images/compress/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1722823531-fvnk6n29be_d_400x133.webp  400w"
                                        style="width: 100%; display: block;"></figure>
                            </a></div>
                    </div>
                </div>
                <div data-index="8" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
                    style="width: 1280px;">
                    <div>
                        <div class="mutiple-carousel-item" tabindex="-1" style="width: 100%; display: inline-block;"><a
                                href="//www.sasa.com.hk/page/Mask" class="image-banner">
                                <figure class="image-banner__frame"><img loading="lazy" class="image-banner__picture"
                                        alt="Mask"
                                        src="https://cms.cdn.91app.hk/images/original/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751599427-p90h7a7v4b_d_1920x640_1280x427_1124x375_800x267_600x200_400x133.jpg"
                                        srcset="https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751599427-p90h7a7v4b_d_1920x640.webp  1920w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751599427-p90h7a7v4b_d_1280x427.webp  1280w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751599427-p90h7a7v4b_d_1124x375.webp  1124w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751599427-p90h7a7v4b_d_800x267.webp  800w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751599427-p90h7a7v4b_d_600x200.webp  600w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751599427-p90h7a7v4b_d_400x133.webp  400w"
                                        style="width: 100%; display: block;"></figure>
                            </a></div>
                    </div>
                </div>
                <div data-index="9" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
                    style="width: 1280px;">
                    <div>
                        <div class="mutiple-carousel-item" tabindex="-1" style="width: 100%; display: inline-block;"><a
                                href="//www.sasa.com.hk/page/SK20" class="image-banner">
                                <figure class="image-banner__frame"><img loading="lazy" class="image-banner__picture"
                                        alt="HeaderA-carousel-2"
                                        src="https://cms.cdn.91app.hk/images/original/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1749295828-nfssg4yysx_d_1920x640_1280x427_1124x375_800x267_600x200_400x133.jpg"
                                        srcset="https://cms.cdn.91app.hk/images/compress/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1749295828-nfssg4yysx_d_1920x640.webp  1920w,https://cms.cdn.91app.hk/images/compress/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1749295828-nfssg4yysx_d_1280x427.webp  1280w,https://cms.cdn.91app.hk/images/compress/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1749295828-nfssg4yysx_d_1124x375.webp  1124w,https://cms.cdn.91app.hk/images/compress/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1749295828-nfssg4yysx_d_800x267.webp  800w,https://cms.cdn.91app.hk/images/compress/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1749295828-nfssg4yysx_d_600x200.webp  600w,https://cms.cdn.91app.hk/images/compress/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1749295828-nfssg4yysx_d_400x133.webp  400w"
                                        style="width: 100%; display: block;"></figure>
                            </a></div>
                    </div>
                </div>
                <div data-index="10" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
                    style="width: 1280px;">
                    <div>
                        <div class="mutiple-carousel-item" tabindex="-1" style="width: 100%; display: inline-block;"><a
                                href="//www.sasa.com.hk/V2/Brand/yutakanaseikatsu" class="image-banner">
                                <figure class="image-banner__frame"><img loading="lazy" class="image-banner__picture"
                                        alt="HeaderA-carousel-3"
                                        src="https://cms.cdn.91app.hk/images/original/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751598740-cbfx07l7z4_d_1920x640_1280x427_1124x375_800x267_600x200_400x133.jpg"
                                        srcset="https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751598740-cbfx07l7z4_d_1920x640.webp  1920w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751598740-cbfx07l7z4_d_1280x427.webp  1280w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751598740-cbfx07l7z4_d_1124x375.webp  1124w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751598740-cbfx07l7z4_d_800x267.webp  800w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751598740-cbfx07l7z4_d_600x200.webp  600w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751598740-cbfx07l7z4_d_400x133.webp  400w"
                                        style="width: 100%; display: block;"></figure>
                            </a></div>
                    </div>
                </div>
                <div data-index="11" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
                    style="width: 1280px;">
                    <div>
                        <div class="mutiple-carousel-item" tabindex="-1" style="width: 100%; display: inline-block;"><a
                                href="//www.sasa.com.hk/page/VT" class="image-banner">
                                <figure class="image-banner__frame"><img loading="lazy" class="image-banner__picture"
                                        alt="HeaderA-carousel-4"
                                        src="https://cms.cdn.91app.hk/images/original/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751274660-teehyfbzli_d_1920x640_1280x427_1124x375_800x267_600x200_400x133.jpg"
                                        srcset="https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751274660-teehyfbzli_d_1920x640.webp  1920w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751274660-teehyfbzli_d_1280x427.webp  1280w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751274660-teehyfbzli_d_1124x375.webp  1124w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751274660-teehyfbzli_d_800x267.webp  800w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751274660-teehyfbzli_d_600x200.webp  600w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751274660-teehyfbzli_d_400x133.webp  400w"
                                        style="width: 100%; display: block;"></figure>
                            </a></div>
                    </div>
                </div>
                <div data-index="12" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
                    style="width: 1280px;">
                    <div>
                        <div class="mutiple-carousel-item" tabindex="-1" style="width: 100%; display: inline-block;"><a
                                href="//www.sasa.com.hk/page/Eoyunggam" class="image-banner">
                                <figure class="image-banner__frame"><img loading="lazy" class="image-banner__picture"
                                        alt="HeaderA-carousel-5"
                                        src="https://cms.cdn.91app.hk/images/original/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751529104-qq0uh6s3a3_d_1920x640_1280x427_1124x375_800x267_600x200_400x133.jpg"
                                        srcset="https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751529104-qq0uh6s3a3_d_1920x640.webp  1920w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751529104-qq0uh6s3a3_d_1280x427.webp  1280w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751529104-qq0uh6s3a3_d_1124x375.webp  1124w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751529104-qq0uh6s3a3_d_800x267.webp  800w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751529104-qq0uh6s3a3_d_600x200.webp  600w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751529104-qq0uh6s3a3_d_400x133.webp  400w"
                                        style="width: 100%; display: block;"></figure>
                            </a></div>
                    </div>
                </div>
                <div data-index="13" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
                    style="width: 1280px;">
                    <div>
                        <div class="mutiple-carousel-item" tabindex="-1" style="width: 100%; display: inline-block;"><a
                                href="//www.sasa.com.hk/page/Maybelline" class="image-banner">
                                <figure class="image-banner__frame"><img loading="lazy" class="image-banner__picture"
                                        alt="HeaderA-carousel-6"
                                        src="https://cms.cdn.91app.hk/images/original/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1746176356-062zfncvus_d_1920x640_1280x427_1124x375_800x267_600x200_400x133.jpg"
                                        srcset="https://cms.cdn.91app.hk/images/compress/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1746176356-062zfncvus_d_1920x640.webp  1920w,https://cms.cdn.91app.hk/images/compress/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1746176356-062zfncvus_d_1280x427.webp  1280w,https://cms.cdn.91app.hk/images/compress/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1746176356-062zfncvus_d_1124x375.webp  1124w,https://cms.cdn.91app.hk/images/compress/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1746176356-062zfncvus_d_800x267.webp  800w,https://cms.cdn.91app.hk/images/compress/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1746176356-062zfncvus_d_600x200.webp  600w,https://cms.cdn.91app.hk/images/compress/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1746176356-062zfncvus_d_400x133.webp  400w"
                                        style="width: 100%; display: block;"></figure>
                            </a></div>
                    </div>
                </div>
                <div data-index="14" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
                    style="width: 1280px;">
                    <div>
                        <div class="mutiple-carousel-item" tabindex="-1" style="width: 100%; display: inline-block;"><a
                                href="//www.sasa.com.hk/page/Cobolife" class="image-banner">
                                <figure class="image-banner__frame"><img loading="lazy" class="image-banner__picture"
                                        alt="HeaderA-carousel-7"
                                        src="https://cms.cdn.91app.hk/images/original/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751281390-iv6w26co61_d_1920x640_1280x427_1124x375_800x267_600x200_400x133.jpg"
                                        srcset="https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751281390-iv6w26co61_d_1920x640.webp  1920w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751281390-iv6w26co61_d_1280x427.webp  1280w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751281390-iv6w26co61_d_1124x375.webp  1124w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751281390-iv6w26co61_d_800x267.webp  800w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751281390-iv6w26co61_d_600x200.webp  600w,https://cms.cdn.91app.hk/images/compress/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751281390-iv6w26co61_d_400x133.webp  400w"
                                        style="width: 100%; display: block;"></figure>
                            </a></div>
                    </div>
                </div>
                <div data-index="15" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
                    style="width: 1280px;">
                    <div>
                        <div class="mutiple-carousel-item" tabindex="-1" style="width: 100%; display: inline-block;"><a
                                href="//www.sasa.com.hk/page/PIPFragrance" class="image-banner">
                                <figure class="image-banner__frame"><img loading="lazy" class="image-banner__picture"
                                        alt="FragrancePIP_Promo1_EN"
                                        src="https://cms.cdn.91app.hk/images/original/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1722823531-fvnk6n29be_d_1920x640_1280x427_1124x375_800x267_600x200_400x133.jpg"
                                        srcset="https://cms.cdn.91app.hk/images/compress/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1722823531-fvnk6n29be_d_1920x640.webp  1920w,https://cms.cdn.91app.hk/images/compress/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1722823531-fvnk6n29be_d_1280x427.webp  1280w,https://cms.cdn.91app.hk/images/compress/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1722823531-fvnk6n29be_d_1124x375.webp  1124w,https://cms.cdn.91app.hk/images/compress/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1722823531-fvnk6n29be_d_800x267.webp  800w,https://cms.cdn.91app.hk/images/compress/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1722823531-fvnk6n29be_d_600x200.webp  600w,https://cms.cdn.91app.hk/images/compress/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1722823531-fvnk6n29be_d_400x133.webp  400w"
                                        style="width: 100%; display: block;"></figure>
                            </a></div>
                    </div>
                </div>
            </div>
        </div><a class="sc-hilkcu sc-bQuRqn jYMTSe eMKquP"><i class="ico ico-chevron-right"></i></a>
        <ul class="slick-dots" style="display: block;">
            <li class=""><button>1</button></li>
            <li class=""><button>2</button></li>
            <li class="slick-active"><button>3</button></li>
            <li class=""><button>4</button></li>
            <li class=""><button>5</button></li>
            <li class=""><button>6</button></li>
            <li class=""><button>7</button></li>
            <li class=""><button>8</button></li>
        </ul>
    </div>
</div>
    `;
  }

  render() {
    return this.element;
  }
}
