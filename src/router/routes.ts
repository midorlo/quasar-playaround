//router/routes.ts

import type { RouteRecordRaw } from 'vue-router';
import { generateRoutesFromMenuItems } from 'src/data/navigationData';


const generatedRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: generateRoutesFromMenuItems()
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
  ...generatedRoutes,
  ...fallbackRoutes,
];

export default routes;
