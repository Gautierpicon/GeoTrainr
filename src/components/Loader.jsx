import React from 'react';
import { useTranslation } from 'react-i18next';

const Loader = () => {
  const { t } = useTranslation();

  return (
    <div className="text-center">
      <div
        className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-blue-400"
        style={{
          animationDuration: '3.5s',
          borderStyle: 'dashed',
        }}
      ></div>
      <h2 className="mt-4 text-zinc-600 dark:text-white">
        {t('quiz.loading')}
      </h2>
    </div>
  );
};

export default Loader;
