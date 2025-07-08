// Slick Slider Component
export class SlickSlider {
  constructor() {
    this.element = null;
    this.init();
  }

  init() {
    this.createElement();
  }

  createElement() {
    this.element = document.createElement('div');
    this.element.className = 'slick-slider';
    this.element.innerHTML = `
      <div class="sc-hIVHpd hrRWgs">
    <div class="sc-hIQuri cRqNpp">
        <div class="slick-slider slick-initialized">
            <div class="slick-list">
                <div class="slick-track" style="max-width: 1280px; opacity: 1; transform: translate3d(0px, 0px, 0px);">
                    <div data-index="0" class="slick-slide slick-active slick-current" tabindex="-1" aria-hidden="false"
                        style="outline: none; max-width: 1280px;width: 100%;">
                        <div>
                            <div tabindex="-1" style="width: 100%; display: inline-block;">
                                <div class="sc-dAfKBC bQmEoD">
                                    <div class="sc-gvIEuo eXtGzk"><a href="//www.sasa.com.hk/page/HotHeroItems"
                                            class="image-banner"><img loading="lazy" class="image-banner__picture"
                                                src="https://cms.cdn.91app.hk/images/original/17/086148bb-2429-4ffd-bbec-6f73bfd281d8-1695697583-mqm3jnoubx_m.jpg"
                                                alt="Hero Brands"></a></div>
                                    <div class="sc-gvIEuo eXtGzk"><a href="//www.sasa.com.hk/page/WeeklyBestPrice"
                                            class="image-banner"><img loading="lazy" class="image-banner__picture"
                                                src="https://cms.cdn.91app.hk/images/original/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1711419106-bxh8b4ecm1_m.jpg"
                                                alt="Weekly Best Price"></a></div>
                                    <div class="sc-gvIEuo eXtGzk"><a href="//www.sasa.com.hk/page/BrandPromotion"
                                            class="image-banner"><img loading="lazy" class="image-banner__picture"
                                                src="https://cms.cdn.91app.hk/images/original/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1701073967-rpt8l4wyn9_m.jpg"
                                                alt="Only At Sasa"></a></div>
                                    <div class="sc-gvIEuo eXtGzk"><a href="//www.sasa.com.hk/page/HealthandBeauty"
                                            class="image-banner"><img loading="lazy" class="image-banner__picture"
                                                src="https://cms.cdn.91app.hk/images/original/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1704336105-a7t4zdiz9j_m.jpg"
                                                alt="Health House"></a></div>
                                    <div class="sc-gvIEuo eXtGzk"><a href="//www.sasa.com.hk/v2/Promotion/List"
                                            class="image-banner"><img loading="lazy" class="image-banner__picture"
                                                src="https://cms.cdn.91app.hk/images/original/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1724381243-mzgghy8u25_m.png"
                                                alt="Buy More Save More"></a></div>
                                    <div class="sc-gvIEuo eXtGzk"><a
                                            href="//www.sasa.com.hk/v2/official/SalePageCategory/1477"
                                            class="image-banner"><img loading="lazy" class="image-banner__picture"
                                                src="https://cms.cdn.91app.hk/images/original/17/086148bb-2429-4ffd-bbec-6f73bfd281d8-1695697635-z6aee20eok_m.jpg"
                                                alt="New Arrivals"></a></div>
                                    <div class="sc-gvIEuo eXtGzk"><a href="//www.sasa.com.hk/page/PointsRedemption"
                                            class="image-banner"><img loading="lazy" class="image-banner__picture"
                                                src="https://cms.cdn.91app.hk/images/original/17/086148bb-2429-4ffd-bbec-6f73bfd281d8-1695697780-jq16jstfxu_m.jpg"
                                                alt="Redeem Rewards"></a></div>
                                    <div class="sc-gvIEuo eXtGzk"><a href="//www.sasa.com.hk/page/SasaOutlet"
                                            class="image-banner"><img loading="lazy" class="image-banner__picture"
                                                src="https://cms.cdn.91app.hk/images/original/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1705482309-xony3atmyc_m.jpg"
                                                alt="Sasa Outlet"></a></div>
                                    <div class="sc-gvIEuo eXtGzk"><a href="https://sasa.haircosys.ai"
                                            class="image-banner"><img loading="lazy" class="image-banner__picture"
                                                src="https://cms.cdn.91app.hk/images/original/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1749197837-lvgg9xreoi_m.png"
                                                alt="AI Beauty"></a></div>
                                    <div class="sc-gvIEuo eXtGzk"><a
                                            href="https://www.sasa.com.hk/Shop/Introduce/17?t=2"
                                            class="image-banner"><img loading="lazy" class="image-banner__picture"
                                                src="https://cms.cdn.91app.hk/images/original/17/133e7f2c-0ea9-4590-ad9f-3b52528aa4ff-1715674835-vr9ci9lapy_m.jpg"
                                                alt="Shopping Guide"></a></div>
                                </div>
                                <div class="sc-dAfKBC bQmEoD">
                                    <div color="#333333" class="sc-hhpBdf goKblT">Hero Brands</div>
                                    <div color="#333333" class="sc-hhpBdf goKblT">Weekly Best Price</div>
                                    <div color="#333333" class="sc-hhpBdf goKblT">Only At Sasa</div>
                                    <div color="#333333" class="sc-hhpBdf goKblT">Health House</div>
                                    <div color="#333333" class="sc-hhpBdf goKblT">Buy More Save More</div>
                                    <div color="#333333" class="sc-hhpBdf goKblT">New Arrivals</div>
                                    <div color="#333333" class="sc-hhpBdf goKblT">Redeem Rewards</div>
                                    <div color="#333333" class="sc-hhpBdf goKblT">Sasa Outlet</div>
                                    <div color="#333333" class="sc-hhpBdf goKblT">AI Beauty</div>
                                    <div color="#333333" class="sc-hhpBdf goKblT">Shopping Guide</div>
                                </div>
                            </div>
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
