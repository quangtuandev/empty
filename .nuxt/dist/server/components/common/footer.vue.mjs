import __nuxt_component_0 from "../../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import __nuxt_component_1 from "./floating-socical.vue.mjs";
import { withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import _imports_0 from "../../assets/images/logo-footer.svg.mjs";
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "footer",
  __ssrInlineRender: true,
  props: {
    isFull: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      const _component_CommonFloatingSocical = __nuxt_component_1;
      _push(`<!--[-->`);
      if (__props.isFull) {
        _push(`<div class="footer__top" data-v-8c33344e><div class="container" data-v-8c33344e><div class="row" data-v-8c33344e><div class="col-md-6" data-v-8c33344e>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: "/",
          class: "footer__logo"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img class="mascot-border"${ssrRenderAttr("src", _imports_0)} alt="Logo" data-v-8c33344e${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  class: "mascot-border",
                  src: _imports_0,
                  alt: "Logo"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="footer__desc" data-v-8c33344e>A product by Viet Uc Food &amp; Co</div></div><div class="col-md-6" data-v-8c33344e><div class="footer__top-right" data-v-8c33344e><div class="item" data-v-8c33344e><div class="item__title" data-v-8c33344e>Address:</div><div data-v-8c33344e>107 Cù Lao St, Wrd 2, Phu Nhuan Dist, Ho Chi Minh City, Viet Nam</div></div><div class="box" data-v-8c33344e><div class="item" data-v-8c33344e><div class="item__title" data-v-8c33344e>Email:</div><a href="mailto:vietuc@gmail.com" data-v-8c33344e>vietuc@gmail.com</a></div><div class="item" data-v-8c33344e><div class="item__title" data-v-8c33344e>Hotline:</div><a href="tel:+1 514-525-2433" data-v-8c33344e>+1 514-525-2433</a></div><div class="item" data-v-8c33344e><div class="item__title" data-v-8c33344e>Follow us</div><div class="item__group" data-v-8c33344e><a href="#" data-v-8c33344e><i class="icon-instagram" data-v-8c33344e></i></a><a href="https://www.facebook.com/papaviet.vn" target="_blank" data-v-8c33344e><i class="icon-facebook" data-v-8c33344e></i></a><a href="#" data-v-8c33344e><i class="icon-tiktok" data-v-8c33344e></i></a></div></div></div></div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="footer coypy-right" data-v-8c33344e><p class="mb-0 py-3 text-center" data-v-8c33344e>Copyright © 2010-2024 <a href="https://mayday-creative.com" data-v-8c33344e>Mayday Creative</a>. All rights reserved</p></div>`);
      _push(ssrRenderComponent(_component_CommonFloatingSocical, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TheFooter = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8c33344e"]]);
export {
  TheFooter as default
};
//# sourceMappingURL=footer.vue.mjs.map
