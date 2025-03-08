import React from 'react';

const Loader = () => {
  return (
    <div className="text-center">
      <div
        className="w-16 h-16 border-4 border-blue-400 rounded-full animate-spin mx-auto"
        style={{ 
          animationDuration: '3.5s', 
          borderStyle: 'dashed' 
        }}
      ></div>
      <h2 className="text-zinc-600 dark:text-white mt-4">Chargement</h2>
    </div>
  );
};

export default Loader;