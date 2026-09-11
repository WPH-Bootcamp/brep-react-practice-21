import { useThemeStore } from '../../stores/themeStore';

function Switcher() {
  const theme = useThemeStore((state) => state.theme);

  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  return (
    <section>
      <h2>Theme : {theme}</h2>

      <button onClick={toggleTheme}>
        Switch Theme to {theme === 'light' ? 'dark' : 'light'}
      </button>
    </section>
  );
}

export default Switcher;
