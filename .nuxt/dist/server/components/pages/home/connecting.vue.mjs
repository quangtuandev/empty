import { reactive, computed, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
import _imports_0 from "../../../public/assets/pages/home/connecting/banner.png.mjs";
import { useVuelidate } from "@vuelidate/core";
import { helpers, required, email } from "@vuelidate/validators";
import _export_sfc from "../../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "connecting",
  __ssrInlineRender: true,
  setup(__props) {
    const form = reactive({
      email: "",
      phone: "",
      message: ""
    });
    const rules = computed(() => {
      return {
        email: {
          required: helpers.withMessage("Please input email", required),
          email: helpers.withMessage("Please input valid email", email)
        },
        phone: { required: helpers.withMessage("Please input phone", required) },
        message: { required: helpers.withMessage("Please input message", required) }
      };
    });
    const v$ = useVuelidate(rules, form);
    const isLoading = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "sc-connecting" }, _attrs))} data-v-6aae904e><div class="container" data-v-6aae904e><div class="row d-flex align-items-center" data-v-6aae904e><div class="col-xl-6" data-aos="fade-right" data-v-6aae904e><div class="sc-header" data-v-6aae904e><h2 class="sc-header__title" data-v-6aae904e>CONNECTING PARTNERS</h2><div class="sc-header__sub" data-v-6aae904e>Become a companIon wIth us </div><div class="sc-header__excerpt" data-v-6aae904e> Please send us feedback or ask about partnership opportunities. We are excited to explore the possibilities of collaboration. Furthermore, follow our social media to see our latest creative endeavors. </div></div><div class="contact-form" data-v-6aae904e><form class="gap-0 gap-md-3 d-flex flex-column" data-v-6aae904e><div class="row gx-3" data-v-6aae904e><div class="col-12 col-xl-6" data-v-6aae904e><div class="form-floating" data-v-6aae904e><input type="email" id="floatingInput2"${ssrRenderAttr("value", form.email)} class="${ssrRenderClass([{ "is-invalid": unref(v$).email.$error }, "form-control bg-transparent"])}" placeholder="name@example.com" data-v-6aae904e><label for="floatingInput2" data-v-6aae904e>Email</label></div>`);
      if (unref(v$).email.$error) {
        _push(`<span class="error" data-v-6aae904e>${ssrInterpolate(unref(v$).email.$errors[0].$message)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="col-12 col-xl-6" data-v-6aae904e><div class="form-floating" data-v-6aae904e><input type="tel" id="floatingInput"${ssrRenderAttr("value", form.phone)} class="${ssrRenderClass([{ "is-invalid": unref(v$).phone.$error }, "form-control bg-transparent"])}" placeholder="name@example.com" data-v-6aae904e><label for="floatingInput" data-v-6aae904e>Number Phone</label></div>`);
      if (unref(v$).phone.$error) {
        _push(`<span class="error" data-v-6aae904e>${ssrInterpolate(unref(v$).phone.$errors[0].$message)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="form-floating" data-v-6aae904e><textarea placeholder="Leave a comment here" class="${ssrRenderClass([{ "is-invalid": unref(v$).message.$error }, "form-control bg-transparent"])}" id="floatingTextarea2" data-v-6aae904e>${ssrInterpolate(form.message)}</textarea><label for="floatingTextarea2" data-v-6aae904e>Message</label></div>`);
      if (unref(v$).message.$error) {
        _push(`<span class="error" data-v-6aae904e>${ssrInterpolate(unref(v$).message.$errors[0].$message)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="" data-v-6aae904e><button type="submit" class="btn contact-form__btn mb-0"${ssrIncludeBooleanAttr(isLoading.value) ? " disabled" : ""} data-v-6aae904e>${ssrInterpolate(isLoading.value ? "SENDING..." : "SEND")}</button></div></form></div></div><div class="col-xl-6 d-none d-xl-block" data-aos="fade-left" data-v-6aae904e><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-6aae904e></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/home/connecting.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6aae904e"]]);
export {
  __nuxt_component_5 as default
};
//# sourceMappingURL=connecting.vue.mjs.map
