import React, { useState, useEffect } from "react";
import languageData from "../data/languages.json";
import QuizAnswerButtons from "../components/QuizAnswerButtons";

const languages = Object.entries(languageData).map(([code, data]) => ({
  code,
  name: data.name,
  sentences: data.sentences
}));

const LanguagesQuiz = () => {
  const [question, setQuestion] = useState(null);
  const [selected, setSelected] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const generateQuestion = () => {
    const correctLang = languages[Math.floor(Math.random() * languages.length)];
    const sentence = correctLang.sentences[Math.floor(Math.random() * correctLang.sentences.length)];
    
    const otherLangs = languages.filter((l) => l.code !== correctLang.code);
    // Mélanger les autres langues
    for (let i = otherLangs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [otherLangs[i], otherLangs[j]] = [otherLangs[j], otherLangs[i]];
    }
    
    let options = [correctLang, ...otherLangs.slice(0, 4)];
    // Mélanger les options
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
    
    setQuestion({ 
      correct: correctLang, 
      sentence,
      options 
    });
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
    <div className="flex flex-col items-center p-4 justify-center min-h-[calc(100vh-4.75rem)] bg-gradient-to-b from-green-50 to-emerald-50 dark:from-gray-900 dark:to-green-950">
      <div className="text-3xl mb-8 font-bold text-center dark:text-white">
        {question.sentence}
      </div>
      
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
          ${showFeedback ? "bg-green-700 hover:bg-green-800 dark:bg-emerald-700 dark:hover:bg-emerald-800" : "bg-gray-400 dark:bg-gray-400 cursor-not-allowed"}
        `}
        disabled={!showFeedback}
      >
        Prochaine question
      </button>
    </div>
  );
};

export default LanguagesQuiz;