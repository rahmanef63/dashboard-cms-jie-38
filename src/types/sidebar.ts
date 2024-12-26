import { LucideIcon } from 'lucide-react';

export interface User {
  name: string;
  email: string;
  avatar: string;
  role: string;
  plan?: string; // Added plan as optional property
}

export interface Team {
  name: string;
  logo: LucideIcon;
  plan: string;
}

export interface MenuItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface MenuGroup {
  label: string;
  icon: LucideIcon;
  subItems: MenuItem[];
}

export interface MenuSection {
  title: string;
  items: MenuGroup[];
}

export interface SidebarData {
  user: User;
  teams: Team[];
  roleMenus: {
    [key: string]: MenuSection[];
  };
  availableRoles: string[];
}