// src/types/navigationTypes.ts

export interface NavigationGroup {
  id: number;
  title: string;
  caption?: string;
  icon?: string;
  groups?: NavigationGroup[];
  pages: NavigationItem[];
}

export interface NavigationItem {
  id: number;
  title: string;
  caption?: string;
  icon?: string;
  routeName: string;
  routePath: string;
}
