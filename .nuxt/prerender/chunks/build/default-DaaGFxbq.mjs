import { _ as _export_sfc, a as __nuxt_component_0$1 } from './server.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, unref, withCtx, createTextVNode } from 'file:///Users/macos/working/duanyu/papa/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'file:///Users/macos/working/duanyu/papa/node_modules/vue/server-renderer/index.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-ZE_0PV97.mjs';
import { _ as _imports_0 } from './logo-BT-5W5x6.mjs';
import 'file:///Users/macos/working/duanyu/papa/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/macos/working/duanyu/papa/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/macos/working/duanyu/papa/node_modules/h3/dist/index.mjs';
import 'file:///Users/macos/working/duanyu/papa/node_modules/devalue/index.js';
import '../runtime.mjs';
import 'file:///Users/macos/working/duanyu/papa/node_modules/destr/dist/index.mjs';
import 'file:///Users/macos/working/duanyu/papa/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/macos/working/duanyu/papa/node_modules/hookable/dist/index.mjs';
import 'file:///Users/macos/working/duanyu/papa/node_modules/klona/dist/index.mjs';
import 'file:///Users/macos/working/duanyu/papa/node_modules/scule/dist/index.mjs';
import 'file:///Users/macos/working/duanyu/papa/node_modules/defu/dist/defu.mjs';
import 'file:///Users/macos/working/duanyu/papa/node_modules/ohash/dist/index.mjs';
import 'file:///Users/macos/working/duanyu/papa/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/macos/working/duanyu/papa/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/macos/working/duanyu/papa/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/macos/working/duanyu/papa/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/macos/working/duanyu/papa/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/macos/working/duanyu/papa/node_modules/pathe/dist/index.mjs';
import 'file:///Users/macos/working/duanyu/papa/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Users/macos/working/duanyu/papa/node_modules/unhead/dist/index.mjs';
import 'file:///Users/macos/working/duanyu/papa/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/macos/working/duanyu/papa/node_modules/unctx/dist/index.mjs';
import 'file:///Users/macos/working/duanyu/papa/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/macos/working/duanyu/papa/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/macos/working/duanyu/papa/node_modules/vue-devtools-stub/dist/index.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "header",
  __ssrInlineRender: true,
  setup(__props) {
    const isSticky = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["the-header", { "sticky": unref(isSticky) }]
      }, _attrs))} data-v-d18c5b8b><nav class="navbar navbar-expand-lg" data-v-d18c5b8b><div class="container" data-v-d18c5b8b><a class="navbar-brand d-md-none logo__mobile" href="#" data-v-d18c5b8b><img class="mascot-border"${ssrRenderAttr("src", _imports_0)} alt="" srcset="" data-v-d18c5b8b></a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" data-v-d18c5b8b><span class="icon-menu" data-v-d18c5b8b></span></button><div class="collapse navbar-collapse justify-content-between align-items-center" id="navbarSupportedContent" data-v-d18c5b8b><ul class="navbar-nav mb-2 mb-lg-0 mt-5 mt-md-0" data-v-d18c5b8b><li class="nav-item" data-v-d18c5b8b>`);
      _push(ssrRenderComponent(_component_nuxt_link, { class: "nav-link" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Product`);
          } else {
            return [
              createTextVNode("Product")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item" data-v-d18c5b8b>`);
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
      _push(`</li></ul><p class="d-block d-md-none term" data-v-d18c5b8b>Papa Viet Ph\u1EDF - A product by Viet Uc Food &amp; Co</p><a class="navbar-brand d-none d-md-block" href="#" data-v-d18c5b8b><img class="mascot-border"${ssrRenderAttr("src", _imports_0)} alt="" srcset="" data-v-d18c5b8b></a><form class="d-none d-md-flex" data-v-d18c5b8b><button type="button" class="btn button-primary me-2" data-v-d18c5b8b> Buy Now </button></form></div></div></nav></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TheHeader = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-d18c5b8b"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-2658fbd3><p class="mb-0 py-3 text-center" data-v-2658fbd3>Copyright \xA9 2010-2024\xA0<a href="https://mayday-creative.com" data-v-2658fbd3>Mayday Creative</a>.\xA0All rights reserved</p></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TheFooter = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2658fbd3"]]);
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtPage = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout" }, _attrs))} data-v-5a9400ac><div data-v-5a9400ac>`);
      _push(ssrRenderComponent(TheHeader, null, null, _parent));
      _push(`<div class="container" data-v-5a9400ac>`);
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(TheFooter, null, null, _parent));
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
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5a9400ac"]]);

export { _default as default };
//# sourceMappingURL=default-DaaGFxbq.mjs.map
