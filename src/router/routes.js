const routes = [
  {
    path: "/",
    name: "login",
    component: () => import("pages/LoginPage.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("pages/ReqisterPage.vue"),
  },
  ,
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      // { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "/menu",
        name: "menu",
        component: () => import("pages/MenuPage.vue"),
      },
      {
        path: "/menu-management",
        name: "menuManagement",
        component: () => import("../pages/MenuManagement.vue"),
      },
      {
        path: "/cart",
        name: "cart",
        component: () => import("../pages/CartPage.vue"),
      },
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("../pages/DashboardPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
