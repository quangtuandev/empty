import __nuxt_component_0 from "../node_modules/nuxt/dist/pages/runtime/page.mjs";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import TheHeader from "../components/common/header.vue.mjs";
import TheFooter from "../components/common/footer.vue.mjs";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtPage = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout" }, _attrs))} data-v-f67fa83f><div data-v-f67fa83f>`);
      _push(ssrRenderComponent(TheHeader, null, null, _parent));
      _push(`<div class="container" data-v-f67fa83f>`);
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
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f67fa83f"]]);
export {
  _default as default
};
//# sourceMappingURL=default.vue.mjs.map
