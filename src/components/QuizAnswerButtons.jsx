import React, { useState } from "react";

const QuizAnswerButtons = ({ 
  children, 
  isCorrect, 
  isSelected, 
  showFeedback, 
  onClick, 
  disabled 
}) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (disabled) return;
    setClicked(true);
    onClick();
  };

  const shouldAnimate = (showFeedback && isCorrect) || 
                        (showFeedback && isSelected && !isCorrect);

  const buttonColor = showFeedback 
    ? (isCorrect ? "bg-green-400 dark:bg-green-600" : "bg-red-400 dark:bg-red-600")
    : "bg-gray-200 dark:bg-gray-800";

  return (
    <button
      onClick={handleClick}
      className={`bg-white dark:bg-gray-600 cursor-pointer text-center w-full max-w-md rounded-2xl h-14 relative text-black dark:text-white text-xl font-semibold overflow-hidden shadow-lg transition-shadow duration-500 
        ${!disabled ? "hover:border hover:border-gray-400" : ""} // Accentue légèrement l'ombre au hover si pas désactivé
      `}
      type="button"
      disabled={disabled}
    >
      <div
        className={`${buttonColor} rounded-xl h-12 flex items-center justify-center absolute left-1 top-[4px] transition-all duration-900 ${
          shouldAnimate ? "w-[calc(100%-8px)]" : "w-0"
        }`}
      ></div>
      <span className="absolute inset-0 flex items-center justify-center">
        {children}
      </span>
    </button>
  );
};

export default QuizAnswerButtons;
