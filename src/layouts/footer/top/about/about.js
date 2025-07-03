// About Footer Component
export class About {
  constructor() {
    this.element = null;
    this.init();
  }

  init() {
    this.createElement();
  }

  createElement() {
    this.element = document.createElement('div');
    this.element.className = 'footer-column footer-column--1';
    this.element.innerHTML = `
      <div class="sc-dcrKPa dqarFG">
        <div class="sc-dmLtQE fnpSre">
          About Us
        </div>
      <div class="footer-menu-content">
        <ul class="footer-menu-content-ul">
          <li class="footer-menu-content-li">
            <a href="/v2/Official/BrandStory" class="sc-jkqKDt hIWgEu">
              Our Story
            </a>
          </li>
          <li class="footer-menu-content-li">
            <a href="/shop/introduce/17?t=1" class="sc-jkqKDt hIWgEu">
              Store Introduction
            </a>
          </li>
          <li class="footer-menu-content-li">
            <a href="/v2/Shop/StoreList/17" class="sc-jkqKDt hIWgEu">
              Store Locator
            </a>
          </li>
          <li class="footer-menu-content-li">
            <a href="/MyAccount/Privacy/17" class="sc-jkqKDt hIWgEu">
              Privacy Policy &amp; Terms of Use
            </a>
          </li>
        </ul>
      </div>
      </div>
      <div class="sc-dcrKPa dqarFG">
      <div class="sc-dmLtQE fnpSre">Customer Service</div>
      <div class="footer-menu-content">
      <ul class="footer-menu-content-ul">
      <li class="footer-menu-content-li">
      <a href="/Shop/Introduce/17?t=2" class="sc-jkqKDt hIWgEu">
      Shopping Guide
      </a>
      </li>
      <li class="footer-menu-content-li">
      <a href="/Question/QuestionInsert/0?sId=17" class="sc-jkqKDt hIWgEu">
      Send Messages
      </a>
      </li>
      <li class="footer-menu-content-li">
      <a href="/V2/MyAccount/VipMemberBenefits" class="sc-jkqKDt hIWgEu">
      Terms and Conditions
      </a>
      </li>
      <li class="footer-menu-content-li">
      <a href="/Shop/Introduce/17?t=3" class="sc-jkqKDt hIWgEu">
      Contact Us
      </a>
      </li>
      </ul>
      </div>
      
    `;
  }

  render() {
    return this.element;
  }
}
