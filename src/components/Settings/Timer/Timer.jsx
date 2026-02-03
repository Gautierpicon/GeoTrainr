import React, { useState, useEffect } from 'react';

const Timer = ({
  duration = 30,
  onTimeUp,
  isRunning = true,
  className = '',
}) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (isRunning) {
      setTimeLeft(duration);
    }
  }, [duration, isRunning]);

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          onTimeUp && onTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, timeLeft, onTimeUp]);

  const progressPercent = Math.floor((timeLeft / duration) * 100);
  let colorClass = 'bg-green-500';
  if (progressPercent < 60) colorClass = 'bg-yellow-500';
  if (progressPercent < 30) colorClass = 'bg-red-500';

  return (
    <div className={`w-full max-w-md ${className}`}>
      <div className="mb-1 flex items-center justify-between">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Temps restant
        </span>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {timeLeft}s
        </span>
      </div>
      <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
        <div
          className={`h-2.5 rounded-full transition-all duration-1000 ${colorClass}`}
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Timer;
