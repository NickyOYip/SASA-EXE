// Logo Component
export class Logo {
  constructor() {
    this.element = null;
    this.init();
  }

  init() {
    this.createElement();
  }

  createElement() {
    this.element = document.createElement('div');
    this.element.className = 'headerA__logo logo-container';
    this.element.innerHTML = `
      <a class="logo-link" href="//www.sasa.com.hk/" title="香港莎莎網店">
        <img loading="lazy" 
             src="https://cms.cdn.91app.hk/images/original/17/77cbf5b3-54bb-4710-a383-4e4f36302618-1722478890-onegavfuz3_d.png" 
             alt="香港莎莎網店" 
             class="logo-img" 
             data-qe-id="header-logo-img">
      </a>
    `;
  }

  render() {
    return this.element;
  }
}
