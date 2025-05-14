// Diese Datei wird automatisch generiert. Änderungen gehen beim nächsten Build verloren.
import type { RouteRecordRaw } from 'vue-router';
import MainLayout from 'layouts/MainLayout.vue';

const generatedRoutes: RouteRecordRaw[] = [
{ path: '/', component: () => MainLayout, children: [
    { path: 'index', name: 'index-page', component: () => import('pages/IndexPage.vue') },

] },

{ path: '/demo', component: () => MainLayout, children: [
    { path: 'q-icons-demo', name: 'demo-q-icons-demo-page', component: () => import('pages/demo/QIconsDemoPage.vue') },

    { path: 'q-item-demo', name: 'demo-q-item-demo-page', component: () => import('pages/demo/QItemDemoPage.vue') },

    { path: 'roles-demo', name: 'demo-roles-demo-page', component: () => import('pages/demo/RolesDemoPage.vue') },

] },

];

export default generatedRoutes;
