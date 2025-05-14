//router/routes.ts

import type { RouteRecordRaw } from 'vue-router';
import generatedRoutes from 'src/router/generated-routes';
import IndexPage from 'pages/IndexPage.vue';


const defaultRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: IndexPage,
        children: []
      },
    ]
  },
];

const fallbackRoutes: RouteRecordRaw[] = [
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

// Kombinierte Routen
const routes: RouteRecordRaw[] = [
  ...defaultRoutes,
  ...generatedRoutes,
  ...fallbackRoutes,
];

export default routes;
