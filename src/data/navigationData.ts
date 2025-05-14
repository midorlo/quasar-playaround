// data/navigationData.ts

import type { NavigationMenuItem } from 'src/types/navigationTypes';
import type { RouteRecordRaw } from 'vue-router';

const miHome: NavigationMenuItem = {
  id: 1000,
  title: 'Home',
  icon: 'home',
  position: 1,
  enabled: true,
  route: {
    id: 1000,
    name: 'home',
    path: '/',
    component: 'IndexPage.vue',
    lazyLoadComponent: true,
  }
};

const miRolesDemo: NavigationMenuItem = {
  id: 3001,
  title: 'Roles Demo',
  icon: 'home',
  position: 1,
  enabled: true,
  route: {
    id: 3001,
    name: 'roles-demo',
    path: 'roles',
    component: '/defaults/DefaultRolesPage.vue',
    lazyLoadComponent: false,
  }
};

const miIconsDemo: NavigationMenuItem = {
  id: 3002,
  title: 'Icons Demo',
  icon: 'home',
  position: 2,
  enabled: true,
  route: {
    id: 3001,
    name: 'icons-demo',
    path: 'icons',
    component: 'IconsDemoPage.vue',
    lazyLoadComponent: false,
  }
};

const miQItemDemo: NavigationMenuItem = {
  id: 3002,
  title: 'Q-Item Demo',
  icon: 'home',
  position: 2,
  enabled: true,
  route: {
    id: 3002,
    name: 'q-item-demo',
    path: 'qitem',
    component: 'pages/defaults/QItemPage.vue',
    lazyLoadComponent: false,
  }
};

export const navigationMenuItemsData: NavigationMenuItem[] = [
  miHome,
  miRolesDemo,
  miQItemDemo,
  miIconsDemo
];

export function generateRoutesFromMenuItems(): RouteRecordRaw[] {
  return navigationMenuItemsData
    .filter(item => item.enabled)
    .map(item => {
      const path = item.route.path;
      const routeName = item.route.name;
      const componentPath = `../pages/${item.route.component}`;
      const component = () => import(/* @vite-ignore */componentPath);
      return {
        name: routeName,
        path: path,
        component: component,
      };
    });
}
