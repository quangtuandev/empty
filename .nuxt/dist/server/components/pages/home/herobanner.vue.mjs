import _sfc_main$1 from "../../common/swiper.vue.mjs";
import { mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import _imports_0 from "../../../public/assets/pages/home/herobanner/banner-mb.png.mjs";
import _imports_1 from "../../../public/assets/pages/home/herobanner/banner.png.mjs";
import _export_sfc from "../../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "herobanner",
  __ssrInlineRender: true,
  setup(__props) {
    const sliderData = [
      { image: "/assets/pages/home/herobanner/thumb-01.jpg" },
      { image: "/assets/pages/home/herobanner/thumb-01.jpg" },
      { image: "/assets/pages/home/herobanner/thumb-01.jpg" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonSwiper = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "herobanner" }, _attrs))} data-v-c8e00ce5><div class="container" data-v-c8e00ce5><div class="box-top" data-v-c8e00ce5><div class="row gx-xl-0" data-v-c8e00ce5><div class="col-md-6 order-md-2" data-aos="fade-left" data-v-c8e00ce5><div class="box-top__thumb" data-v-c8e00ce5><picture data-v-c8e00ce5><source media="(max-width:1199px)"${ssrRenderAttr("srcset", _imports_0)} type="image/png" data-v-c8e00ce5><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-c8e00ce5></picture></div></div><div class="col-md-6 herobanner__left" data-aos="fade-right" data-v-c8e00ce5><div class="sc-header sc-header-s1" data-v-c8e00ce5><h2 class="sc-header__title" data-v-c8e00ce5>PHỞ PAPA VIET</h2><div class="sc-header__sub" data-v-c8e00ce5>FROM VIETNAM TO YOUR TABLE, READY <br class="d-none d-xl-block" data-v-c8e00ce5>IN MINUTES </div><div class="sc-header__excerpt" data-v-c8e00ce5> Bringing the authentic taste of Vietnamese Phở to homes worldwide, Papa Việt offers a premium instant experience that transforms quick meals into comforting, flavorful moments. The warmth of traditional Vietnamese phở, the bliss of savoring authentic cuisine, and a quick fix for homesickness—that is Papa Việt’s gift to you, anytime you need it. </div></div></div></div></div><div class="box-bottom" data-aos="fade-up" data-v-c8e00ce5><div class="sc-header__sub d-xl-none" data-v-c8e00ce5>BRINGING THE AUTHENTIC FLAVORS OF VIETNAM INTO EVERY HOME</div><div class="row" data-v-c8e00ce5><div class="col-md-6" data-v-c8e00ce5><div class="box-slider" data-v-c8e00ce5>`);
      _push(ssrRenderComponent(_component_CommonSwiper, {
        slides: sliderData,
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: { delay: 3e3, disableOnInteraction: false },
        pagination: { clickable: true }
      }, {
        default: withCtx(({ slide }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="box-slider__item" data-v-c8e00ce5${_scopeId}><img${ssrRenderAttr("src", slide.image)}${ssrRenderAttr("alt", slide.title)} class="" data-v-c8e00ce5${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "box-slider__item" }, [
                createVNode("img", {
                  src: slide.image,
                  alt: slide.title,
                  class: ""
                }, null, 8, ["src", "alt"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="col-md-6 d-flex align-items-center" data-v-c8e00ce5><div class="sc-header sc-header-s2" data-v-c8e00ce5><div class="sc-header__sub d-none d-xl-block" data-v-c8e00ce5>BRINGING THE AUTHENTIC FLAVORS OF VIETNAM INTO EVERY HOME</div><div class="sc-header__excerpt" data-v-c8e00ce5> Papa Việt offers a convenient yet uncompromised Phở experience that turns quick meals into something special. Papa Việt serves two key audiences: international customers seeking authentic Vietnamese cuisine and busy professionals, students, and families who crave traditional flavors but lack time to prepare from scratch. </div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/home/herobanner.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c8e00ce5"]]);
export {
  __nuxt_component_0 as default
};
//# sourceMappingURL=herobanner.vue.mjs.map
