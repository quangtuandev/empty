import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p class="contact-content__item"><span class="fw-bold d-block">Address:</span> - AU: Shop 645/ 303-307 Castlereagh St, Haymarket NSW 2000 <br> - VN: 107 Cu Lao, Ward 2, Phu Nhuan Ddst, HCMC, VietNam </p><div class="d-flex flex-wrap justify-content-between"><p class="contact-content__item col-12 col-md-6 col-lg-4"><span class="fw-bold d-block">Hotline:</span><a class="d-block" href="tel:+61420605188">- AU: (+61) 420 605 188</a><a class="d-block" href="tel:+84564472669">- VN: (+84)564472669</a></p><p class="contact-content__item col-12 col-md-6 col-lg-4"><span class="fw-bold d-block">Email:</span><a href="mailto:info.vietuc@aussiegr.co">info.vietuc@aussiegr.co</a></p><p class="contact-content__item col-12 col-md-6 col-lg-4"><span class="fw-bold d-block">Social network</span><span class="d-flex gap-2"><a class="fs-20" href="#"><i class="icon-instagram"></i></a><a class="fs-20" href="#"><i class="icon-facebook"></i></a></span></p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_1 as default
};
//# sourceMappingURL=contact.vue.mjs.map
