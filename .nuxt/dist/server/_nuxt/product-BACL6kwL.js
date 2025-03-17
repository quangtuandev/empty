import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
const papavietBrochure2909Images0 = "" + __buildAssetsURL("papaviet-brochure-2909-images-0.C-xNv9_u.jpg");
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: papavietBrochure2909Images0
}, Symbol.toStringTag, { value: "Module" }));
const papavietBrochure2909Images1 = "" + __buildAssetsURL("papaviet-brochure-2909-images-1.dQj_rWwW.jpg");
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: papavietBrochure2909Images1
}, Symbol.toStringTag, { value: "Module" }));
const papavietBrochure2909Images2 = "" + __buildAssetsURL("papaviet-brochure-2909-images-2.B2aREcxi.jpg");
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: papavietBrochure2909Images2
}, Symbol.toStringTag, { value: "Module" }));
const papavietBrochure2909Images3 = "" + __buildAssetsURL("papaviet-brochure-2909-images-3.DEaR-VV0.jpg");
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: papavietBrochure2909Images3
}, Symbol.toStringTag, { value: "Module" }));
const papavietBrochure2909Images4 = "" + __buildAssetsURL("papaviet-brochure-2909-images-4.FZAKWTD4.jpg");
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: papavietBrochure2909Images4
}, Symbol.toStringTag, { value: "Module" }));
const papavietBrochure2909Images5 = "" + __buildAssetsURL("papaviet-brochure-2909-images-5.AMJSpSMX.jpg");
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: papavietBrochure2909Images5
}, Symbol.toStringTag, { value: "Module" }));
const papavietBrochure2909Images6 = "" + __buildAssetsURL("papaviet-brochure-2909-images-6.fzHzJnVB.jpg");
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: papavietBrochure2909Images6
}, Symbol.toStringTag, { value: "Module" }));
const papavietBrochure2909Images7 = "" + __buildAssetsURL("papaviet-brochure-2909-images-7.jPzKPypo.jpg");
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: papavietBrochure2909Images7
}, Symbol.toStringTag, { value: "Module" }));
const papavietBrochure2909Images8 = "" + __buildAssetsURL("papaviet-brochure-2909-images-8.DVQIJ7Ed.jpg");
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: papavietBrochure2909Images8
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = {
  __name: "product",
  __ssrInlineRender: true,
  setup(__props) {
    const productImages = Object.values(/* @__PURE__ */ Object.assign({ "/assets/images/products/papaviet-brochure-2909-images-0.jpg": __vite_glob_0_0, "/assets/images/products/papaviet-brochure-2909-images-1.jpg": __vite_glob_0_1, "/assets/images/products/papaviet-brochure-2909-images-2.jpg": __vite_glob_0_2, "/assets/images/products/papaviet-brochure-2909-images-3.jpg": __vite_glob_0_3, "/assets/images/products/papaviet-brochure-2909-images-4.jpg": __vite_glob_0_4, "/assets/images/products/papaviet-brochure-2909-images-5.jpg": __vite_glob_0_5, "/assets/images/products/papaviet-brochure-2909-images-6.jpg": __vite_glob_0_6, "/assets/images/products/papaviet-brochure-2909-images-7.jpg": __vite_glob_0_7, "/assets/images/products/papaviet-brochure-2909-images-8.jpg": __vite_glob_0_8 })).map((module) => module.default);
    const selectedImage = ref(null);
    const currentIndex = ref(0);
    ref(0);
    ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "product" }, _attrs))}><div class="container"><div class="row"><div class="col-12"><div class="row g-4"><!--[-->`);
      ssrRenderList(unref(productImages), (image, index) => {
        _push(`<div class="col-12"><div class="product__item"><div class="product__image-wrapper"><img${ssrRenderAttr("src", image)}${ssrRenderAttr("alt", "Product " + (index + 1))}></div></div></div>`);
      });
      _push(`<!--]--></div></div></div></div><div class="row my-4"><div class="col-12 text-center"><a href="/download/catalog.pdf" class="btn contact-form__btn" download> DOWNLOAD CATALOG </a></div></div><div class="${ssrRenderClass([{ "show": unref(selectedImage) }, "modal"])}"><div class="modal__content">`);
      if (unref(selectedImage)) {
        _push(`<img${ssrRenderAttr("src", unref(selectedImage))} class="modal__image">`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="modal__close">×</button><button class="modal__nav modal__nav--prev" style="${ssrRenderStyle(unref(currentIndex) > 0 ? null : { display: "none" })}">&lt;</button><button class="modal__nav modal__nav--next" style="${ssrRenderStyle(unref(currentIndex) < unref(productImages).length - 1 ? null : { display: "none" })}">&gt;</button></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/product.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=product-BACL6kwL.js.map
