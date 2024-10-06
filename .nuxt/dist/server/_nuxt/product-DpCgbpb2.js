import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../server.mjs";
const _imports_0$1 = "" + __buildAssetsURL("model.xxmsCNAO.png");
const _imports_1 = "" + __buildAssetsURL("bg-svg.qoAiXMAi.svg");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-e7d7fdee><div class="position-relative d-inline-block mascot" data-v-e7d7fdee><img class="mascot-models"${ssrRenderAttr("src", _imports_0$1)} alt="" srcset="" data-v-e7d7fdee><img class="mascot-border"${ssrRenderAttr("src", _imports_1)} alt="" srcset="" data-v-e7d7fdee></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mascot.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-e7d7fdee"]]);
const _imports_0 = "" + __buildAssetsURL("product.DWPkJ38e.png");
export {
  _imports_0 as _,
  __nuxt_component_0 as a
};
//# sourceMappingURL=product-DpCgbpb2.js.map
