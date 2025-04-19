import { unref, mergeProps, withCtx, renderSlot, createBlock, createCommentVNode, openBlock, Fragment, renderList, useSSRContext, createVNode, computed } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderSlot, ssrRenderClass, ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { _ as _export_sfc } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'vue-router';

const _sfc_main$7 = {
  __name: "swiper",
  __ssrInlineRender: true,
  props: {
    slides: {
      type: Array,
      required: true
    },
    slidesPerView: {
      type: Number,
      default: 1
    },
    spaceBetween: {
      type: Number,
      default: 10
    },
    navigation: {
      type: [Boolean, Object],
      default: false
    },
    pagination: {
      type: [Boolean, Object],
      default: false
    },
    autoplay: {
      type: [Boolean, Object],
      default: false
      // Có thể truyền `true` hoặc object `{ delay: 3000, disableOnInteraction: false }`
    },
    breakpoints: {
      type: Object,
      default: () => ({})
      // Truyền object breakpoints tùy chỉnh
    }
  },
  setup(__props) {
    const props = __props;
    const swiperModules = [];
    if (props.navigation) swiperModules.push(Navigation);
    if (props.pagination) swiperModules.push(Pagination);
    if (props.autoplay) swiperModules.push(Autoplay);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Swiper), mergeProps({
        modules: swiperModules,
        "slides-per-view": __props.slidesPerView,
        "space-between": __props.spaceBetween,
        navigation: __props.navigation,
        pagination: __props.pagination,
        autoplay: __props.autoplay,
        breakpoints: __props.breakpoints
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(__props.slides, (slide, index) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), { key: index }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "default", {
                      slide,
                      index
                    }, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "default", {
                        slide,
                        index
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
            if (__props.pagination && __props.pagination.el) {
              _push2(`<div class="${ssrRenderClass(__props.pagination.el.replace(".", ""))}"${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(__props.slides, (slide, index) => {
                return openBlock(), createBlock(unref(SwiperSlide), { key: index }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "default", {
                      slide,
                      index
                    })
                  ]),
                  _: 2
                }, 1024);
              }), 128)),
              __props.pagination && __props.pagination.el ? (openBlock(), createBlock("div", {
                key: 0,
                class: __props.pagination.el.replace(".", "")
              }, null, 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/swiper.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};

const _imports_0$5 = "" + __buildAssetsURL("banner-mb.CZ_5hzVG.png");

const _imports_1$2 = "" + __buildAssetsURL("banner.CR7uxIvl.png");

const _sfc_main$6 = {
  __name: "herobanner",
  __ssrInlineRender: true,
  setup(__props) {
    const sliderData = [
      { image: "/assets/pages/home/herobanner/thumb-01.jpg" },
      { image: "/assets/pages/home/herobanner/thumb-01.jpg" },
      { image: "/assets/pages/home/herobanner/thumb-01.jpg" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonSwiper = _sfc_main$7;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "herobanner" }, _attrs))} data-v-c8e00ce5><div class="container" data-v-c8e00ce5><div class="box-top" data-v-c8e00ce5><div class="row gx-xl-0" data-v-c8e00ce5><div class="col-md-6 order-md-2" data-aos="fade-left" data-v-c8e00ce5><div class="box-top__thumb" data-v-c8e00ce5><picture data-v-c8e00ce5><source media="(max-width:1199px)"${ssrRenderAttr("srcset", _imports_0$5)} type="image/png" data-v-c8e00ce5><img${ssrRenderAttr("src", _imports_1$2)} alt="" data-v-c8e00ce5></picture></div></div><div class="col-md-6 herobanner__left" data-aos="fade-right" data-v-c8e00ce5><div class="sc-header sc-header-s1" data-v-c8e00ce5><h2 class="sc-header__title" data-v-c8e00ce5>PHỞ PAPA VIET</h2><div class="sc-header__sub" data-v-c8e00ce5>FROM VIETNAM TO YOUR TABLE, READY <br class="d-none d-xl-block" data-v-c8e00ce5>IN MINUTES </div><div class="sc-header__excerpt" data-v-c8e00ce5> Bringing the authentic taste of Vietnamese Phở to homes worldwide, Papa Việt offers a premium instant experience that transforms quick meals into comforting, flavorful moments. The warmth of traditional Vietnamese phở, the bliss of savoring authentic cuisine, and a quick fix for homesickness—that is Papa Việt’s gift to you, anytime you need it. </div></div></div></div></div><div class="box-bottom" data-aos="fade-up" data-v-c8e00ce5><div class="sc-header__sub d-xl-none" data-v-c8e00ce5>BRINGING THE AUTHENTIC FLAVORS OF VIETNAM INTO EVERY HOME</div><div class="row" data-v-c8e00ce5><div class="col-md-6" data-v-c8e00ce5><div class="box-slider" data-v-c8e00ce5>`);
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/home/herobanner.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-c8e00ce5"]]);

const _imports_0$4 = "" + __buildAssetsURL("banner.uRDy6k6t.jpg");

const _sfc_main$5 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "sc-story" }, _attrs))} data-v-50df20d4><div class="container" data-v-50df20d4><div class="row" data-v-50df20d4><div class="col-md-6 order-xl-2" data-aos="fade-left" data-v-50df20d4><div class="story__thumb" data-v-50df20d4><img${ssrRenderAttr("src", _imports_0$4)} alt="" data-v-50df20d4></div></div><div class="col-md-6 d-flex align-items-center" data-aos="fade-right" data-v-50df20d4><div class="sc-header" data-v-50df20d4><h2 class="sc-header__title" data-v-50df20d4>PAPA VIET’s STORY</h2><div class="sc-header__sub" data-v-50df20d4>A LOVEING BOUL OF LEGACY</div><div class="sc-header__excerpt" data-v-50df20d4><p data-v-50df20d4> Crafted with essential ingredients, Papa Viet&#39;s Ph6 stays true to the authentic flavor. Each package contains premium rice noodles and a rich broth cube with real Australian beef.<br data-v-50df20d4> Pha broth is distinctive and challenging to reproduce, but Papa Viet has mastered it. The unmistakable aroma of slow-cooked beef bones with essential PM spices will warm you up instantly. </p><p data-v-50df20d4>HONEST-TO-VIET’S GOODNESS At Papa Viet, we live by the name of our homeland and carry the mission to preserve the authenticity of Vietnamese cuisine. Made with modern technology and old-school passion for Vietnam&#39;s most iconic noodle soup, Papa Viet&#39;s Pho is freeze-dried to keep the essence intact. The broth and real meat or veggie pieces are concentrated into a cube, saving the authentic flavor made with signature ingredients. </p></div></div></div></div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/home/story.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-50df20d4"]]);

const _imports_0$3 = "" + __buildAssetsURL("banner.DFxA3kRI.png");

const _sfc_main$4 = {
  __name: "quality",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      {
        image: "/assets/pages/home/quality/item-01.png",
        title: "Farm-to-Table PhIlosophy",
        content: "Papa Việt believes in a farm-to-table philosophy, using using high-quality, locally sourced ingredients to offer natural, preservative-free ingredients. Every bowl of Papa Việt’s Phở is as healthy as it is delicious."
      },
      {
        image: "/assets/pages/home/quality/item-03.png",
        title: "Natural IngredIents",
        content: "Papa Việt select premium Australian beef, locally sourced traditional spices, and rice noodles made from Vietnamese-grown rice and traditional spices that capture the essence of a freshly prepared bowl of Phở."
      },
      {
        image: "/assets/pages/home/quality/item-02.png",
        title: "Advanced Freeze-DryIng",
        content: "Freeze-drying technology plays a key role in maintaining the integrity of our product. By freezing and removing moisture under vacuum, we lock in the rich flavors and nutrients while extending shelf life without artificial preservatives."
      },
      {
        image: "/assets/pages/home/quality/item-04.png",
        title: "Enhanced Safety",
        content: "Production process adheres to strict safety and quality standards, ensuring that each package meets the highest hygiene and quality benchmarks."
      }
    ];
    const firstTwoItems = computed(() => items.slice(0, 2));
    const lastTwoItems = computed(() => items.slice(-2));
    computed(() => items);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "sc-quality" }, _attrs))} data-v-983a100a><div class="container" data-v-983a100a><div class="sc-header text-center" data-aos="fade-up" data-v-983a100a><h2 class="sc-header__title" data-v-983a100a>QUALITY AND SAFETY</h2><div class="sc-header__sub" data-v-983a100a>BRINGING THE AUTHENTIC FLAVORS OF VIETNAM INTO EVERY HOME</div></div><div class="position-relative" data-aos="fade-up" data-v-983a100a><div class="boxs" data-v-983a100a><div class="boxs__item" data-v-983a100a><!--[-->`);
      ssrRenderList(unref(firstTwoItems), (item, index) => {
        _push(`<div class="item text-xl-end" data-v-983a100a><div class="item__header" data-v-983a100a><div class="item__thumb" data-v-983a100a><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.title)} data-v-983a100a></div><h3 class="item__title" data-v-983a100a>${ssrInterpolate(item.title)}</h3></div><div class="item__content" data-v-983a100a>${ssrInterpolate(item.content)}</div></div>`);
      });
      _push(`<!--]--></div><div class="boxs__banner d-none d-xl-block" data-v-983a100a><img${ssrRenderAttr("src", _imports_0$3)} alt="" data-v-983a100a></div><div class="boxs__item" data-v-983a100a><!--[-->`);
      ssrRenderList(unref(lastTwoItems), (item, index) => {
        _push(`<div class="item" data-v-983a100a><div class="item__header" data-v-983a100a><div class="item__thumb" data-v-983a100a><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.title)} data-v-983a100a></div><h3 class="item__title" data-v-983a100a>${ssrInterpolate(item.title)}</h3></div><div class="item__content" data-v-983a100a>${ssrInterpolate(item.content)}</div></div>`);
      });
      _push(`<!--]--></div></div><div class="boxs__banner d-xl-none" data-v-983a100a><img${ssrRenderAttr("src", _imports_0$3)} alt="" data-v-983a100a></div></div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/home/quality.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-983a100a"]]);

