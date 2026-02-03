import React from 'react';

const Loader = () => {
  return (
    <div className="text-center">
      <div
        className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-blue-400"
        style={{
          animationDuration: '3.5s',
          borderStyle: 'dashed',
        }}
      ></div>
      <h2 className="mt-4 text-zinc-600 dark:text-white">Chargement</h2>
    </div>
  );
};

export default Loader;
