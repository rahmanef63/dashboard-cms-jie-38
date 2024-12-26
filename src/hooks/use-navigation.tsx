import { create } from 'zustand';
import { sidebarData } from '@/data/sidebar';
import { persist } from 'zustand/middleware';

interface NavigationStore {
  activeRole: string;
  setActiveRole: (role: string) => void;
  getMenuForRole: () => any[];
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
    }),
    {
      name: 'navigation-storage',
    }
  )
);