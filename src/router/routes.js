
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
				name: "index",
				path: "",
				component: () => import("pages/IndexPage.vue"),
				components: {
					main: () => import("pages/IndexPage.vue"),
				},
			},
			{
				name: "Page1",
				path: "page1",
				components: {
					main: () => import("pages/Page1/main.vue"),
					sidebar: () => import("pages/Page1/sidebar.vue"),
					ribbon: () => import("pages/Page1/ribbon.vue"),
				},
			},
			{
				name: "Page2",
				path: "page2",
				components: {
					main: () => import("pages/Page2/main.vue"),
					sidebar: () => import("pages/Page2/sidebar.vue"),
					ribbon: () => import("pages/Page2/ribbon.vue"),
				},
			},
			{
				name: "Page3",
				path: "page3",
				components: {
					main: () => import("pages/Page3/main.vue"),
					sidebar: () => import("pages/Page3/sidebar.vue"),
					ribbon: () => import("pages/Page3/ribbon.vue"),
				},
			},
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
