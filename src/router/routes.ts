import type { RouteRecordRaw } from 'vue-router';

const defaultsRoutes: RouteRecordRaw[] = [
  {
    path: '/defaults',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'roles', component: () => import('pages/defaults/DefaultRolesPage.vue') },
    ],
  },
];

const topLevelRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
];

const fallbackRoutes: RouteRecordRaw[] = [
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

const routes: RouteRecordRaw[] = [...defaultsRoutes, ...topLevelRoutes, ...fallbackRoutes];

export default routes;
