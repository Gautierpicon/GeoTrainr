import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const TimerSettings = () => {
  const { t } = useTranslation();
  const [timerEnabled, setTimerEnabled] = useState(
    localStorage.getItem('quizTimerEnabled') === 'true'
  );
  const [timerDuration, setTimerDuration] = useState(
    parseInt(localStorage.getItem('quizTimerDuration') || '10')
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    localStorage.setItem('quizTimerEnabled', timerEnabled.toString());
    localStorage.setItem('quizTimerDuration', timerDuration.toString());
  }, [timerEnabled, timerDuration, mounted]);

  if (!mounted) return null;

  return (
    <div className="mx-4 flex w-full max-w-md flex-col items-center gap-4 rounded-2xl bg-gray-200 p-4 sm:mx-0 dark:bg-gray-800">
      <span className="text-lg font-semibold text-gray-700 dark:text-gray-200">
        {t('settings.timer.title')}
      </span>

      <div className="flex w-full items-center justify-between rounded-xl bg-white/50 px-4 py-2 dark:bg-gray-900/50">
        <div className="flex items-center gap-2">
          <ClockIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          <span className="text-gray-600 dark:text-gray-300">
            {t('settings.timer.enable')}
          </span>
        </div>
        <label className="relative inline-block h-8 w-14 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:transparent] has-checked:bg-blue-600 dark:bg-gray-600">
          <input
            type="checkbox"
            className="peer sr-only"
            checked={timerEnabled}
            onChange={() => setTimerEnabled(!timerEnabled)}
          />
          <span className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-gray-300 ring-[6px] ring-white transition-all ring-inset peer-checked:start-8 peer-checked:w-2 peer-checked:bg-white peer-checked:ring-transparent dark:bg-gray-600 dark:ring-gray-800 dark:peer-checked:bg-gray-800"></span>
        </label>
      </div>

      {timerEnabled && (
        <div className="w-full rounded-xl bg-white/50 p-4 dark:bg-gray-900/50">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-gray-600 dark:text-gray-300">
                  {t('settings.timer.duration')}
                </span>
              </div>
              <span className="font-medium text-blue-600 dark:text-blue-400">
                {timerDuration}s
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <input
                type="range"
                min="2"
                max="20"
                step="1"
                value={timerDuration}
                onChange={(e) => setTimerDuration(parseInt(e.target.value))}
                className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
              />
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>2s</span>
                <span className="pr-7">10s</span>
                <span>20s</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ClockIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    className={className}
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
);

export default TimerSettings;
