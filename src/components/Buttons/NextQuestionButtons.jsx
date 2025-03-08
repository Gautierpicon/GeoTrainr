// NextQuestionButtons.jsx
import React from 'react';

const NextQuestionButtons = ({ onClick, disabled, variant = 'flags' }) => {
  const colorClasses = {
    flags: {
      base: 'bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700',
      disabled: 'bg-gray-400 dark:bg-gray-600'
    },
    scripts: {
      base: 'bg-green-700 hover:bg-green-800 dark:bg-emerald-700 dark:hover:bg-emerald-800',
      disabled: 'bg-gray-400 dark:bg-gray-600'
    }
  };

  return (
    <div className="flex items-center justify-center mt-6">
      <div className="relative group">
        <button
          onClick={onClick}
          disabled={disabled}
          className={`relative inline-block p-px font-semibold leading-6 text-white shadow-2xl rounded-xl transition-all duration-300 ${
            disabled 
              ? `cursor-not-allowed ${colorClasses[variant].disabled}`
              : `cursor-pointer ${colorClasses[variant].base} hover:scale-105 active:scale-95`
          }`}
        >
          <span className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500" />
          
          <span className={`relative z-10 block px-6 py-3 rounded-xl ${
            disabled ? 'bg-opacity-75' : 'bg-opacity-100'
          }`}>
            <div className="relative z-10 flex items-center space-x-2">
              <span className="transition-all duration-500">
                Prochaine Question
              </span>
            </div>
          </span>
        </button>
      </div>
    </div>
  );
};

export default NextQuestionButtons;