const _imports_0$2 = "" + __buildAssetsURL("icon-beef-arrow.BpO71mXU.svg");

const _imports_1$1 = "" + __buildAssetsURL("banner.Cj7EraxF.png");

const _imports_2 = "" + __buildAssetsURL("banner-mb.C-GXg6Ao.png");

const _imports_3 = "" + __buildAssetsURL("icon-cirlce-right.BaIUgB36.svg");

const _sfc_main$3 = {
  __name: "beef",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      {
        image: "/assets/pages/home/beef/item-01.png",
        title: "Phở spices"
      },
      {
        image: "/assets/pages/home/beef/item-02.png",
        title: "Australian beef"
      },
      {
        image: "/assets/pages/home/beef/item-03.png",
        title: "Beef bone"
      },
      {
        image: "/assets/pages/home/beef/item-04.png",
        title: "Phở"
      },
      {
        image: "/assets/pages/home/beef/item-05.png",
        title: "Herbs"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "sc-beef" }, _attrs))} data-v-02286df6><div class="container" data-v-02286df6><div class="content" data-v-02286df6><div class="content__right order-xl-2" data-aos="fade-left" data-v-02286df6><div class="sc-header" data-v-02286df6><div class="sc-header__sub" data-v-02286df6>PAPA VIET’s Product</div><h2 class="sc-header__title" data-v-02286df6>VIETNAMESE <br class="d-xl-none" data-v-02286df6>BEEF PHỞ</h2><div class="sc-header__excerpt" data-v-02286df6> Papa Việt select premium Australian beef, locally sourced traditional spices, and rice noodles made from Vietnamese-grown rice and traditional spices that capture the essence of a freshly prepared bowl of Phở. </div></div><div class="box d-none d-xl-flex" data-aos="fade-up" data-v-02286df6><!--[-->`);
      ssrRenderList(items, (item, index) => {
        _push(`<div class="item" data-v-02286df6><div class="item__header" data-v-02286df6><div class="item__thumb mx-auto" data-v-02286df6><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.title)} data-v-02286df6></div><div class="item__title" data-v-02286df6>${ssrInterpolate(item.title)}</div></div></div>`);
      });
      _push(`<!--]--><a href="#" class="box__link" data-v-02286df6><img${ssrRenderAttr("src", _imports_0$2)} alt="" data-v-02286df6></a></div></div><div class="content__thumb" data-aos="fade-right" data-v-02286df6><picture data-v-02286df6><source media="(min-width: 1200px)"${ssrRenderAttr("srcset", _imports_1$1)} data-v-02286df6><img${ssrRenderAttr("src", _imports_2)} alt="" data-v-02286df6></picture></div><div class="beef__buttons d-xl-none" data-v-02286df6><button type="button" class="btn btn-primary" data-v-02286df6> Buy Now </button><a href="#" class="btn btn-primary-outline" data-v-02286df6><img${ssrRenderAttr("src", _imports_3)} alt="" data-v-02286df6><span data-v-02286df6>Chi tiết </span></a></div></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/home/beef.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-02286df6"]]);

