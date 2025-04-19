import { _ as _export_sfc, a as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link.mjs';
import { _ as _imports_0$1 } from './logo.svg.mjs';
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

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "header",
  __ssrInlineRender: true,
  setup(__props) {
    const isSticky = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: ["header the-header", { "sticky": unref(isSticky) }]
      }, _attrs))}><nav class="navbar navbar-expand-lg"><div class="container"><a class="navbar-brand d-lg-none logo__mobile" href="/"><img class="mascot-border"${ssrRenderAttr("src", _imports_0$1)} alt="" srcset=""></a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="icon-menu"></span></button><div class="collapse navbar-collapse justify-content-between align-items-center" id="navbarSupportedContent"><ul class="navbar-nav mb-2 mb-lg-0 mt-5 mt-md-0"><li class="nav-item">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/",
        class: "nav-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Products`);
          } else {
            return [
              createTextVNode("Products")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "nav-link",
        to: "/contact"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact`);
          } else {
            return [
              createTextVNode("Contact")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul><p class="d-block d-lg-none term">Papa Viet Phở - A product by Viet Uc Food &amp; Co</p><a class="header__logo navbar-brand d-none d-lg-block" href="#"><img class="mascot-border"${ssrRenderAttr("src", _imports_0$1)} alt="" srcset=""></a><form class="d-none d-lg-flex justify-content-end"><button type="button" class="btn button-primary"> Buy Now </button></form></div></div></nav></header>`);
    };
  }
});

const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "floating-social" }, _attrs))} data-v-702a388d><div class="floating-social__item" data-v-702a388d><a href="https://www.facebook.com/papaviet.vn" target="_blank" data-v-702a388d><i class="icon-facebook" data-v-702a388d></i></a></div><div class="floating-social__item" data-v-702a388d><a href="https://www.instagram.com/papaviet.vn" target="_blank" data-v-702a388d><i class="icon-instagram" data-v-702a388d></i></a></div><div class="floating-social__item" data-v-702a388d><a href="https://www.youtube.com/channel/UC9J9Z9Z9J9Z9J9Z9J9Z9J9Z9" target="_blank" data-v-702a388d><i class="icon-tiktok" data-v-702a388d></i></a></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/floating-socical.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-702a388d"]]);

const _imports_0 = "" + __buildAssetsURL("logo-footer.DDc5LGYj.svg");

const _sfc_main$1 = {
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TheFooter = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-8c33344e"]]);

const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtPage = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout" }, _attrs))} data-v-7cfcf2db><div data-v-7cfcf2db>`);
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(`<div class="container" data-v-7cfcf2db>`);
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(TheFooter, {
        isFull: _ctx.$route.meta.footerType === "full"
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7cfcf2db"]]);

export { _default as default };
//# sourceMappingURL=default.vue.mjs.map
