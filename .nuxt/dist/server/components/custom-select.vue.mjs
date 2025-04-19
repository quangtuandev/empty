import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  props: {
    options: {
      type: Array,
      required: true
    },
    default: {
      type: String,
      required: false,
      default: null
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0
    }
  },
  data() {
    return {
      selected: this.default ? this.default : this.options.length > 0 ? this.options[0] : null,
      open: false
    };
  },
  computed: {
    selectedOption() {
      return !this.options.find((option) => option === this.selected);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["custom-select", { "default": $options.selectedOption }],
    tabindex: $props.tabindex
  }, _attrs))} data-v-f442fd6f><div class="${ssrRenderClass([{ open: $data.open }, "selected"])}" data-v-f442fd6f>${ssrInterpolate($data.selected)}</div><div class="${ssrRenderClass([{ selectHide: !$data.open }, "items"])}" data-v-f442fd6f><!--[-->`);
  ssrRenderList($props.options, (option, i) => {
    _push(`<div class="${ssrRenderClass({ "text-white": $data.selected === option })}" data-v-f442fd6f>${ssrInterpolate(option)}</div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/custom-select.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f442fd6f"]]);
export {
  __nuxt_component_2 as default
};
//# sourceMappingURL=custom-select.vue.mjs.map
