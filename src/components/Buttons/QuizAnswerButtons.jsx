import React from 'react';

const QuizAnswerButtons = ({
  children,
  isCorrect,
  isSelected,
  showFeedback,
  onClick,
  disabled,
}) => {
  const handleClick = () => {
    if (disabled) return;
    onClick();
  };

  const shouldAnimate =
    (showFeedback && isCorrect) || (showFeedback && isSelected && !isCorrect);

  const buttonColor = showFeedback
    ? isCorrect
      ? 'bg-green-400 dark:bg-green-800'
      : 'bg-red-400 dark:bg-red-800'
    : 'bg-gray-200 dark:bg-gray-800';

  return (
    <button
      onClick={handleClick}
      className={`relative h-14 w-full max-w-md cursor-pointer overflow-hidden rounded-2xl bg-white text-center text-xl font-semibold text-black shadow-lg transition-shadow duration-500 dark:bg-slate-600 dark:text-white ${!disabled ? 'hover:border hover:border-gray-400' : ''} `}
      type="button"
      disabled={disabled}
    >
      <div
        className={`${buttonColor} absolute top-[4px] left-1 flex h-12 items-center justify-center rounded-xl transition-all duration-900 ${
          shouldAnimate ? 'w-[calc(100%-8px)]' : 'w-0'
        }`}
      ></div>
      <span className="absolute inset-0 flex items-center justify-center">
        {children}
      </span>
    </button>
  );
};

export default QuizAnswerButtons;
