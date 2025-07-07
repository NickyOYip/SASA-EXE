// Navigation Component
import { CategoryDropdownHandler } from './cat-dropdown/cat-dropdown.js';

export class Nav {
  constructor() {
    this.element = null;
    this.init();
  }

  init() {
    this.createElement();
    this.initCategoryDropdown();
  }

  createElement() {
    this.element = document.createElement('nav');
    this.element.className = 'headerA__nav-menu nav-menu';
    this.element.innerHTML = `
      <!-- Sub Menu (Top Row) -->
      <ul class="headerA__nav-menu-sub nav-menu-ul">
        
        <!-- Mobile App Download -->
        <li class="sub-nav-li">
          <a class="nav-submenu-link">
            <i class="ico ico-mobile nav-submenu-icon" style="color: rgb(68, 68, 68);"></i>
          </a>
          <div class="download-app-menu nav-download-app-menu">
            <div>
              <section>
                <div class="download-app-menu-text qr-code-text">Scan QR Code to Download</div>
                <div class="qr-code-image">
                  <canvas height="160" width="160" style="height: 128px; width: 128px;"></canvas>
                </div>
              </section>
              <div class="download-app-menu-icon">
                <a class="download-app-menu-link" 
                   href="https://play.google.com/store/apps/details?id=hk.com.nineyi.shop.s000017" 
                   target="_blank" 
                   rel="noopener noreferrer">
                  <i class="sc-TlkDZ jyXyZl"></i>
                </a>
                <a class="download-app-menu-link" 
                   href="https://itunes.apple.com/hk/app/id1551748743" 
                   target="_blank" 
                   rel="noopener noreferrer">
                  <i class="sc-TlkDZ cShwyD"></i>
                </a>
              </div>
            </div>
          </div>
        </li>

        <!-- User Account Menu -->
        <li class="sub-nav-li">
          <a class="nav-submenu-link" data-qe-id="header-member-logout-text">
            <i class="ico ico-user nav-submenu-icon" style="color: rgb(68, 68, 68);"></i>
          </a>
          <div class="nav-my-account">
            <ul class="nav-my-account-ul">
              <li class="nav-my-account-li">
                <a href="//www.sasa.com.hk/V2/TradesOrder/TradesOrderList?shopId=17" 
                   rel="nofollow" 
                   class="nav-my-account-link" 
                   data-qe-id="menu_check_order">eShop Orders</a>
              </li>
              <li class="nav-my-account-li">
                <a href="//www.sasa.com.hk/V2/VipMember/VIPMemberRelay?shopId=17" 
                   rel="nofollow" 
                   class="nav-my-account-link" 
                   data-qe-id="menu_member_center">Membership Card</a>
              </li>
              <li class="nav-my-account-li">
                <a href="//www.sasa.com.hk/TraceSalePageList/TraceSalePageList" 
                   rel="nofollow" 
                   class="nav-my-account-link" 
                   data-qe-id="menu_my_fav">My Wishlist</a>
              </li>
              <li class="nav-my-account-li">
                <a href="//www.sasa.com.hk/v2/ECoupon/MyECoupon" 
                   rel="nofollow" 
                   class="nav-my-account-link" 
                   data-qe-id="menu_my_coupon">eShop Coupons</a>
              </li>
              <li class="nav-my-account-li">
                <a class="nav-my-account-link" 
                   rel="nofollow" 
                   data-qe-id="menu_login_reg">Log In/Sign Up</a>
              </li>
            </ul>
          </div>
        </li>

        <!-- Shopping Cart -->
        <li class="sub-nav-li nav-shopping-cart">
          <a class="nav-submenu-link" 
             href="//www.sasa.com.hk/V2/ShoppingCart/Index?shopId=17" 
             data-qe-id="header-shopping-cart-icon">
            <i class="ico ico-shopping nav-submenu-icon" style="color: rgb(68, 68, 68);"></i>
            <span class="shopping-cart-badge" 
                  style="color: rgb(255, 255, 255); background-color: rgb(237, 0, 140);">0</span>
          </a>
          <div class="nav-shopping-cart-menu">
            <div class="">
              <div class="no-item-content">Your shopping cart is empty</div>
            </div>
          </div>
        </li>

        <!-- Language Selector -->
        <li class="sub-nav-li">
          <a class="nav-submenu-link flex-gap" 
             style="color: rgb(68, 68, 68); pointer-events: auto;">
            <i class="ico ico-earth nav-submenu-icon"></i>
            <div class="nav-selector-text">English (US)</div>
            <i class="ico ico-chevron-down"></i>
            <div class="nav-selector-dropdown">
              <div class="nav-selector-title">Language</div>
              <div class="nav-selector-option">
                <input type="radio" name="language" class="nav-selector-radio" value="en-US" checked="">
                <label class="nav-selector-label"></label>
                <div class="nav-selector-label-text">English (US)</div>
              </div>
              <div class="nav-selector-option">
                <input type="radio" name="language" class="nav-selector-radio" value="zh-HK">
                <label class="nav-selector-label"></label>
                <div class="nav-selector-label-text">中文 (香港)</div>
              </div>
            </div>
          </a>
        </li>

        <!-- Currency Selector -->
        <li class="sub-nav-li">
          <a class="nav-submenu-link flex-gap" style="color: rgb(68, 68, 68);">
            <i class="ico ico-exchange-dollar nav-submenu-icon"></i>
            <div class="nav-selector-text">HKD</div>
            <i class="ico ico-chevron-down"></i>
            <div class="nav-selector-dropdown">
              <div class="nav-selector-title">Currency</div>
              <div class="nav-selector-option">
                <input type="radio" name="currency" class="nav-selector-radio" value="HKD" checked="">
                <label class="nav-selector-label"></label>
                <div class="nav-selector-label-text">HKD 港幣</div>
              </div>
              <div class="nav-selector-option">
                <input type="radio" name="currency" class="nav-selector-radio" value="MOP">
                <label class="nav-selector-label"></label>
                <div class="nav-selector-label-text">MOP Pataca</div>
              </div>
            </div>
          </a>
        </li>
      </ul>

      <!-- Main Menu (Bottom Row) -->
      <div class="headerA__nav-menu-main">
        <ul class="nav-menu-ul">
          
          <!-- Category Menu -->
          <li class="nav-menu-li header-category-menu-li shop-category-multi-level-menu-li">
            <a class="nav-menu-link">
              <div class="nav-menu-title-cat" style="color: rgb(68, 68, 68);">Category</div>
              <i class="ico ico-chevron-down" id="category-dropdown-toggle" style="color: rgb(68, 68, 68);"></i>
            </a>
          </li>

          <!-- Sasa Exclusive -->
          <li class="nav-menu-li">
            <a class="nav-menu-link" 
               href="//www.sasa.com.hk/page/BrandPromotion" 
               style="color: rgb(68, 68, 68);">
              <div class="nav-menu-title">Sasa Exclusive</div>
            </a>
          </li>

          <!-- Latest Offers with Dropdown -->
          <li class="nav-menu-li nav-menu-with-dropdown">
            <a class="nav-menu-link" style="color: rgb(68, 68, 68);">
              <div class="nav-menu-title">Latest Offers</div>
              <i class="ico ico-chevron-down"></i>
            </a>
            <div class="nav-dropdown-menu">
              <div class="nav-dropdown-container">
                <div class="nav-dropdown-content">
                  <div class="nav-dropdown-section">
                    <div class="nav-dropdown-wrapper">
                      <ul class="nav-dropdown-list">
                        <li class="nav-dropdown-item">
                          <a href="https://www.sasa.com.hk/v2/Promotion/List" 
                             class="nav-dropdown-link" 
                             style="color: rgb(51, 51, 51);">
                            <div class="nav-dropdown-title">Limited-Time Promotions ⏰</div>
                          </a>
                        </li>
                        <li class="nav-dropdown-item">
                          <a href="https://www.sasa.com.hk/page/HotHeroItems" 
                             class="nav-dropdown-link" 
                             style="color: rgb(51, 51, 51);">
                            <div class="nav-dropdown-title">Top Brands Special Price🚨</div>
                          </a>
                        </li>
                        <li class="nav-dropdown-item">
                          <a href="https://www.sasa.com.hk/page/PIPFragrance" 
                             class="nav-dropdown-link" 
                             style="color: rgb(51, 51, 51);">
                            <div class="nav-dropdown-title">Fragrance Limited-Time Promotion🫧</div>
                          </a>
                        </li>
                        <li class="nav-dropdown-item">
                          <a href="https://www.sasa.com.hk/page/SuisseProgramme" 
                             class="nav-dropdown-link" 
                             style="color: rgb(51, 51, 51);">
                            <div class="nav-dropdown-title">Suisse Programme Online Exclusive Offers⚡</div>
                          </a>
                        </li>
                        <li class="nav-dropdown-item">
                          <a href="https://www.sasa.com.hk/page/LaEstephe" 
                             class="nav-dropdown-link" 
                             style="color: rgb(51, 51, 51);">
                            <div class="nav-dropdown-title">La Estephe Limted-Time Offer ✨</div>
                          </a>
                        </li>
                        <li class="nav-dropdown-item">
                          <a href="https://www.sasa.com.hk/page/Eoyunggam" 
                             class="nav-dropdown-link" 
                             style="color: rgb(51, 51, 51);">
                            <div class="nav-dropdown-title">Eoyunggam Limited-Time Offer</div>
                          </a>
                        </li>
                        <li class="nav-dropdown-item">
                          <a href="https://www.sasa.com.hk/page/DrG" 
                             class="nav-dropdown-link" 
                             style="color: rgb(51, 51, 51);">
                            <div class="nav-dropdown-title">Dr.G Limited-Time Offer</div>
                          </a>
                        </li>
                        <li class="nav-dropdown-item">
                          <a href="https://www.sasa.com.hk/page/MethodeSwiss" 
                             class="nav-dropdown-link" 
                             style="color: rgb(51, 51, 51);">
                            <div class="nav-dropdown-title">Methode Swiss Limited-Time Offer</div>
                          </a>
                        </li>
                        <li class="nav-dropdown-item">
                          <a href="https://www.sasa.com.hk/page/Rexaline" 
                             class="nav-dropdown-link" 
                             style="color: rgb(51, 51, 51);">
                            <div class="nav-dropdown-title">Rexaline Limited-Time Offer</div>
                          </a>
                        </li>
                        <li class="nav-dropdown-item">
                          <a href="https://www.sasa.com.hk/page/Eleanor" 
                             class="nav-dropdown-link" 
                             style="color: rgb(51, 51, 51);">
                            <div class="nav-dropdown-title">Eleanor Limited-Time Offer</div>
                          </a>
                        </li>
                        <li class="nav-dropdown-item">
                          <a href="https://www.sasa.com.hk/page/AHAVA" 
                             class="nav-dropdown-link" 
                             style="color: rgb(51, 51, 51);">
                            <div class="nav-dropdown-title">AHAVA Limite-Time Offer</div>
                          </a>
                        </li>
                        <li class="nav-dropdown-item">
                          <a href="https://www.sasa.com.hk/V2/Brand/yutakanaseikatsu" 
                             class="nav-dropdown-link" 
                             style="color: rgb(51, 51, 51);">
                            <div class="nav-dropdown-title">Yutakana Seikatsu Limited-Time Offer</div>
                          </a>
                        </li>
                        <li class="nav-dropdown-item">
                          <a href="https://www.sasa.com.hk/page/LorealParis" 
                             class="nav-dropdown-link" 
                             style="color: rgb(51, 51, 51);">
                            <div class="nav-dropdown-title">L'Oreal Paris Up to 32% Off</div>
                          </a>
                        </li>
                        <li class="nav-dropdown-item">
                          <a href="https://www.sasa.com.hk/page/Maybelline" 
                             class="nav-dropdown-link" 
                             style="color: rgb(51, 51, 51);">
                            <div class="nav-dropdown-title">Maybelline Up to 50% Off</div>
                          </a>
                        </li>
                        <li class="nav-dropdown-item">
                          <a href="https://www.sasa.com.hk/page/Cobolife" 
                             class="nav-dropdown-link" 
                             style="color: rgb(51, 51, 51);">
                            <div class="nav-dropdown-title">Slimming & Beauty🥗</div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <!-- Top Sellers -->
          <li class="nav-menu-li">
            <a class="nav-menu-link" 
               href="//www.sasa.com.hk/page/topsellers" 
               style="color: rgb(68, 68, 68);">
              <div class="nav-menu-title">Top Sellers</div>
            </a>
          </li>

          <!-- Brand -->
          <li class="nav-menu-li">
            <a class="nav-menu-link" 
               href="https://www.sasa.com.hk/v2/Brand" 
               style="color: rgb(68, 68, 68);">
              <div class="nav-menu-title">Brand</div>
            </a>
          </li>

          <!-- Beauty Blog -->
          <li class="nav-menu-li">
            <a class="nav-menu-link" 
               href="//www.sasa.com.hk/v2/shop/InfoModuleList#/" 
               style="color: rgb(68, 68, 68);">
              <div class="nav-menu-title">Beauty Blog</div>
            </a>
          </li>

          <!-- Payment Offers -->
          <li class="nav-menu-li">
            <a class="nav-menu-link" 
               href="//www.sasa.com.hk/page/PaymentPromotions" 
               style="color: rgb(68, 68, 68);">
              <div class="nav-menu-title">Payment Offers</div>
            </a>
          </li>
        </ul>

        <!-- Search Box -->
        <span class="sub-nav-li nav-search-box">
          <form class="ns-search-form">
            <div class="search-wrapper">
              <input class="ns-search-input" 
                     type="search" 
                     placeholder="Search" 
                     name="q" 
                     id="ns-search-input" 
                     autocomplete="off" 
                     data-qe-id="header-search-input">
              <a class="searchkeyword ns-search-btn" data-qe-id="header-search-icon">
                <i class="ico ico-search"></i>
                <span class="search-btn-text">Search</span>
              </a>
            </div>
          </form>
        </span>
      </div>
    `;

    // Initialize category dropdown functionality after DOM is created
    this.initCategoryDropdown();
  }

  initCategoryDropdown() {
    const categoryElement = this.element.querySelector('.shop-category-multi-level-menu-li');
    if (categoryElement) {
      this.categoryDropdown = new CategoryDropdownHandler(categoryElement);
    }
  }

  render() {
    return this.element;
  }
}
