import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import _imports_0 from "../../../assets/images/icon-beef-arrow.svg.mjs";
import _imports_1 from "../../../public/assets/pages/home/beef/banner.png.mjs";
import _imports_2 from "../../../public/assets/pages/home/beef/banner-mb.png.mjs";
import _imports_3 from "../../../public/assets/pages/icon-cirlce-right.svg.mjs";
import _export_sfc from "../../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "beef",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      {
        image: "/assets/pages/home/beef/item-01.png",
        title: "Phở spices"
      },
      {
        image: "/assets/pages/home/beef/item-02.png",
        title: "Australian beef"
      },
      {
        image: "/assets/pages/home/beef/item-03.png",
        title: "Beef bone"
      },
      {
        image: "/assets/pages/home/beef/item-04.png",
        title: "Phở"
      },
      {
        image: "/assets/pages/home/beef/item-05.png",
        title: "Herbs"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "sc-beef" }, _attrs))} data-v-02286df6><div class="container" data-v-02286df6><div class="content" data-v-02286df6><div class="content__right order-xl-2" data-aos="fade-left" data-v-02286df6><div class="sc-header" data-v-02286df6><div class="sc-header__sub" data-v-02286df6>PAPA VIET’s Product</div><h2 class="sc-header__title" data-v-02286df6>VIETNAMESE <br class="d-xl-none" data-v-02286df6>BEEF PHỞ</h2><div class="sc-header__excerpt" data-v-02286df6> Papa Việt select premium Australian beef, locally sourced traditional spices, and rice noodles made from Vietnamese-grown rice and traditional spices that capture the essence of a freshly prepared bowl of Phở. </div></div><div class="box d-none d-xl-flex" data-aos="fade-up" data-v-02286df6><!--[-->`);
      ssrRenderList(items, (item, index) => {
        _push(`<div class="item" data-v-02286df6><div class="item__header" data-v-02286df6><div class="item__thumb mx-auto" data-v-02286df6><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.title)} data-v-02286df6></div><div class="item__title" data-v-02286df6>${ssrInterpolate(item.title)}</div></div></div>`);
      });
      _push(`<!--]--><a href="#" class="box__link" data-v-02286df6><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-02286df6></a></div></div><div class="content__thumb" data-aos="fade-right" data-v-02286df6><picture data-v-02286df6><source media="(min-width: 1200px)"${ssrRenderAttr("srcset", _imports_1)} data-v-02286df6><img${ssrRenderAttr("src", _imports_2)} alt="" data-v-02286df6></picture></div><div class="beef__buttons d-xl-none" data-v-02286df6><button type="button" class="btn btn-primary" data-v-02286df6> Buy Now </button><a href="#" class="btn btn-primary-outline" data-v-02286df6><img${ssrRenderAttr("src", _imports_3)} alt="" data-v-02286df6><span data-v-02286df6>Chi tiết </span></a></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/home/beef.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-02286df6"]]);
export {
  __nuxt_component_3 as default
};
//# sourceMappingURL=beef.vue.mjs.map
