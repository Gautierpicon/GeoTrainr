import { useState, useEffect } from 'react';

const TimerSettings = () => {
  const [timerEnabled, setTimerEnabled] = useState(
    localStorage.getItem('quizTimerEnabled') === 'true'
  );
  const [timerDuration, setTimerDuration] = useState(
    parseInt(localStorage.getItem('quizTimerDuration') || '30')
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
    <div className="flex flex-col items-center gap-4 p-4 bg-gray-200 rounded-2xl dark:bg-gray-800 w-full max-w-md mx-4 sm:mx-0">
      <span className="text-lg font-semibold text-gray-700 dark:text-gray-200">
        Paramètres du timer
      </span>
      
      <div className="flex items-center justify-between w-full px-4 py-2 bg-white/50 rounded-xl dark:bg-gray-900/50">
        <div className="flex items-center gap-2">
          <ClockIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          <span className="text-gray-600 dark:text-gray-300">Activer le timer</span>
        </div>
        <label className="relative inline-block h-8 w-14 cursor-pointer rounded-full bg-gray-300 dark:bg-gray-600 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-blue-600">
          <input 
            type="checkbox" 
            className="peer sr-only" 
            checked={timerEnabled}
            onChange={() => setTimerEnabled(!timerEnabled)}
          />
          <span className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-gray-300 dark:bg-gray-600 ring-[6px] ring-inset ring-white dark:ring-gray-800 transition-all peer-checked:start-8 peer-checked:w-2 peer-checked:bg-white dark:peer-checked:bg-gray-800 peer-checked:ring-transparent"></span>
        </label>
      </div>

      <div className="w-full p-4 bg-white/50 rounded-xl dark:bg-gray-900/50">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-gray-600 dark:text-gray-300">Durée du timer</span>
            </div>
            <span className="text-blue-600 dark:text-blue-400 font-medium">
              {timerDuration}s
            </span>
          </div>
          
          <div className="flex flex-col gap-2">
            <input 
              type="range" 
              min="5" 
              max="120" 
              step="5"
              value={timerDuration}
              onChange={(e) => setTimerDuration(parseInt(e.target.value))}
              disabled={!timerEnabled}
              className={`w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 ${
                !timerEnabled ? 'opacity-50 cursor-not-allowed' : ''
              } transition-opacity`}
            />
            <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
              <span>5s</span>
              <span>60s</span>
              <span>120s</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ClockIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={className}>
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

export default TimerSettings;