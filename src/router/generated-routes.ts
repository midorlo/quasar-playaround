// Diese Datei wird automatisch generiert. Änderungen gehen beim nächsten Build verloren.
import type { RouteRecordRaw } from 'vue-router';
import MainLayout from 'layouts/MainLayout.vue';

const generatedRoutes: RouteRecordRaw[] = [
{ path: '/', component: MainLayout, children: [
    { path: 'home', name: 'home-page', component: () => import('pages/HomePage.vue') },

] },

{ path: '/demo', component: MainLayout, children: [
    { path: 'q-icons', name: 'demo-q-icons-page', component: () => import('pages/demo/QIconsPage.vue') },

    { path: 'q-items', name: 'demo-q-items-page', component: () => import('pages/demo/QItemsPage.vue') },

    { path: 'roles', name: 'demo-roles-page', component: () => import('pages/demo/RolesPage.vue') },

] },

];

export default generatedRoutes;
