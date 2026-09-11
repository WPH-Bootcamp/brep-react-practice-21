import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Theme = 'light' | 'dark';

type ThemeStore = {
  theme: Theme;

  toggleTheme: () => void;
};

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: 'light',
      sidebarOpen: false,
      modalOpen: false,

      toggleTheme: () => {
        set((prevTheme) => ({
          theme: prevTheme.theme === 'light' ? 'dark' : 'light',
        }));
      },
    }),
    {
      name: 'theme-storage',
      partialize: (state) => ({
        theme: state.theme,
      }),
    }
  )
);
