import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import _imports_0 from "../assets/images/model.png.mjs";
import _imports_1 from "../assets/images/bg-svg.svg.mjs";
import { useSSRContext } from "vue";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-e7d7fdee><div class="position-relative d-inline-block mascot" data-v-e7d7fdee><img class="mascot-models"${ssrRenderAttr("src", _imports_0)} alt="" srcset="" data-v-e7d7fdee><img class="mascot-border"${ssrRenderAttr("src", _imports_1)} alt="" srcset="" data-v-e7d7fdee></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mascot.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-e7d7fdee"]]);
export {
  __nuxt_component_0 as default
};
//# sourceMappingURL=mascot.vue.mjs.map
