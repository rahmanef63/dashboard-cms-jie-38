import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { sidebarData } from '@/data/sidebar';

interface NavigationStore {
  activeRole: string;
  setActiveRole: (role: string) => void;
  getMenuForRole: () => any[];
  canAccessRoute: (path: string) => boolean;
}

export const useNavigation = create<NavigationStore>()(
  persist(
    (set, get) => ({
      activeRole: 'construction',
      setActiveRole: (role) => set({ activeRole: role }),
      getMenuForRole: () => {
        const { activeRole } = get();
        return sidebarData.roleMenus?.[activeRole] || [];
      },
      canAccessRoute: (path: string) => {
        const { activeRole } = get();
        const menuItems = sidebarData.roleMenus?.[activeRole] || [];
        
        // Common routes are always accessible
        const commonRoutes = ['/dashboard', '/profile', '/notifications', '/settings', '/'];
        if (commonRoutes.includes(path)) {
          return true;
        }

        // Check if the current path matches any of the role's menu items
        return menuItems.some(section => 
          section.items.some(item =>
            item.subItems.some(subItem => 
              path.startsWith(subItem.href.substring(1))
            )
          )
        );
      },
    }),
    {
      name: 'navigation-storage',
    }
  )
);