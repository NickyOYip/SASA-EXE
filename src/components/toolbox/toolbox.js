// Toolbox Component for Header
export class Toolbox {
  constructor() {
    this.element = null;
    this.init();
  }

  init() {
    this.createElement();
  }

  createElement() {
    this.element = document.createElement('div');
    this.element.className = 'toolbox__container toolbox--bounce-in';
    this.element.innerHTML = `
      <div class="toolbox__item">
        <div data-for="iuue1fndtl" data-tip="tooltip" currentitem="false">
          <a rel="noreferrer" class="toolbox__button toolbox__button--shadow" href="https://www.facebook.com/sasahongkong/" target="_blank" style="font-size: 44.4444px; width: 0.9em; height: 0.9em; border-radius: 100%; background: rgb(24, 119, 242);">
            <i class="sc-fTUBLH dBSizE toolbox__icon ico ico-facebook"></i>
          </a>
        </div>
        <div class="__react_component_tooltip place-left type-dark tooltip--custom tooltip--custom--clickable toolbox__tooltip" id="iuue1fndtl" data-id="tooltip">
          <span>Facebook</span>
        </div>
      </div>
      
      <div class="toolbox__item">
        <div data-for="hubbym38tr" data-tip="tooltip" currentitem="false">
          <a rel="noreferrer" class="toolbox__button toolbox__button--shadow" href="https://www.instagram.com/sasahk_official/" target="_blank" style="font-size: 44.4444px; width: 0.9em; height: 0.9em; border-radius: 100%; background: rgb(255, 0, 118);">
            <i class="sc-fTUBLH dBSizE toolbox__icon ico ico-instagram"></i>
          </a>
        </div>
        <div class="__react_component_tooltip place-left type-dark tooltip--custom tooltip--custom--clickable toolbox__tooltip" id="hubbym38tr" data-id="tooltip">
          <span>Instagram</span>
        </div>
      </div>
      
      <div class="toolbox__item">
        <div data-for="1rxen1nj8m" data-tip="tooltip" currentitem="false">
          <a rel="noreferrer" class="toolbox__button toolbox__button--shadow" href="https://sasa.haircosys.ai" target="_blank" style="font-size: 40px;">
            <img loading="lazy" class="toolbox__button--custom" src="https://cms.cdn.91app.hk/images/original/17/77cbf5b3-54bb-4710-a383-4e4f36302618-1749435722-1rxen1nj8m_m.png" alt="AI Beauty">
          </a>
        </div>
        <div class="__react_component_tooltip place-left type-dark tooltip--custom tooltip--custom--clickable toolbox__tooltip" id="1rxen1nj8m" data-id="tooltip">
          <span>AI Beauty</span>
        </div>
      </div>
      
      <div class="toolbox__item">
        <div data-for="fheg3287xf" data-tip="tooltip" currentitem="false">
          <a rel="noreferrer" class="toolbox__button toolbox__button--shadow" href="https://www.sasa.com.hk/shop/introduce/17?t=3" target="_blank" style="font-size: 40px;">
            <img loading="lazy" class="toolbox__button--custom" src="https://cms.cdn.91app.hk/images/original/17/77cbf5b3-54bb-4710-a383-4e4f36302618-1749435732-fheg3287xf_m.png" alt="CS客服留言">
          </a>
        </div>
        <div class="__react_component_tooltip place-left type-dark tooltip--custom tooltip--custom--clickable toolbox__tooltip" id="fheg3287xf" data-id="tooltip">
          <span>CS客服留言</span>
        </div>
      </div>
      
      <div class="toolbox__item">
        <div data-for="ja45t3araw" data-tip="tooltip" currentitem="false">
          <a rel="noreferrer" class="toolbox__button toolbox__button--shadow" href="https://www.sasa.com.hk/V2/VipMember/EmailNotification" target="_blank" style="font-size: 40px;">
            <img loading="lazy" class="toolbox__button--custom" src="https://cms.cdn.91app.hk/images/original/17/77cbf5b3-54bb-4710-a383-4e4f36302618-1749435743-ja45t3araw_m.png" alt="Noti 通知設定">
          </a>
        </div>
        <div class="__react_component_tooltip place-left type-dark tooltip--custom tooltip--custom--clickable toolbox__tooltip" id="ja45t3araw" data-id="tooltip">
          <span>Noti 通知設定</span>
        </div>
      </div>
      
      <div class="toolbox__item">
        <div>
          <a rel="noreferrer" class="toolbox__button toolbox__button--shadow" target="_blank" style="font-size: 40px;">
            <i class="sc-fTUBLH dBSizE toolbox__icon ico ico-skip-up"></i>
          </a>
        </div>
      </div>
      
      <div data-for="9feo7h4dbm" data-tip="tooltip" currentitem="false">
        <a rel="noreferrer" class="toolbox__button toolbox__button--shadow" href="https://wa.me/85229753747" target="_blank" style="font-size: 50px;">
          <img loading="lazy" class="toolbox__button--custom" src="https://cms.cdn.91app.hk/images/original/17/77cbf5b3-54bb-4710-a383-4e4f36302618-1713437616-9feo7h4dbm_m.png" alt="WhatsApp">
        </a>
      </div>
      <div class="__react_component_tooltip place-left type-dark tooltip--custom tooltip--custom--clickable toolbox__tooltip" id="9feo7h4dbm" data-id="tooltip">
        <span>WhatsApp</span>
      </div>
    `;
  }

  render() {
    return this.element;
  }
}
