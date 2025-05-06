import type { NavigationMenu,NavigationMenuItem } from 'src/types/navigationTypes';
import { keyRoles } from 'src/data/authData';

const miHome : NavigationMenuItem = {
  id: 1000,
  title: 'Home',
  icon: 'home',
  position: 1,
  routeName: 'home',
  enabled: true
}

const miUserHome : NavigationMenuItem = {
  id: 2000,
  title: 'User Home',
  icon: 'home',
  position: 1,
  routeName: 'home',
  rolesAllowed: [],
  rolesDenied: [
    keyRoles.Guest,
    keyRoles.Banned,
  ],
  enabled: true
}

const miRolesDemo : NavigationMenuItem = {
  id: 2000,
  title: 'Roles Demo',
  icon: 'settings',
  position: 1,
  routeName: '/defaults/roles',
  rolesAllowed: [],
  rolesDenied: [
    keyRoles.Guest,
    keyRoles.Banned,
  ],
  enabled: true
}
function createPlaceholder(idx: number): NavigationMenuItem {
  return  {
    id: idx,
    title: 'Roles Demo',
    icon: 'settings',
    position: 1,
    routeName: '/defaults/roles',
    rolesAllowed: [],
    rolesDenied: [
      keyRoles.Guest,
      keyRoles.Banned,
    ],
    enabled: true
  }
}

const mHome : NavigationMenu = {
  id: 100,
  title: 'Menu',
  caption: 'Overview of the application',
  enabled: true,
  icon: 'dashboard',
  position: 1,
  rolesDenied: [
    keyRoles.Banned,
  ],
  menuItems: [
    miHome
  ]
}

const mUserHome : NavigationMenu = {
  id: 200,
  title: 'User Menu',
  caption: 'Overview of the application',
  enabled: true,
  icon: 'dashboard',
  position: 1,
  rolesDenied: [
    keyRoles.Banned,
  ],
  menuItems: [
    miUserHome
  ]
}

export const navigationMenuData: NavigationMenu[] = [
  mHome,
  mUserHome
];
export const navigationMenuItemsData: NavigationMenuItem[] = [
  miHome,
  miRolesDemo,
  createPlaceholder(1),
  createPlaceholder(2),
  createPlaceholder(3),
  createPlaceholder(4),
  createPlaceholder(7),
  createPlaceholder(8),
];
