import React, { useState, useEffect } from "react";
import countryData from "../data/countries.json";
import Favicon from "../components/Favicon";
import QuizAnswerButtons from "../components/QuizAnswerButtons";

const countries = Object.entries(countryData).map(([code, name]) => ({
  code,
  name
}));

const FlagsQuiz = () => {
  const [question, setQuestion] = useState(null);
  const [selected, setSelected] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

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
  };

  useEffect(() => {
    generateQuestion();
  }, []);

  const handleSelect = (option) => {
    if (selected !== null) return;
    setSelected(option);
    setShowFeedback(true);
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
  }, [showFeedback]); // L'effet se met à jour dès que showFeedback change

  if (!question) return <div>Chargement...</div>;

  return (
    <div className="flex flex-col items-center p-4 justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <Favicon countryCode={question.correct.code} />
      
      <img
        src={`https://flagcdn.com/${question.correct.code}.svg`}
        alt={`${question.correct.name}`}
        className="w-96 h-auto mb-6 shadow-lg"
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
          ${showFeedback ? "bg-blue-500 hover:bg-blue-600 dark:hover:bg-blue-400" : "bg-gray-400 dark:bg-gray-400 cursor-not-allowed"}
        `}
        disabled={!showFeedback} // Désactivé tant qu'aucune réponse n'est sélectionnée
      >
        Prochaine question
      </button>
    </div>
  );
};

export default FlagsQuiz;