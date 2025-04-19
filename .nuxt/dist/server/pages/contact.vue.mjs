import __nuxt_component_0 from "../components/mascot.vue.mjs";
import __nuxt_component_1 from "../components/contact.vue.mjs";
import __nuxt_component_2 from "../components/custom-select.vue.mjs";
import __nuxt_component_3 from "../components/contact-mobile.vue.mjs";
import { reactive, computed, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
import _imports_0 from "../assets/images/product.png.mjs";
import _imports_0$1 from "../assets/images/logo.svg.mjs";
import { useVuelidate } from "@vuelidate/core";
import { helpers, not, sameAs, required, email } from "@vuelidate/validators";
/* empty css              */
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
    const isLoading = ref(false);
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
      _push(`</div></div><div class="text-center text-md-start mb-0 mb-md-5"><button type="submit" class="btn contact-form__btn"${ssrIncludeBooleanAttr(isLoading.value) ? " disabled" : ""}>${ssrInterpolate(isLoading.value ? "SENDING..." : "SEND")}</button></div></form></div></div><div class="col-12 d-md-none text-center bg-dark__theme pb-3"><a href="#"><img class="mascot-border"${ssrRenderAttr("src", _imports_0$1)} alt="" srcset=""></a><p class="d-block d-md-none copyright">A product by Viet Uc Food &amp; Co</p></div><div class="col-12 col-md-6"><div class="position-relative d-none d-md-block">`);
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
//# sourceMappingURL=contact.vue.mjs.map
