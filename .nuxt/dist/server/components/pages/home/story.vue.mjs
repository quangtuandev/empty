import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import _imports_0 from "../../../public/assets/pages/home/story/banner.jpg.mjs";
import _export_sfc from "../../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "sc-story" }, _attrs))} data-v-50df20d4><div class="container" data-v-50df20d4><div class="row" data-v-50df20d4><div class="col-md-6 order-xl-2" data-aos="fade-left" data-v-50df20d4><div class="story__thumb" data-v-50df20d4><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-50df20d4></div></div><div class="col-md-6 d-flex align-items-center" data-aos="fade-right" data-v-50df20d4><div class="sc-header" data-v-50df20d4><h2 class="sc-header__title" data-v-50df20d4>PAPA VIET’s STORY</h2><div class="sc-header__sub" data-v-50df20d4>A LOVEING BOUL OF LEGACY</div><div class="sc-header__excerpt" data-v-50df20d4><p data-v-50df20d4> Crafted with essential ingredients, Papa Viet&#39;s Ph6 stays true to the authentic flavor. Each package contains premium rice noodles and a rich broth cube with real Australian beef.<br data-v-50df20d4> Pha broth is distinctive and challenging to reproduce, but Papa Viet has mastered it. The unmistakable aroma of slow-cooked beef bones with essential PM spices will warm you up instantly. </p><p data-v-50df20d4>HONEST-TO-VIET’S GOODNESS At Papa Viet, we live by the name of our homeland and carry the mission to preserve the authenticity of Vietnamese cuisine. Made with modern technology and old-school passion for Vietnam&#39;s most iconic noodle soup, Papa Viet&#39;s Pho is freeze-dried to keep the essence intact. The broth and real meat or veggie pieces are concentrated into a cube, saving the authentic flavor made with signature ingredients. </p></div></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/home/story.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-50df20d4"]]);
export {
  __nuxt_component_1 as default
};
//# sourceMappingURL=story.vue.mjs.map
