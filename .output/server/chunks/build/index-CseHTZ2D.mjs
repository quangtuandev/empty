import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { useSSRContext, mergeProps } from 'vue';
import { _ as _export_sfc } from './server.mjs';
import { _ as _imports_0$1 } from './product-D9ZsmCWR.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _imports_0 = "" + buildAssetsURL("mascot.rgWxsO9l.png");
const _imports_1 = "" + buildAssetsURL("mascot.HgNGOxtu.svg");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-a511b078><div class="position-relative d-inline-block" data-v-a511b078><img class="mascot-models"${ssrRenderAttr("src", _imports_0)} alt="" srcset="" data-v-a511b078><img class="mascot-border"${ssrRenderAttr("src", _imports_1)} alt="" srcset="" data-v-a511b078></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mascot.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-a511b078"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Mascot = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "row contact" }, _attrs))} data-v-a59781d6><div class="col-12 col-md-6" data-v-a59781d6><div class="contact-header mt-5" data-v-a59781d6><h1 class="contact-header__title text-uppercase" data-v-a59781d6> Thanks for VIsItIng </h1><p class="contact-header__description text-uppercase" data-v-a59781d6> Become a companIon wIth us </p></div><div class="contact-content" data-v-a59781d6><h2 class="contact-content__title" data-v-a59781d6>Contact Us</h2><div data-v-a59781d6><p class="contact-content__item" data-v-a59781d6><span class="fw-bold d-block" data-v-a59781d6>Address:</span> 1234 Main St, Springfield, IL 62701 </p><div class="d-flex flex-wrap justify-content-between" data-v-a59781d6><p class="contact-content__item col-12 col-md-6 col-lg-4" data-v-a59781d6><span class="fw-bold d-block" data-v-a59781d6>Hotline:</span> (217) 555-5555 </p><p class="contact-content__item col-12 col-md-6 col-lg-4" data-v-a59781d6><span class="fw-bold d-block" data-v-a59781d6>Email:</span><a href="mailto:123" data-v-a59781d6>123@gmail.com</a></p><p class="contact-content__item col-12 col-md-6 col-lg-4" data-v-a59781d6><span class="fw-bold d-block" data-v-a59781d6>Social network</span> Monday - Friday: 9:00 AM to 5:00 PM </p></div></div></div><div class="contact-form" data-v-a59781d6><h2 class="contact-form__title" data-v-a59781d6>BusIness Partner</h2><form class="gap-4 d-flex flex-column" data-v-a59781d6><div class="row" data-v-a59781d6><div class="col" data-v-a59781d6><div class="form-floating" data-v-a59781d6><input type="text" class="form-control bg-transparent" id="floatingInput2" placeholder="name@example.com" data-v-a59781d6><label for="floatingInput2" data-v-a59781d6>Full name</label></div></div><div class="col" data-v-a59781d6><div class="form-floating" data-v-a59781d6><input type="email" class="form-control bg-transparent" id="floatingInput" placeholder="name@example.com" data-v-a59781d6><label for="floatingInput" data-v-a59781d6>Email address</label></div></div></div><div class="row" data-v-a59781d6><div class="col" data-v-a59781d6><div class="form-floating" data-v-a59781d6><input type="text" class="form-control bg-transparent" id="floatingPassword" placeholder="Password" data-v-a59781d6><label for="floatingPassword" data-v-a59781d6>Your company</label></div></div><div class="col" data-v-a59781d6><div class="form-floating" data-v-a59781d6><select class="form-select bg-transparent" id="floatingSelect" aria-label="Floating label select example" data-v-a59781d6><option value="" data-v-a59781d6>selec</option><option value="1" data-v-a59781d6>One</option><option value="2" data-v-a59781d6>Two</option><option value="3" data-v-a59781d6>Three</option></select><label for="floatingSelect" class="bg-transparent" data-v-a59781d6>Enquiry purpose</label></div></div></div><div class="form-floating" data-v-a59781d6><textarea class="form-control bg-transparent" placeholder="Leave a comment here" id="floatingTextarea2" style="${ssrRenderStyle({ "height": "100px" })}" data-v-a59781d6></textarea><label for="floatingTextarea2" data-v-a59781d6>Message</label></div><div data-v-a59781d6><button type="submit" class="btn contact-form__btn" data-v-a59781d6>SEND</button></div></form></div></div><div class="col-12 col-md-6" data-v-a59781d6><div class="position-relative" data-v-a59781d6>`);
  _push(ssrRenderComponent(_component_Mascot, { class: "position-absolute top-0 d-none d-lg-inline-block" }, null, _parent));
  _push(`<img class="mw-100"${ssrRenderAttr("src", _imports_0$1)} alt="" srcset="" data-v-a59781d6></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-a59781d6"]]);

export { index as default };
//# sourceMappingURL=index-CseHTZ2D.mjs.map
