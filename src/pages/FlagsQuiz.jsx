import React, { useState, useEffect } from "react";
import countryData from "../data/flags.json";
import Favicon from "../components/Favicon";
import QuizAnswerButtons from "../components/QuizAnswerButtons";
import Timer from "../components/Settings/Timer/Timer";

const countries = Object.entries(countryData).map(([code, name]) => ({
  code,
  name
}));

const FlagsQuiz = () => {
  const [question, setQuestion] = useState(null);
  const [selected, setSelected] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  
  // États pour le timer
  const [timerEnabled, setTimerEnabled] = useState(false);
  const [timerDuration, setTimerDuration] = useState(30);
  const [timerRunning, setTimerRunning] = useState(false);

  // Charger les paramètres du timer depuis localStorage
  useEffect(() => {
    setTimerEnabled(localStorage.getItem('quizTimerEnabled') === 'true');
    const savedDuration = parseInt(localStorage.getItem('quizTimerDuration') || '30');
    setTimerDuration(savedDuration);
    
    if (localStorage.getItem('quizTimerEnabled') === 'true') {
      setTimerRunning(true);
    }
  }, []);

  const generateQuestion = () => {
    const correctCountry = countries[Math.floor(Math.random() * countries.length)];
    
    const otherCountries = countries.filter((c) => c.code !== correctCountry.code);
    // Mélanger les autres pays
    for (let i = otherCountries.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [otherCountries[i], otherCountries[j]] = [otherCountries[j], otherCountries[i]];
    }
    
    let options = [correctCountry, ...otherCountries.slice(0, 4)];
    // Mélanger les options
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
    
    setQuestion({ correct: correctCountry, options });
    setSelected(null);
    setShowFeedback(false);
    
    // Redémarrer le timer si activé
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
    // Arrêter le timer quand une réponse est sélectionnée
    setTimerRunning(false);
  };

  const handleTimeUp = () => {
    if (!selected) {
      // Seule la bonne réponse est sélectionnée, aucune mauvaise réponse n'est marquée
      setSelected(question.correct);
      setShowFeedback(true);
      setTimerRunning(false);
    }
  };

  // Permet d'écouter la touche "Entrée" et de passer à la prochaine question si une réponse est donnée
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

  if (!question) return <div>Chargement...</div>;

  return (
    <div className="flex flex-col items-center p-4 justify-center min-h-[calc(100vh-4.75rem)] bg-gradient-to-b from-indigo-100 to-violet-100 dark:from-gray-900 dark:to-indigo-900">
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
        className="h-70 w-auto mb-6 shadow-lg"
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
      
      <button
        onClick={generateQuestion}
        className={`mt-6 py-2 px-4 rounded text-white transition-all duration-300 cursor-pointer
          ${showFeedback ? "bg-indigo-500 hover:bg-indigo-600 dark:hover:bg-indigo-400" : "bg-gray-400 dark:bg-gray-400 cursor-not-allowed"}
        `}
        disabled={!showFeedback}
      >
        Prochaine question
      </button>
    </div>
  );
};

export default FlagsQuiz;