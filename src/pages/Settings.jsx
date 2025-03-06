import Theme from '../components/Theme';

const Settings = () => {
  return (
    <div className='flex flex-col items-center p-4 min-h-screen bg-gray-100 dark:bg-gray-900'>
      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Paramètres</h1>
      <Theme />
      {/* Ajoutez d'autres composants de paramètres ici */}
    </div>
  );
};

export default Settings;