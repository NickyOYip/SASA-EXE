// Brand Wrapper Component
export class Banner {
  constructor() {
    this.element = null;
    this.init();
  }

  init() {
    this.createElement();
  }

  createElement() {
    this.element = document.createElement('div');
    this.element.className = 'banner';
    this.element.innerHTML = `
      <div class="sc-hIVHpd hrRWgs">
    <div class="column-grid-container">
        <div class="column-grid-container__wrapper">
            <ul class="column-grid-container__content">
                <li class="column-grid-container__column"
                    style="width: calc(25% - 3.75px); position: relative; display: flex; margin-right: 5px; margin-bottom: 0px;">
                    <a href="//www.sasa.com.hk/SalePage/Index/402042" class="image-banner image-full-width">
                        <figure class="image-banner__frame"><img loading="lazy" class="image-banner__picture"
                                alt="BannerC-1"
                                src="https://cms.cdn.91app.hk/images/original/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751858987-s67yjwrl2c_m.jpg"
                                style="width: 100%; display: block;"></figure>
                    </a></li>
                <li class="column-grid-container__column"
                    style="width: calc(25% - 3.75px); position: relative; display: flex; margin-right: 5px; margin-bottom: 0px;">
                    <a href="//www.sasa.com.hk/SalePage/Index/412117" class="image-banner image-full-width">
                        <figure class="image-banner__frame"><img loading="lazy" class="image-banner__picture"
                                alt="BannerC-2"
                                src="https://cms.cdn.91app.hk/images/original/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751859006-jx0xodgmq0_m.jpg"
                                style="width: 100%; display: block;"></figure>
                    </a></li>
                <li class="column-grid-container__column"
                    style="width: calc(25% - 3.75px); position: relative; display: flex; margin-right: 5px; margin-bottom: 0px;">
                    <a href="//www.sasa.com.hk/SalePage/Index/405192" class="image-banner image-full-width">
                        <figure class="image-banner__frame"><img loading="lazy" class="image-banner__picture"
                                alt="BannerC-3"
                                src="https://cms.cdn.91app.hk/images/original/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751859023-zbw9i3yat1_m.jpg"
                                style="width: 100%; display: block;"></figure>
                    </a></li>
                <li class="column-grid-container__column"
                    style="width: calc(25% - 3.75px); position: relative; display: flex; margin-right: 0px; margin-bottom: 0px;">
                    <a href="//www.sasa.com.hk/SalePage/Index/333802" class="image-banner image-full-width">
                        <figure class="image-banner__frame"><img loading="lazy" class="image-banner__picture"
                                alt="BannerC-4"
                                src="https://cms.cdn.91app.hk/images/original/17/d2a6aaf2-0ff8-47be-9849-aeb8eb4b2f03-1751859040-x4nrjeobvl_m.jpg"
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
