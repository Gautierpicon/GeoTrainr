import React, { useState, useEffect } from "react";
import countryData from "../data/flags.json";
import Favicon from "../components/Favicon";
import QuizAnswerButtons from "../components/Buttons/QuizAnswerButtons";
import Timer from "../components/Settings/Timer/Timer";
import Loader from "../components/Loader";
import NextQuestionButtons from "../components/Buttons/NextQuestionButtons";

const countries = Object.entries(countryData).map(([code, name]) => ({
  code,
  name
}));

const FlagsQuiz = () => {
  const [question, setQuestion] = useState(null);
  const [selected, setSelected] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  
  const [timerEnabled, setTimerEnabled] = useState(false);
  const [timerDuration, setTimerDuration] = useState(30);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    setTimerEnabled(localStorage.getItem('quizTimerEnabled') === 'true');
    const savedDuration = parseInt(localStorage.getItem('quizTimerDuration') || '30');
    setTimerDuration(savedDuration);
    
    if (localStorage.getItem('quizTimerEnabled') === 'true') {
      setTimerRunning(true);
    }
  }, []);

  useEffect(() => {
    const originalTitle = document.title;
    document.title = `🌎 ${originalTitle}`;

    return () => {
      document.title = originalTitle;
    };
  }, []);

  const generateQuestion = () => {
    const correctCountry = countries[Math.floor(Math.random() * countries.length)];
    
    const otherCountries = countries.filter((c) => c.code !== correctCountry.code);
    for (let i = otherCountries.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [otherCountries[i], otherCountries[j]] = [otherCountries[j], otherCountries[i]];
    }
    
    let options = [correctCountry, ...otherCountries.slice(0, 4)];
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
    
    setQuestion({ correct: correctCountry, options });
    setSelected(null);
    setShowFeedback(false);
    
    if (timerEnabled) {
      setTimerRunning(true);
    }
  };

  useEffect(() => {
    generateQuestion();
  }, []);

  const handleSelect = (option) => {
    if (selected !== null) return;
    setSelected(option);
    setShowFeedback(true);
    setTimerRunning(false);
  };

  const handleTimeUp = () => {
    if (!selected) {
      setSelected(question.correct);
      setShowFeedback(true);
      setTimerRunning(false);
    }
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter" && showFeedback) {
        generateQuestion();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [showFeedback]);

  if (!question) return <Loader />;

  return (
    <div className="flex flex-col items-center p-4 justify-center min-h-[calc(100vh-4.5rem)] bg-gradient-to-b from-indigo-100 to-violet-100 dark:from-gray-900 dark:to-blue-900">
      <Favicon countryCode={question.correct.code} />
      
      {timerEnabled && (
        <Timer 
          duration={timerDuration}
          onTimeUp={handleTimeUp}
          isRunning={timerRunning}
          className="mb-4"
        />
      )}
      
      <img
        src={`https://flagcdn.com/${question.correct.code}.svg`}
        alt={`${question.correct.name}`}
        className="lg:h-70 w-auto mb-6 lg:shadow-lg"
      />
      
      <div className="grid grid-cols-1 gap-4 w-full max-w-md">
        {question.options.map((option) => (
          <QuizAnswerButtons
            key={option.code}
            isCorrect={option.code === question.correct.code}
            isSelected={selected?.code === option.code}
            showFeedback={showFeedback}
            onClick={() => handleSelect(option)}
            disabled={showFeedback}
          >
            {option.name}
          </QuizAnswerButtons>
        ))}
      </div>
      
      <NextQuestionButtons 
        onClick={generateQuestion}
        disabled={!showFeedback}
        variant="flags"
      />
    </div>
  );
};

export default FlagsQuiz;