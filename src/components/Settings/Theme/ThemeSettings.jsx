import { useEffect, useState } from 'react';

const Theme = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'system');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const applyTheme = (theme) => {
      const htmlElement = document.documentElement;
      if (theme === 'dark') {
        htmlElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else if (theme === 'light') {
        htmlElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      } else {
        localStorage.removeItem('theme');
        const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        systemDark ? htmlElement.classList.add('dark') : htmlElement.classList.remove('dark');
      }
    };

    applyTheme(theme);

    const systemDarkMedia = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e) => {
      if (theme === 'system') applyTheme('system');
    };

    systemDarkMedia.addEventListener('change', handleSystemThemeChange);
    return () => systemDarkMedia.removeEventListener('change', handleSystemThemeChange);
  }, [theme, mounted]);

  if (!mounted) return null;

  return (
    <div className="w-full flex flex-col items-center gap-4 p-4 bg-gray-200 rounded-2xl dark:bg-gray-800 mx-4 sm:mx-0">
      <span className="text-lg font-semibold text-gray-700 dark:text-gray-200">
        Choisir le thème
      </span>
      
      <div className="flex gap-2 flex-wrap justify-center">
        {[
          { value: 'light', icon: SunIcon, label: 'Clair' },
          { value: 'dark', icon: MoonIcon, label: 'Sombre' },
          { value: 'system', icon: SystemIcon, label: 'Système' },
        ].map(({ value, icon: Icon, label }) => (
          <button
            key={value}
            onClick={() => setTheme(value)}
            className={`flex flex-col items-center p-4 w-28 rounded-xl transition-all
              ${theme === value 
                ? 'bg-white text-blue-600 shadow-lg dark:bg-gray-700 dark:text-blue-400'
                : 'bg-gray-50/50 hover:bg-gray-50 text-gray-500 hover:text-gray-400 dark:bg-gray-900/50 dark:hover:bg-gray-700 dark:text-gray-400'}
            `}
          >
            <Icon className={`w-8 h-8 mb-2 ${theme === value ? 'text-blue-500' : 'text-current'}`} />
            <span className="text-sm font-medium">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

const SunIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
  </svg>
);

const MoonIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

const SystemIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export default Theme;