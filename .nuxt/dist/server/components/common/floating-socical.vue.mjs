import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "floating-social" }, _attrs))} data-v-702a388d><div class="floating-social__item" data-v-702a388d><a href="https://www.facebook.com/papaviet.vn" target="_blank" data-v-702a388d><i class="icon-facebook" data-v-702a388d></i></a></div><div class="floating-social__item" data-v-702a388d><a href="https://www.instagram.com/papaviet.vn" target="_blank" data-v-702a388d><i class="icon-instagram" data-v-702a388d></i></a></div><div class="floating-social__item" data-v-702a388d><a href="https://www.youtube.com/channel/UC9J9Z9Z9J9Z9J9Z9J9Z9J9Z9" target="_blank" data-v-702a388d><i class="icon-tiktok" data-v-702a388d></i></a></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/floating-socical.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-702a388d"]]);
export {
  __nuxt_component_1 as default
};
//# sourceMappingURL=floating-socical.vue.mjs.map
