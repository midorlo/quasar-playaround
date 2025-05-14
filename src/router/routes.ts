//router/routes.ts

import type { RouteRecordRaw } from 'vue-router';
import generatedRoutes from 'src/router/generated-routes';
import HomePage from 'pages/HomePage.vue';
import ErrorNotFound from 'pages/ErrorNotFound.vue';
import MainLayout from 'layouts/MainLayout.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        name: 'home',
        path: '',
        component: HomePage,
        children: [],
      },
    ],
  },
  ...generatedRoutes,
  {
    path: '/:catchAll(.*)*',
    name: 'error-404',
    component: ErrorNotFound,
  },
];

export default routes;
