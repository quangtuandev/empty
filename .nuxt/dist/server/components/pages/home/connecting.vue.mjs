import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import _imports_0 from "../../../public/assets/pages/home/connecting/banner.png.mjs";
import _export_sfc from "../../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "sc-connecting" }, _attrs))} data-v-c963289e><div class="container" data-v-c963289e><div class="row d-flex align-items-center" data-v-c963289e><div class="col-xl-6" data-aos="fade-right" data-v-c963289e><div class="sc-header" data-v-c963289e><h2 class="sc-header__title" data-v-c963289e>CONNECTING PARTNERS</h2><div class="sc-header__sub" data-v-c963289e>Become a companIon wIth us </div><div class="sc-header__excerpt" data-v-c963289e> Please send us feedback or ask about partnership opportunities. We are excited to explore the possibilities of collaboration. Furthermore, follow our social media to see our latest creative endeavors. </div></div><div class="contact-form" data-v-c963289e><form class="gap-0 gap-md-3 d-flex flex-column" data-v-c963289e><div class="row gx-3" data-v-c963289e><div class="col-12 col-xl-6" data-v-c963289e><div class="form-floating" data-v-c963289e><input type="email" class="form-control bg-transparent" id="floatingInput2" placeholder="name@example.com" data-v-c963289e><label for="floatingInput2" data-v-c963289e>Email</label></div></div><div class="col-12 col-xl-6" data-v-c963289e><div class="form-floating" data-v-c963289e><input type="email" class="form-control bg-transparent" id="floatingInput" placeholder="name@example.com" data-v-c963289e><label for="floatingInput" data-v-c963289e>Number Phone</label></div></div></div><div class="form-floating" data-v-c963289e><textarea class="form-control bg-transparent" placeholder="Leave a comment here" id="floatingTextarea2" data-v-c963289e></textarea><label for="floatingTextarea2" data-v-c963289e>Message</label></div><div class="" data-v-c963289e><button type="submit" class="btn contact-form__btn mb-0" data-v-c963289e>SEND</button></div></form></div></div><div class="col-xl-6 d-none d-xl-block" data-aos="fade-left" data-v-c963289e><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-c963289e></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/home/connecting.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-c963289e"]]);
export {
  __nuxt_component_5 as default
};
//# sourceMappingURL=connecting.vue.mjs.map
