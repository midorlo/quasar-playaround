// data/navigationData.ts

import type { NavigationGroup } from 'src/types/navigationTypes';

//import routes from 'src/router/routes';

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
        routeName: 'demo-roles-page',
        routePath: '/demo/roles'
      },
      {
        id: 1002,
        title: 'Q-Item Demo',
        icon: 'home',
        routeName: 'demo-q-items-page',
        routePath: '/demo/q-items'
      },
      {
        id: 1003,
        title: 'Q-Icons Demo',
        icon: 'home',
        routeName: 'demo-q-icons-page',
        routePath: '/demo/q-icons'
      }
    ],
  }
];
