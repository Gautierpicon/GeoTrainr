import ThemeSettings from '../components/Settings/Theme/ThemeSettings';
import TimerSettings from '../components/Settings/Timer/TimerSettings';

const Settings = () => {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center bg-gray-100 p-4 dark:bg-gray-900">
      <h1 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
        Paramètres
      </h1>
      <div className="flex w-full max-w-md flex-col items-center gap-6 px-4">
        <ThemeSettings />
        <TimerSettings />
      </div>
    </div>
  );
};

export default Settings;
