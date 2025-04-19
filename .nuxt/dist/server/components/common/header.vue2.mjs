import __nuxt_component_0 from "../../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import _imports_0 from "../../assets/images/logo.svg.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "header",
  __ssrInlineRender: true,
  setup(__props) {
    const isSticky = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: ["header the-header", { "sticky": unref(isSticky) }]
      }, _attrs))}><nav class="navbar navbar-expand-lg"><div class="container"><a class="navbar-brand d-lg-none logo__mobile" href="/"><img class="mascot-border"${ssrRenderAttr("src", _imports_0)} alt="" srcset=""></a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="icon-menu"></span></button><div class="collapse navbar-collapse justify-content-between align-items-center" id="navbarSupportedContent"><ul class="navbar-nav mb-2 mb-lg-0 mt-5 mt-md-0"><li class="nav-item">`);
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
      _push(`</li></ul><p class="d-block d-lg-none term">Papa Viet Phở - A product by Viet Uc Food &amp; Co</p><a class="header__logo navbar-brand d-none d-lg-block" href="#"><img class="mascot-border"${ssrRenderAttr("src", _imports_0)} alt="" srcset=""></a><form class="d-none d-lg-flex justify-content-end"><button type="button" class="btn button-primary"> Buy Now </button></form></div></div></nav></header>`);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=header.vue2.mjs.map
