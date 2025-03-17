import { unref, mergeProps, withCtx, renderSlot, createBlock, createCommentVNode, openBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderSlot, ssrRenderClass } from "vue/server-renderer";
import { Swiper, SwiperSlide } from "swiper/vue";
/* empty css                                    */
/* empty css                                                */
/* empty css                                                */
import "../../node_modules/swiper/modules/autoplay.css.mjs";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
const _sfc_main = {
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/swiper.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=swiper.vue.mjs.map
