import type { Role } from 'src/types/authTypes';

/**
 * Represents a single menu item in the application.
 */
export interface NavigationMenuItem {

  /** Unique identifier for the menu item. */
  id: number;
  /** Identifier of the menu this item belongs to. No value means its at root level */
  menuId?: number;
  /** Position of the menu item in the menu list. */
  position: number;

  /** Display title of the menu item. */
  title: string;
  /** Optional caption providing additional information about the menu item. */
  caption?: string;
  /** Optional icon associated with the menu item. */
  icon?: string;

  /** Name of the route associated with the menu item. */
  routeName: string;
  /** Indicates whether the menu item is enabled. */
  enabled: boolean;
  /** Roles whitelist.  */
  rolesAllowed?: Role[];
  /** Roles blacklist */
  rolesDenied?: Role[];
}

/**
 * Represents a menu in the application.
 */
export interface NavigationMenu {
  /** Unique identifier for the menu. */
  id: number;
  /** Display title of the menu. */
  title: string;
  /** Optional caption providing additional information about the menu. */
  caption?: string;
  /** Optional icon associated with the menu. */
  icon?: string;
  /** Identifier of the menu this menu belongs to. No value means its at root level */
  parentMenuId?: number;
  /** Position of the menu in the menu list. */
  position: number;
  /** List of menu items associated with this menu. */
  menuItems: NavigationMenuItem[];
  /** List of roles allowed to access this menu. */
  rolesAllowed?: Role[];
  /** List of roles denied access to this menu. */
  rolesDenied?: Role[];
  /** Indicates whether the menu is enabled. */
  enabled: boolean;
}

export interface EssentialLinkProps {
  title: string;
  caption?: string;
  icon?: string;
  link?: string;
}
