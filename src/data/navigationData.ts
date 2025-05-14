// data/navigationData.ts

import type { NavigationGroup } from 'src/types/navigationTypes';

export const navigationGroups: NavigationGroup[] = [
  {
    id: 100,
    title: 'Main Sections',
    icon : 'home',
    pages: [
      {
        id: 1000,
        title: 'Home',
        icon: 'home',
        routeName: 'index',
        routePath: 'index'
      }
    ],
  },
  {
    id: 101,
    title: 'Demos',
    icon : 'home',
    pages: [
      {
        id: 1001,
        title: 'Roles Demo',
        icon: 'home',
        routeName: 'demo-roles-demo-page',
        routePath: '/demo/demo-roles-demo'
      },
      {
        id: 1002,
        title: 'Q-Item Demo',
        icon: 'home',
        routeName: 'demo-q-item-demo-page',
        routePath: '/demo/q-item-demo'
      },
      {
        id: 1003,
        title: 'Q-Icons Demo',
        icon: 'home',
        routeName: 'demo-q-icons-demo-page',
        routePath: '/demo/q-icons-demo'
      }
    ],
  }
];
