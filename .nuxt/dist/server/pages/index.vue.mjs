import __nuxt_component_0 from "../components/pages/home/herobanner.vue.mjs";
import __nuxt_component_1 from "../components/pages/home/story.vue.mjs";
import __nuxt_component_2 from "../components/pages/home/quality.vue.mjs";
import __nuxt_component_3 from "../components/pages/home/beef.vue.mjs";
import __nuxt_component_4 from "../components/pages/home/papaviet.vue.mjs";
import __nuxt_component_5 from "../components/pages/home/connecting.vue.mjs";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "hookable";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
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
export {
  index as default
};
//# sourceMappingURL=index.vue.mjs.map
