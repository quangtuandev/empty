import { computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import _imports_0 from "../../../public/assets/pages/home/quality/banner.png.mjs";
import _export_sfc from "../../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "quality",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      {
        image: "/assets/pages/home/quality/item-01.png",
        title: "Farm-to-Table PhIlosophy",
        content: "Papa Việt believes in a farm-to-table philosophy, using using high-quality, locally sourced ingredients to offer natural, preservative-free ingredients. Every bowl of Papa Việt’s Phở is as healthy as it is delicious."
      },
      {
        image: "/assets/pages/home/quality/item-03.png",
        title: "Natural IngredIents",
        content: "Papa Việt select premium Australian beef, locally sourced traditional spices, and rice noodles made from Vietnamese-grown rice and traditional spices that capture the essence of a freshly prepared bowl of Phở."
      },
      {
        image: "/assets/pages/home/quality/item-02.png",
        title: "Advanced Freeze-DryIng",
        content: "Freeze-drying technology plays a key role in maintaining the integrity of our product. By freezing and removing moisture under vacuum, we lock in the rich flavors and nutrients while extending shelf life without artificial preservatives."
      },
      {
        image: "/assets/pages/home/quality/item-04.png",
        title: "Enhanced Safety",
        content: "Production process adheres to strict safety and quality standards, ensuring that each package meets the highest hygiene and quality benchmarks."
      }
    ];
    const firstTwoItems = computed(() => items.slice(0, 2));
    const lastTwoItems = computed(() => items.slice(-2));
    computed(() => items);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "sc-quality" }, _attrs))} data-v-983a100a><div class="container" data-v-983a100a><div class="sc-header text-center" data-aos="fade-up" data-v-983a100a><h2 class="sc-header__title" data-v-983a100a>QUALITY AND SAFETY</h2><div class="sc-header__sub" data-v-983a100a>BRINGING THE AUTHENTIC FLAVORS OF VIETNAM INTO EVERY HOME</div></div><div class="position-relative" data-aos="fade-up" data-v-983a100a><div class="boxs" data-v-983a100a><div class="boxs__item" data-v-983a100a><!--[-->`);
      ssrRenderList(unref(firstTwoItems), (item, index) => {
        _push(`<div class="item text-xl-end" data-v-983a100a><div class="item__header" data-v-983a100a><div class="item__thumb" data-v-983a100a><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.title)} data-v-983a100a></div><h3 class="item__title" data-v-983a100a>${ssrInterpolate(item.title)}</h3></div><div class="item__content" data-v-983a100a>${ssrInterpolate(item.content)}</div></div>`);
      });
      _push(`<!--]--></div><div class="boxs__banner d-none d-xl-block" data-v-983a100a><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-983a100a></div><div class="boxs__item" data-v-983a100a><!--[-->`);
      ssrRenderList(unref(lastTwoItems), (item, index) => {
        _push(`<div class="item" data-v-983a100a><div class="item__header" data-v-983a100a><div class="item__thumb" data-v-983a100a><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.title)} data-v-983a100a></div><h3 class="item__title" data-v-983a100a>${ssrInterpolate(item.title)}</h3></div><div class="item__content" data-v-983a100a>${ssrInterpolate(item.content)}</div></div>`);
      });
      _push(`<!--]--></div></div><div class="boxs__banner d-xl-none" data-v-983a100a><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-983a100a></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/home/quality.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-983a100a"]]);
export {
  __nuxt_component_2 as default
};
//# sourceMappingURL=quality.vue.mjs.map
