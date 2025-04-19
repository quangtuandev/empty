import { defineAsyncComponent } from "vue";
const layouts = {
  default: defineAsyncComponent(() => import("../layouts/default.vue.mjs").then((m) => m.default || m))
};
export {
  layouts as default
};
//# sourceMappingURL=virtual_nuxt__Users_macos_working_duanyu_papa_.nuxt_layouts.mjs.map
