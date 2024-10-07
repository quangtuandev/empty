import { _ as _imports_0, a as __nuxt_component_0 } from "./product-Aa3v5Fyf.js";
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext, mergeProps, reactive, computed, unref } from "vue";
import { _ as _export_sfc } from "../server.mjs";
import { _ as _imports_0$1 } from "./logo-BT-5W5x6.js";
import { useVuelidate } from "@vuelidate/core";
import { helpers, required, email, not, sameAs } from "@vuelidate/validators";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "cookie-es";
import "destr";
import "ohash";
import "klona";
import "@vue/devtools-api";
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p class="contact-content__item"><span class="fw-bold d-block">Address:</span> - AU: Shop 645/ 303-307 Castlereagh St, Haymarket NSW 2000 <br> - VN: 107 Cu Lao, Ward 2, Phu Nhuan Ddst, HCMC, VietNam </p><div class="d-flex flex-wrap justify-content-between"><p class="contact-content__item col-12 col-md-6 col-lg-4"><span class="fw-bold d-block">Hotline:</span><a class="d-block" href="tel:+61420605188">- AU: (+61) 420 605 188</a><a class="d-block" href="tel:+84564472669">- VN: (+84)564472669</a></p><p class="contact-content__item col-12 col-md-6 col-lg-4"><span class="fw-bold d-block">Email:</span><a href="mailto:info.vietuc@aussiegr.co">info.vietuc@aussiegr.co</a></p><p class="contact-content__item col-12 col-md-6 col-lg-4"><span class="fw-bold d-block">Social network</span><span class="d-flex gap-2"><a class="fs-20" href="#"><i class="icon-instagram"></i></a><a class="fs-20" href="#"><i class="icon-facebook"></i></a></span></p></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contact.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {
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
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["custom-select", { "default": $options.selectedOption }],
    tabindex: $props.tabindex
  }, _attrs))} data-v-edfad808><div class="${ssrRenderClass([{ open: $data.open }, "selected"])}" data-v-edfad808>${ssrInterpolate($data.selected)}</div><div class="${ssrRenderClass([{ selectHide: !$data.open }, "items"])}" data-v-edfad808><!--[-->`);
  ssrRenderList($props.options, (option, i) => {
    _push(`<div class="${ssrRenderClass({ "text-white": $data.selected === option })}" data-v-edfad808>${ssrInterpolate(option)}</div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/custom-select.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-edfad808"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-md-none" }, _attrs))}><p class="contact-content__item"><span class="fw-bold d-block">Address:</span> - AU: Shop 645/ 303-307 Castlereagh St, Haymarket NSW 2000 <br> - VN: 107 Cu Lao, Ward 2, Phu Nhuan Ddst, HCMC, VietNam </p><div class="d-flex flex-wrap justify-content-between"><p class="contact-content__item col-6"><span class="fw-bold d-block">Email:</span><a href="mailto:info.vietuc@aussiegr.co">info.vietuc@aussiegr.co</a></p><p class="contact-content__item col-6"><span class="fw-bold d-block">Social network</span><span class="d-flex gap-2"><a class="fs-20" href="#"><i class="icon-instagram"></i></a><a class="fs-20" href="#"><i class="icon-facebook"></i></a></span></p><p class="contact-content__item col-12 col-md-6 col-lg-4"><span class="fw-bold d-block">Hotline:</span><a class="d-inline-block" href="tel:+61420605188">AU: (+61) 420 605 188</a> | <a class="d-inline-block" href="tel:+84564472669">VN: (+84)564472669</a></p></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contact-mobile.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    const form = reactive({
      fullName: "",
      email: "",
      company: "",
      message: "",
      target: ""
    });
    const rules = computed(() => {
      return {
        fullName: { required: helpers.withMessage("Please input Full name", required) },
        email: {
          required: helpers.withMessage("Please input email", required),
          email: helpers.withMessage("Please input valid email", email)
        },
        company: { required: helpers.withMessage("Please input compay name", required) },
        message: { required: helpers.withMessage("Please input message", required) },
        target: {
          required: helpers.withMessage("Please select enquiry purpose", required),
          notSameAs: helpers.withMessage("Please select enquiry purpose", not(sameAs("Enquiry purpose")))
        }
      };
    });
    const v$ = useVuelidate(rules, form);
    function checkInput($event) {
      form.target = $event;
      v$.value.target.$model = $event;
      v$.value.target.$touch();
      console.log(form.target);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Mascot = __nuxt_component_0;
      const _component_Contact = __nuxt_component_1;
      const _component_CustomSelect = __nuxt_component_2;
      const _component_contact_mobile = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "row contact" }, _attrs))}><div class="col-12 col-md-6"><div class="contact-header mt-0 mt-md-5"><h1 class="contact-header__title text-uppercase"> Thanks for VIsItIng </h1><p class="contact-header__description text-uppercase"> Become a companIon wIth us </p></div><div class="col-12 col-md-6 d-md-none d-block"><div class="position-relative">`);
      _push(ssrRenderComponent(_component_Mascot, { class: "position-absolute top-0 d-lg-inline-block" }, null, _parent));
      _push(`<img class="mw-100"${ssrRenderAttr("src", _imports_0)} alt="" srcset=""></div></div><div class="contact-content d-none d-md-block"><h2 class="contact-content__title">Contact Us</h2>`);
      _push(ssrRenderComponent(_component_Contact, null, null, _parent));
      _push(`</div><div class="contact-form"><h2 class="contact-form__title">BusIness Partner</h2><form class="gap-0 gap-md-4 d-flex flex-column"><div class="row"><div class="col-12 col-md-6"><div class="form-floating"><input type="text" id="floatingInput2"${ssrRenderAttr("value", form.fullName)} class="${ssrRenderClass([{ "is-invalid": unref(v$).fullName.$error }, "form-control bg-transparent"])}" placeholder="name@example.com"><label for="floatingInput2">Full name</label></div>`);
      if (unref(v$).fullName.$error) {
        _push(`<span class="error">${ssrInterpolate(unref(v$).fullName.$errors[0].$message)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="col-12 col-md-6"><div class="form-floating"><input type="email" id="floatingInput"${ssrRenderAttr("value", form.email)} class="${ssrRenderClass([{ "is-invalid": unref(v$).email.$error }, "form-control bg-transparent"])}" placeholder="name@example.com"><label for="floatingInput">Email address</label></div>`);
      if (unref(v$).email.$error) {
        _push(`<span class="error">${ssrInterpolate(unref(v$).email.$errors[0].$message)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="row"><div class="col-12 col-md-6"><div class="form-floating"><input type="text" id="floatingPassword"${ssrRenderAttr("value", form.company)} class="${ssrRenderClass([{ "is-invalid": unref(v$).company.$error }, "form-control bg-transparent"])}" placeholder="Password"><label for="floatingPassword">Your company</label></div>`);
      if (unref(v$).company.$error) {
        _push(`<span class="error">${ssrInterpolate(unref(v$).company.$errors[0].$message)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="col-12 col-md-6">`);
      _push(ssrRenderComponent(_component_CustomSelect, {
        class: [{ "is-invalid": unref(v$).target.$error }, "select"],
        options: ["Whole sale", "Distribution", "Others"],
        default: "Enquiry purpose",
        onInput: ($event) => checkInput($event)
      }, null, _parent));
      if (unref(v$).target.$error) {
        _push(`<span class="error">${ssrInterpolate(unref(v$).target.$errors[0].$message)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="row"><div class="col-12"><div class="form-floating"><textarea placeholder="Leave a comment here" class="${ssrRenderClass([{ "is-invalid": unref(v$).message.$error }, "form-control bg-transparent"])}" id="floatingTextarea2">${ssrInterpolate(form.message)}</textarea><label for="floatingTextarea2">Message</label></div>`);
      if (unref(v$).message.$error) {
        _push(`<span class="error">${ssrInterpolate(unref(v$).message.$errors[0].$message)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="text-center text-md-start mb-0 mb-md-5"><button type="submit" class="btn contact-form__btn">SEND</button></div></form></div></div><div class="col-12 d-md-none text-center bg-dark__theme pb-3"><a href="#"><img class="mascot-border"${ssrRenderAttr("src", _imports_0$1)} alt="" srcset=""></a><p class="d-block d-md-none copyright">A product by Viet Uc Food &amp; Co</p></div><div class="col-12 col-md-6"><div class="position-relative d-none d-md-block">`);
      _push(ssrRenderComponent(_component_Mascot, { class: "position-absolute top-0" }, null, _parent));
      _push(`<img class="mw-100"${ssrRenderAttr("src", _imports_0)} alt="" srcset=""></div></div>`);
      _push(ssrRenderComponent(_component_contact_mobile, { class: "bg-dark__theme" }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=contact-CK2gIzuZ.js.map