const _imports_0$1 = "" + __buildAssetsURL("fssc.zxf6k9cG.svg");

const _imports_1 = "" + __buildAssetsURL("banner.BlOzYB6l.png");

const _sfc_main$2 = {
  __name: "papaviet",
  __ssrInlineRender: true,
  setup(__props) {
    const logos = [
      {
        src: "/assets/pages/home/papaviet/logo-01.png"
      },
      {
        src: "/assets/pages/home/papaviet/logo-02.png"
      },
      {
        src: "/assets/pages/home/papaviet/logo-03.png"
      },
      {
        src: "/assets/pages/home/papaviet/logo-04.png"
      },
      {
        src: "/assets/pages/home/papaviet/logo-05.png"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "sc-papaviet",
        "data-aos": "fade-up"
      }, _attrs))} data-v-7842e656><div class="container" data-v-7842e656><div class="box" data-v-7842e656><div class="box__left" data-v-7842e656><div class="sc-header" data-v-7842e656><h2 class="sc-header__title" data-v-7842e656>PHỞ <br class="d-none d-xl-block" data-v-7842e656>PAPA VIET</h2><div class="sc-header__sub mb-0" data-v-7842e656>FROM VIETNAM TO YOUR TABLE, READY IN MINUTES </div></div></div><div class="box__right" data-v-7842e656><div class="right__item" data-v-7842e656><p data-v-7842e656>CertIfIcate:</p><img${ssrRenderAttr("src", _imports_0$1)} alt="" data-v-7842e656></div><div class="right__item" data-v-7842e656><p data-v-7842e656>CLAIM LOGO:</p><div class="box__logos" data-v-7842e656><!--[-->`);
      ssrRenderList(logos, (logo) => {
        _push(`<img${ssrRenderAttr("src", logo.src)} alt="" data-v-7842e656>`);
      });
      _push(`<!--]--></div></div></div><div class="box__thumb d-xl-none" data-v-7842e656><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-7842e656></div></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/home/papaviet.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-7842e656"]]);

