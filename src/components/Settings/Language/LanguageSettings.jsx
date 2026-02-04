import { useEffect, useState } from 'react';
import i18n from '../../../i18n';

const LanguageSettings = () => {
  const [language, setLanguage] = useState(i18n.language || 'fr');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  if (!mounted) return null;

  return (
    <div className="mx-4 flex w-full flex-col items-center gap-4 rounded-2xl bg-gray-200 p-4 sm:mx-0 dark:bg-gray-800">
      <span className="text-lg font-semibold text-gray-700 dark:text-gray-200">
        {i18n.t('settings.language.title')}
      </span>

      <div className="flex flex-wrap justify-center gap-2">
        {[
          {
            value: 'fr',
            label: i18n.t('settings.language.french'),
            flag: '🇫🇷',
          },
          {
            value: 'en',
            label: i18n.t('settings.language.english'),
            flag: '🇬🇧',
          },
        ].map(({ value, label, flag }) => (
          <button
            key={value}
            onClick={() => handleLanguageChange(value)}
            className={`flex w-28 flex-col items-center rounded-xl p-4 transition-all ${
              language === value
                ? 'bg-white text-blue-600 shadow-lg dark:bg-gray-700 dark:text-blue-400'
                : 'bg-gray-50/50 text-gray-500 hover:bg-gray-50 hover:text-gray-400 dark:bg-gray-900/50 dark:text-gray-400 dark:hover:bg-gray-700'
            } `}
          >
            <span className="mb-2 text-2xl">{flag}</span>
            <span className="text-sm font-medium">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSettings;
