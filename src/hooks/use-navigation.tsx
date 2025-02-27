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
      setActiveRole: (role) => {
        set({ activeRole: role });
      },
      getMenuForRole: () => {
        const { activeRole } = get();
        return sidebarData.roleMenus?.[activeRole] || [];
      },
      canAccessRoute: (path: string) => {
        const { activeRole } = get();
        const menuItems = sidebarData.roleMenus?.[activeRole] || [];
        
        // Common routes are always accessible
        const commonRoutes = ['dashboard', 'profile', 'notifications', 'settings'];
        const pathParts = path.split('/').filter(Boolean);
        
        // Handle root path
        if (path === '/') return true;
        
        // If no role in path, allow access to root
        if (pathParts.length === 0) return true;
        
        // If the path starts with a role, check if it matches the active role
        if (pathParts[0] !== activeRole) return false;
        
        // If it's just the role path (e.g., /designer), allow it
        if (pathParts.length === 1) return true;
        
        // Check if it's a common route
        if (commonRoutes.includes(pathParts[1])) return true;
        
        // Check if the route exists in the role's menu items
        return menuItems.some(section => 
          section.items.some(item =>
            item.subItems.some(subItem => {
              const subItemPath = subItem.href.startsWith('/') 
                ? subItem.href.slice(1) 
                : subItem.href;
              return pathParts.join('/') === subItemPath;
            })
          )
        );
      },
    }),
    {
      name: 'navigation-storage',
    }
  )
);