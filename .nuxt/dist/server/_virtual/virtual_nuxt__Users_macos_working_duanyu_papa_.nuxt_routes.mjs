import __nuxt_page_meta from "../pages/index.vue2.mjs";
function handleHotUpdate(_router, _generateRoutes) {
}
const _routes = [
  {
    name: "contact",
    path: "/contact",
    component: () => import("../pages/contact.vue.mjs")
  },
  {
    name: "index",
    path: "/",
    meta: __nuxt_page_meta || {},
    component: () => import("../pages/index.vue.mjs")
  },
  {
    name: "product",
    path: "/product",
    component: () => import("../pages/product.vue.mjs")
  }
];
export {
  _routes as default,
  handleHotUpdate
};
//# sourceMappingURL=virtual_nuxt__Users_macos_working_duanyu_papa_.nuxt_routes.mjs.map