const _imports_0 = "" + __buildAssetsURL("banner.BS8bSwXJ.png");

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "sc-connecting" }, _attrs))} data-v-c963289e><div class="container" data-v-c963289e><div class="row d-flex align-items-center" data-v-c963289e><div class="col-xl-6" data-aos="fade-right" data-v-c963289e><div class="sc-header" data-v-c963289e><h2 class="sc-header__title" data-v-c963289e>CONNECTING PARTNERS</h2><div class="sc-header__sub" data-v-c963289e>Become a companIon wIth us </div><div class="sc-header__excerpt" data-v-c963289e> Please send us feedback or ask about partnership opportunities. We are excited to explore the possibilities of collaboration. Furthermore, follow our social media to see our latest creative endeavors. </div></div><div class="contact-form" data-v-c963289e><form class="gap-0 gap-md-3 d-flex flex-column" data-v-c963289e><div class="row gx-3" data-v-c963289e><div class="col-12 col-xl-6" data-v-c963289e><div class="form-floating" data-v-c963289e><input type="email" class="form-control bg-transparent" id="floatingInput2" placeholder="name@example.com" data-v-c963289e><label for="floatingInput2" data-v-c963289e>Email</label></div></div><div class="col-12 col-xl-6" data-v-c963289e><div class="form-floating" data-v-c963289e><input type="email" class="form-control bg-transparent" id="floatingInput" placeholder="name@example.com" data-v-c963289e><label for="floatingInput" data-v-c963289e>Number Phone</label></div></div></div><div class="form-floating" data-v-c963289e><textarea class="form-control bg-transparent" placeholder="Leave a comment here" id="floatingTextarea2" data-v-c963289e></textarea><label for="floatingTextarea2" data-v-c963289e>Message</label></div><div class="" data-v-c963289e><button type="submit" class="btn contact-form__btn mb-0" data-v-c963289e>SEND</button></div></form></div></div><div class="col-xl-6 d-none d-xl-block" data-aos="fade-left" data-v-c963289e><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-c963289e></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/home/connecting.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-c963289e"]]);

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PagesHomeHerobanner = __nuxt_component_0;
      const _component_PagesHomeStory = __nuxt_component_1;
      const _component_PagesHomeQuality = __nuxt_component_2;
      const _component_PagesHomeBeef = __nuxt_component_3;
      const _component_PagesHomePapaviet = __nuxt_component_4;
      const _component_PagesHomeConnecting = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper d-flex flex-column" }, _attrs))} data-v-92fc9dbb>`);
      _push(ssrRenderComponent(_component_PagesHomeHerobanner, null, null, _parent));
      _push(ssrRenderComponent(_component_PagesHomeStory, null, null, _parent));
      _push(ssrRenderComponent(_component_PagesHomeQuality, null, null, _parent));
      _push(ssrRenderComponent(_component_PagesHomeBeef, null, null, _parent));
      _push(ssrRenderComponent(_component_PagesHomePapaviet, null, null, _parent));
      _push(ssrRenderComponent(_component_PagesHomeConnecting, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-92fc9dbb"]]);

export { index as default };
//# sourceMappingURL=index.vue.mjs.map
