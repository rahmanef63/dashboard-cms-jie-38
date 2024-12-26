import { create } from 'zustand';

interface ThemeStore {
  theme: string;
  setTheme: (theme: string) => void;
}

export const useTheme = create<ThemeStore>((set) => ({
  theme: document.documentElement.classList.contains('dark') ? 'dark' : 'light',
  setTheme: (theme) => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    set({ theme });
  },
}));