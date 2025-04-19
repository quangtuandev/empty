import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import _imports_0 from "../../../public/assets/pages/home/papaviet/fssc.svg.mjs";
import _imports_1 from "../../../public/assets/pages/home/papaviet/banner.png.mjs";
import _export_sfc from "../../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "papaviet",
  __ssrInlineRender: true,
  setup(__props) {
    const logos = [
      {
        src: "/assets/pages/home/papaviet/logo-01.png"
      },
      {
        src: "/assets/pages/home/papaviet/logo-02.png"
      },
      {
        src: "/assets/pages/home/papaviet/logo-03.png"
      },
      {
        src: "/assets/pages/home/papaviet/logo-04.png"
      },
      {
        src: "/assets/pages/home/papaviet/logo-05.png"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "sc-papaviet",
        "data-aos": "fade-up"
      }, _attrs))} data-v-49e45a6d><div class="container" data-v-49e45a6d><div class="box" data-v-49e45a6d><div class="box__left" data-v-49e45a6d><div class="sc-header" data-v-49e45a6d><h2 class="sc-header__title" data-v-49e45a6d>PHỞ <br class="d-none d-xl-block" data-v-49e45a6d>PAPA VIET</h2><div class="sc-header__sub mb-0" data-v-49e45a6d>FROM VIETNAM TO YOUR TABLE, READY IN MINUTES </div></div></div><div class="box__right" data-v-49e45a6d><div class="right__item" data-v-49e45a6d><p data-v-49e45a6d>CertIfIcate:</p><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-49e45a6d></div><div class="right__item" data-v-49e45a6d><p data-v-49e45a6d>CLAIM LOGO:</p><div class="box__logos" data-v-49e45a6d><!--[-->`);
      ssrRenderList(logos, (logo) => {
        _push(`<img${ssrRenderAttr("src", logo.src)} alt="" data-v-49e45a6d>`);
      });
      _push(`<!--]--></div></div></div><div class="box__thumb d-xl-none" data-v-49e45a6d><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-49e45a6d></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/home/papaviet.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-49e45a6d"]]);
export {
  __nuxt_component_4 as default
};
//# sourceMappingURL=papaviet.vue.mjs.map
