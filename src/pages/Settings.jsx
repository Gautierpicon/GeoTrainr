import { useEffect, useState } from 'react';

const Settings = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'system');

  // Applique le thème sélectionné
  useEffect(() => {
    const applyTheme = (theme) => {
      const htmlElement = document.documentElement;
      if (theme === 'dark') {
        htmlElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else if (theme === 'light') {
        htmlElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      } else {
        // Mode système
        localStorage.removeItem('theme');
        const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        systemDark
          ? htmlElement.classList.add('dark')
          : htmlElement.classList.remove('dark');
      }
    };

    applyTheme(theme);

    // Écoute les changements de préférence système (uniquement en mode système)
    const systemDarkMedia = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e) => {
      if (theme === 'system') {
        applyTheme('system');
      }
    };

    systemDarkMedia.addEventListener('change', handleSystemThemeChange);

    // Nettoyage
    return () => {
      systemDarkMedia.removeEventListener('change', handleSystemThemeChange);
    };
  }, [theme]);

  return (
    <div className='flex flex-col items-center p-4 min-h-screen bg-gray-100 dark:bg-gray-900'>
        <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className="px-4 py-2 border rounded-lg bg-white dark:bg-gray-800 dark:text-white"
        >
        <option value="light">Clair</option>
        <option value="dark">Sombre</option>
        <option value="system">Système</option>
        </select>
    </div>
  );
};

export default Settings;