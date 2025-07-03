// Navigation Component
export class Nav {
  constructor() {
    this.element = null;
    this.init();
  }

  init() {
    this.createElement();
  }

  createElement() {
    this.element = document.createElement('nav');
    this.element.className = 'nav';
    this.element.innerHTML = `
      <div class="nav-container">
        <div class="nav-section nav-section--primary">
          <ul class="nav-list nav-list--primary">
            <li class="nav-item">
              <a class="nav-submenu-link"><i class="ico ico-mobile nav-submenu-icon" style="color: rgb(68, 68, 68);"></i></a>
              <div class="download-app-menu nav-download-app-menu"><div><section><div class="download-app-menu-text qr-code-text">Scan QR Code to Download</div><div class="qr-code-image"><canvas height="160" width="160" style="height: 128px; width: 128px;"></canvas></div></section><div class="download-app-menu-icon"><a class="download-app-menu-link" href="https://play.google.com/store/apps/details?id=hk.com.nineyi.shop.s000017" target="_blank" rel="noopener noreferrer"><i class="sc-TlkDZ jyXyZl"></i></a><a class="download-app-menu-link" href="https://itunes.apple.com/hk/app/id1551748743" target="_blank" rel="noopener noreferrer"><i class="sc-TlkDZ cShwyD"></i></a></div></div></div>
            </li>
            <li class="nav-item">
              <a class="nav-submenu-link" data-qe-id="header-member-logout-text"><i class="ico ico-user nav-submenu-icon" style="color: rgb(68, 68, 68);"></i></a>
              <div class="nav-my-account"><ul class="nav-my-account-ul"><li class="nav-my-account-li"><a href="//www.sasa.com.hk/V2/TradesOrder/TradesOrderList?shopId=17" rel="nofollow" class="nav-my-account-link" data-qe-id="menu_check_order">eShop Orders</a></li><li class="nav-my-account-li"><a href="//www.sasa.com.hk/V2/VipMember/VIPMemberRelay?shopId=17" rel="nofollow" class="nav-my-account-link" data-qe-id="menu_member_center">Membership Card</a></li><li class="nav-my-account-li"><a href="//www.sasa.com.hk/TraceSalePageList/TraceSalePageList" rel="nofollow" class="nav-my-account-link" data-qe-id="menu_my_fav">My Wishlist</a></li><li class="nav-my-account-li"><a href="//www.sasa.com.hk/v2/ECoupon/MyECoupon" rel="nofollow" class="nav-my-account-link" data-qe-id="menu_my_coupon">eShop Coupons</a></li><li class="nav-my-account-li"><a class="nav-my-account-link" rel="nofollow" data-qe-id="menu_login_reg">Log In/Sign Up</a></li></ul></div>
            </li>
            <li class="nav-item-cart">
              <a class="nav-submenu-link" href="//www.sasa.com.hk/V2/ShoppingCart/Index?shopId=17" data-qe-id="header-shopping-cart-icon"><i class="ico ico-shopping nav-submenu-icon" style="color: rgb(68, 68, 68);"></i><span class="shopping-cart-badge" style="color: rgb(255, 255, 255); background-color: rgb(237, 0, 140);">2</span></a>
              <div class="nav-shopping-cart-menu"><div class=""><div class="has-shopping-cart-item"><div class="has-item-text">Recently Added</div><ul class="nav-shopping-cart-ul"><li><div class="nav-shopping-cart-li false"><a class="nav-shopping-cart-link" href="/SalePage/Index/229480"><figure class="image-frame nav-shopping-cart-image"><img loading="lazy" class="image-body" src="//img.cdn.91app.hk/webapi/imagesV3/Cropped/SalePage/229480/0/638868772892570000?v=1" alt="【Online Exclusive】L'Occitane Shea Butter Ultra Rich Lip Balm 4.5g"></figure><div class="nav-shopping-cart-detail"><div class="nav-shopping-cart-title">【Online Exclusive】L'Occitane Shea Butter Ultra Rich Lip Balm 4.5g</div><span class="sc-gWAFUw bSgbKj">HK$52.00</span></div></a><a class="remove-product-link" data-sale-page-id="229480" data-sale-page-seq="0" data-sale-page-name="【Online Exclusive】L'Occitane Shea Butter Ultra Rich Lip Balm 4.5g" data-sale-page-price="52" data-sku-id="2727624" data-shopping-cart-id="24406561" data-cart-extend-info-item-group="0" data-point-pay-id="0"><i class="ico ico-delete"></i></a></div><ul class="sc-NrEwa hkoKCm extra-purchase-item-block"></ul></li><li><div class="nav-shopping-cart-li false"><a class="nav-shopping-cart-link" href="/SalePage/Index/314155"><figure class="image-frame nav-shopping-cart-image"><img loading="lazy" class="image-body" src="//img.cdn.91app.hk/webapi/imagesV3/Cropped/SalePageSKU/3143696/0/638868772703270000?v=1" alt="Innisfree Green Tea Hydrating Amino Acid Cleansing Foam 150g"></figure><div class="nav-shopping-cart-detail"><div class="nav-shopping-cart-title">Innisfree Green Tea Hydrating Amino Acid Cleansing Foam 150g</div><span class="sc-gWAFUw bSgbKj">HK$42.00</span></div></a><a class="remove-product-link" data-sale-page-id="314155" data-sale-page-seq="0" data-sale-page-name="Innisfree Green Tea Hydrating Amino Acid Cleansing Foam 150g" data-sale-page-price="42" data-sku-id="3143696" data-shopping-cart-id="24406558" data-cart-extend-info-item-group="0" data-point-pay-id="0"><i class="ico ico-delete"></i></a></div><ul class="sc-NrEwa hkoKCm extra-purchase-item-block"></ul></li></ul><div class="nav-shopping-cart-summary"><button data-qe-id="header-shopping-cart-checkout-btn" class="sc-iQeKKP sc-kCtSUc cIeURA idnCPQ">Checkout</button></div></div></div></div>
            </li>
            <li class="nav-item">
              <a class="sc-zRDVy bBVaPb nav-submenu-link flex-gap" style="color: rgb(68, 68, 68); pointer-events: auto;"><i class="ico ico-earth nav-submenu-icon"></i><div class="sc-iwUaVq czpKYI">English (US)</div><i class="ico ico-chevron-down"></i><div class="sc-OIhXX ekDbZl"><div class="sc-dfdIjj hFKvP">Language</div><div class="sc-gCftrV jEiWpm"><input type="radio" class="sc-jtdBMk bEYPCz" value="en-US" checked=""><label class="sc-gEXpur iZwpjC"></label><div class="sc-iKSKfW drtjkh">English (US)</div></div><div class="sc-gCftrV jEiWpm"><input type="radio" class="sc-jtdBMk bEYPCz" value="zh-HK"><label class="sc-gEXpur iZwpjC"></label><div class="sc-iKSKfW drtjkh">中文 (香港)</div></div></div></a>
            </li>
            <li class="nav-item">
              <a class="sc-zRDVy bBVaPb nav-submenu-link flex-gap" style="color: rgb(68, 68, 68);"><i class="ico ico-exchange-dollar nav-submenu-icon"></i><div class="sc-iwUaVq czpKYI">HKD</div><i class="ico ico-chevron-down"></i><div class="sc-OIhXX ekDbZl"><div class="sc-dfdIjj hFKvP">Currency</div><div class="sc-gCftrV jEiWpm"><input type="radio" class="sc-jtdBMk bEYPCz" value="HKD" checked=""><label class="sc-gEXpur iZwpjC"></label><div class="sc-iKSKfW drtjkh">HKD 港幣</div></div><div class="sc-gCftrV jEiWpm"><input type="radio" class="sc-jtdBMk bEYPCz" value="MOP"><label class="sc-gEXpur iZwpjC"></label><div class="sc-iKSKfW drtjkh">MOP Pataca</div></div></div></a>
            </li>
          </ul>
        </div>
        
        <div class="nav-section nav-section--secondary">
          <ul class="nav-list nav-list--secondary">
            <li class="nav-item">
              <a href="/stores" class="nav-link">Stores</a>
            </li>
            <li class="nav-item">
              <a href="/contact" class="nav-link">Contact</a>
            </li>
            <li class="nav-item">
              <a href="/help" class="nav-link">Help</a>
            </li>
            <li class="nav-item">
              <a href="/account" class="nav-link">My Account</a>
            </li>
          </ul>
        </div>
      </div>
    `;
  }

  render() {
    return this.element;
  }
}
